import { useMemo, useState } from 'react';
import { units, allWords } from '../data/vocabulary';
import { speak, speechSupported } from '../utils/speech';

const MODES = [
  { id: 'word2def', label: 'Chọn nghĩa đúng', desc: 'Cho từ → chọn định nghĩa' },
  { id: 'def2word', label: 'Chọn từ đúng', desc: 'Cho định nghĩa → chọn từ' },
  { id: 'fill', label: 'Điền từ', desc: 'Cho nghĩa → gõ lại từ' },
  { id: 'listen', label: 'Nghe & chọn', desc: 'Nghe phát âm → chọn từ' },
];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Sinh danh sách câu hỏi từ nguồn từ đã chọn, mỗi câu 4 lựa chọn (trừ mode điền từ).
function buildQuestions(pool, mode, count) {
  const picked = shuffle(pool).slice(0, count);
  return picked.map((w) => {
    const distractors = shuffle(allWords.filter((x) => x.id !== w.id))
      .filter((x) => (mode === 'word2def' ? x.definition : x.word))
      .slice(0, 3);
    const options = shuffle([w, ...distractors]);
    return { word: w, options };
  });
}

export default function PracticePage({ progress }) {
  const { addQuizResult } = progress;
  const [scope, setScope] = useState('1'); // số unit hoặc 'all'
  const [mode, setMode] = useState('word2def');
  const [count, setCount] = useState(10);
  const [quiz, setQuiz] = useState(null);

  const pool = useMemo(() => {
    if (scope === 'all') return allWords;
    return units.find((u) => u.unit === Number(scope))?.words.map((w) => ({ ...w, unit: Number(scope) })) || [];
  }, [scope]);

  const start = () => {
    const n = Math.min(count, pool.length);
    setQuiz({
      mode,
      questions: buildQuestions(pool, mode, n),
      current: 0,
      answers: [],
      finished: false,
    });
  };

  if (!quiz) {
    return (
      <div className="page">
        <div className="page__head">
          <h2>Bài tập</h2>
          <p className="muted">Chọn phạm vi, dạng bài và số câu để bắt đầu.</p>
        </div>

        <div className="setup">
          <label className="field">
            <span>Phạm vi</span>
            <select className="input" value={scope} onChange={(e) => setScope(e.target.value)}>
              <option value="all">Tất cả 30 unit (600 từ)</option>
              {units.map((u) => (
                <option key={u.unit} value={String(u.unit)}>Unit {u.unit}</option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Số câu</span>
            <select className="input" value={count} onChange={(e) => setCount(Number(e.target.value))}>
              {[5, 10, 15, 20].map((n) => (
                <option key={n} value={n}>{n} câu</option>
              ))}
            </select>
          </label>
        </div>

        <div className="mode-grid">
          {MODES.map((m) => {
            const disabled = m.id === 'listen' && !speechSupported;
            return (
              <button
                key={m.id}
                disabled={disabled}
                className={'mode-card' + (mode === m.id ? ' is-active' : '')}
                onClick={() => setMode(m.id)}
                title={disabled ? 'Trình duyệt không hỗ trợ phát âm' : ''}
              >
                <strong>{m.label}</strong>
                <span>{m.desc}</span>
              </button>
            );
          })}
        </div>

        <button className="btn btn--primary btn--lg" onClick={start} disabled={pool.length === 0}>
          Bắt đầu · {Math.min(count, pool.length)} câu
        </button>
      </div>
    );
  }

  return <QuizRunner quiz={quiz} setQuiz={setQuiz} onDone={addQuizResult} onExit={() => setQuiz(null)} />;
}

function QuizRunner({ quiz, setQuiz, onDone, onExit }) {
  const [selected, setSelected] = useState(null);
  const [typed, setTyped] = useState('');
  const [checked, setChecked] = useState(false);

  const q = quiz.questions[quiz.current];
  const isFill = quiz.mode === 'fill';
  const total = quiz.questions.length;

  const promptText =
    quiz.mode === 'word2def' ? q.word.word :
    quiz.mode === 'listen' ? '🔊' :
    q.word.definition;

  const optionText = (o) => (quiz.mode === 'word2def' ? o.definition : o.word);

  const submit = () => {
    let correct;
    if (isFill) {
      correct = typed.trim().toLowerCase() === q.word.word.toLowerCase();
    } else {
      correct = selected && selected.id === q.word.id;
    }
    setChecked(true);
    setQuiz((s) => ({ ...s, answers: [...s.answers, { word: q.word, correct, given: isFill ? typed : selected }] }));
  };

  const next = () => {
    setChecked(false);
    setSelected(null);
    setTyped('');
    if (quiz.current + 1 >= total) {
      const score = quiz.answers.filter((a) => a.correct).length;
      const label = MODES.find((m) => m.id === quiz.mode)?.label || 'Bài tập';
      onDone({ label, score, total });
      setQuiz((s) => ({ ...s, finished: true }));
    } else {
      setQuiz((s) => ({ ...s, current: s.current + 1 }));
    }
  };

  if (quiz.finished) {
    const score = quiz.answers.filter((a) => a.correct).length;
    const pct = Math.round((score / total) * 100);
    return (
      <div className="page">
        <div className="result">
          <div className={'result__ring' + (pct >= 80 ? ' good' : pct >= 50 ? ' ok' : ' bad')}>
            <span>{pct}%</span>
          </div>
          <h2>Bạn đúng {score}/{total} câu</h2>
          <div className="review">
            {quiz.answers.map((a, i) => (
              <div key={i} className={'review__row ' + (a.correct ? 'ok' : 'bad')}>
                <span className="review__mark">{a.correct ? '✓' : '✗'}</span>
                <span className="review__word">{a.word.word}</span>
                <span className="review__def">{a.word.definition}</span>
              </div>
            ))}
          </div>
          <div className="flash-actions">
            <button className="btn btn--primary" onClick={onExit}>Làm bài khác</button>
          </div>
        </div>
      </div>
    );
  }

  const canSubmit = isFill ? typed.trim().length > 0 : !!selected;

  return (
    <div className="page">
      <div className="quiz-top">
        <button className="btn btn--ghost" onClick={onExit}>← Thoát</button>
        <div className="quiz-progress">
          <div className="quiz-progress__fill" style={{ width: `${(quiz.current / total) * 100}%` }} />
        </div>
        <span className="muted">{quiz.current + 1}/{total}</span>
      </div>

      <div className="quiz-card">
        <p className="quiz-label">
          {quiz.mode === 'word2def' && 'Chọn định nghĩa đúng cho từ:'}
          {quiz.mode === 'def2word' && 'Từ nào khớp với định nghĩa này?'}
          {quiz.mode === 'fill' && 'Gõ lại từ tiếng Anh theo nghĩa:'}
          {quiz.mode === 'listen' && 'Nghe và chọn từ đúng:'}
        </p>

        {quiz.mode === 'listen' ? (
          <button className="btn btn--lg" onClick={() => speak(q.word.word)}>🔊 Nghe lại</button>
        ) : (
          <p className="quiz-prompt">{promptText}</p>
        )}

        {isFill ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!checked && canSubmit) submit();
            }}
          >
            <input
              className="input input--lg"
              autoFocus
              value={typed}
              disabled={checked}
              placeholder="Nhập từ…"
              onChange={(e) => setTyped(e.target.value)}
            />
            {checked && (
              <p className={'fill-feedback ' + (quiz.answers.at(-1)?.correct ? 'ok' : 'bad')}>
                {quiz.answers.at(-1)?.correct
                  ? '✓ Chính xác!'
                  : `✗ Đáp án đúng: ${q.word.word}`}
              </p>
            )}
          </form>
        ) : (
          <div className="options">
            {q.options.map((o) => {
              let cls = 'option';
              if (checked) {
                if (o.id === q.word.id) cls += ' is-correct';
                else if (selected && o.id === selected.id) cls += ' is-wrong';
              } else if (selected && o.id === selected.id) {
                cls += ' is-selected';
              }
              return (
                <button
                  key={o.id}
                  className={cls}
                  disabled={checked}
                  onClick={() => setSelected(o)}
                >
                  {optionText(o)}
                </button>
              );
            })}
          </div>
        )}

        <div className="quiz-actions">
          {!checked ? (
            <button className="btn btn--primary" onClick={submit} disabled={!canSubmit}>
              Kiểm tra
            </button>
          ) : (
            <button className="btn btn--primary" onClick={next}>
              {quiz.current + 1 >= total ? 'Xem kết quả' : 'Câu tiếp theo →'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
