import { useMemo, useState } from 'react';
import { maskWord } from '../data/vocab';
import { useBook, useSelectedBook } from '../hooks/useBook';
import BookPicker from '../components/BookPicker';
import { speak, speechSupported } from '../utils/speech';

const MODES = [
  { id: 'word2vi', label: 'Nghĩa tiếng Việt', desc: 'Cho từ → chọn nghĩa Việt' },
  { id: 'vi2word', label: 'Việt → Anh', desc: 'Cho nghĩa Việt → gõ từ' },
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

// Sinh câu hỏi từ phạm vi đã chọn; phương án nhiễu lấy trong cùng cuốn sách.
function buildQuestions(pool, bookWords, mode, count) {
  const picked = shuffle(pool).slice(0, count);
  return picked.map((w) => {
    const distractors = shuffle(
      bookWords.filter((x) => x.id !== w.id && x.word !== w.word && (mode !== 'word2vi' || (x.vi && x.vi !== w.vi)))
    ).slice(0, 3);
    // Việt → Anh: chấp nhận mọi từ trong cuốn có cùng nghĩa tiếng Việt (từ đồng nghĩa).
    const accept = mode === 'vi2word' ? bookWords.filter((x) => x.vi === w.vi).map((x) => normalize(x.word)) : [];
    return { word: w, options: shuffle([w, ...distractors]), accept };
  });
}

const normalize = (s) => s.trim().toLowerCase().replace(/[’‘]/g, "'").replace(/\s+/g, ' ');

export default function PracticePage({ progress }) {
  const { addQuizResult } = progress;
  const [book, setBook] = useSelectedBook();
  const { units, loading } = useBook(book);
  const [scope, setScope] = useState('1'); // số unit hoặc 'all' (cả cuốn)
  const [mode, setMode] = useState('word2vi');
  const [count, setCount] = useState(10);
  const [quiz, setQuiz] = useState(null);

  const bookWords = useMemo(() => (units || []).flatMap((u) => u.words), [units]);
  const pool = useMemo(() => {
    if (scope === 'all') return bookWords;
    return units?.find((u) => u.unit === Number(scope))?.words || [];
  }, [scope, units, bookWords]);

  const changeBook = (id) => {
    setBook(id);
    setScope('1');
  };

  const start = () => {
    const n = Math.min(count, pool.length);
    setQuiz({
      mode,
      book,
      scopeLabel: scope === 'all' ? `Book ${book}` : `Book ${book} · Unit ${scope}`,
      questions: buildQuestions(pool, bookWords, mode, n),
      current: 0,
      answers: [],
      finished: false,
    });
  };

  if (!quiz) {
    return (
      <div className="page">
        <div className="page__head">
          <h2>Bài tập từ vựng</h2>
          <p className="muted">Chọn cuốn sách, phạm vi, dạng bài và số câu để bắt đầu.</p>
        </div>

        <BookPicker value={book} onChange={changeBook} />

        <div className="setup">
          <label className="field">
            <span>Phạm vi</span>
            <select className="input" value={scope} onChange={(e) => setScope(e.target.value)}>
              <option value="all">Cả Book {book} (600 từ)</option>
              {(units || []).map((u) => (
                <option key={u.unit} value={String(u.unit)}>
                  Unit {u.unit}
                </option>
              ))}
            </select>
          </label>

          <label className="field">
            <span>Số câu</span>
            <select className="input" value={count} onChange={(e) => setCount(Number(e.target.value))}>
              {[5, 10, 15, 20, 30].map((n) => (
                <option key={n} value={n}>
                  {n} câu
                </option>
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

        <button className="btn btn--primary btn--lg" onClick={start} disabled={loading || pool.length === 0}>
          {loading ? 'Đang tải…' : `Bắt đầu · ${Math.min(count, pool.length)} câu`}
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
  const isFill = quiz.mode === 'fill' || quiz.mode === 'vi2word';
  const total = quiz.questions.length;

  // Khi đề bài là định nghĩa, che từ cần đoán để không lộ đáp án.
  const promptText =
    quiz.mode === 'word2def' || quiz.mode === 'word2vi'
      ? q.word.word
      : quiz.mode === 'vi2word'
        ? q.word.vi
        : quiz.mode === 'listen'
          ? '🔊'
          : maskWord(q.word.definition, q.word.word);

  const optionText = (o) => (quiz.mode === 'word2def' ? o.definition : quiz.mode === 'word2vi' ? o.vi : o.word);

  const submit = () => {
    const correct = isFill
      ? normalize(typed) === normalize(q.word.word) || q.accept.includes(normalize(typed))
      : selected && selected.id === q.word.id;
    setChecked(true);
    setQuiz((s) => ({ ...s, answers: [...s.answers, { word: q.word, correct, given: isFill ? typed : selected }] }));
  };

  const next = () => {
    setChecked(false);
    setSelected(null);
    setTyped('');
    if (quiz.current + 1 >= total) {
      const score = quiz.answers.filter((a) => a.correct).length;
      const label = `${MODES.find((m) => m.id === quiz.mode)?.label || 'Bài tập'} · ${quiz.scopeLabel}`;
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
          <h2>
            Bạn đúng {score}/{total} câu
          </h2>
          <p className="muted">{quiz.scopeLabel}</p>
          <div className="review">
            {quiz.answers.map((a, i) => (
              <div key={i} className={'review__row ' + (a.correct ? 'ok' : 'bad')}>
                <span className="review__mark">{a.correct ? '✓' : '✗'}</span>
                <span className="review__word">{a.word.word}</span>
                <span className="review__def">
                  {a.word.vi && <span className="review__vi">{a.word.vi} · </span>}
                  {a.word.definition}
                </span>
              </div>
            ))}
          </div>
          <div className="flash-actions">
            <button className="btn btn--primary" onClick={onExit}>
              Làm bài khác
            </button>
          </div>
        </div>
      </div>
    );
  }

  const canSubmit = isFill ? typed.trim().length > 0 : !!selected;

  return (
    <div className="page">
      <div className="quiz-top">
        <button className="btn btn--ghost" onClick={onExit}>
          ← Thoát
        </button>
        <div className="quiz-progress">
          <div className="quiz-progress__fill" style={{ width: `${(quiz.current / total) * 100}%` }} />
        </div>
        <span className="muted">
          {quiz.current + 1}/{total}
        </span>
      </div>

      <div className="quiz-card">
        <p className="quiz-label">
          {quiz.mode === 'word2vi' && 'Chọn nghĩa tiếng Việt đúng của từ:'}
          {quiz.mode === 'vi2word' && 'Gõ từ tiếng Anh có nghĩa là:'}
          {quiz.mode === 'word2def' && 'Chọn định nghĩa đúng cho từ:'}
          {quiz.mode === 'def2word' && 'Từ nào khớp với định nghĩa này?'}
          {quiz.mode === 'fill' && 'Gõ lại từ tiếng Anh theo nghĩa:'}
          {quiz.mode === 'listen' && 'Nghe và chọn từ đúng:'}
        </p>

        {quiz.mode === 'listen' ? (
          <button className="btn btn--lg" onClick={() => speak(q.word.word)}>
            🔊 Nghe lại
          </button>
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
            {q.word.example && quiz.mode === 'fill' && (
              <p className="quiz-hint">Ví dụ: “{maskWord(q.word.example, q.word.word)}”</p>
            )}
            <input
              className="input input--lg"
              autoFocus
              value={typed}
              disabled={checked}
              placeholder="Nhập từ…"
              autoCapitalize="off"
              autoCorrect="off"
              spellCheck={false}
              onChange={(e) => setTyped(e.target.value)}
            />
            {checked && (
              <p className={'fill-feedback ' + (quiz.answers.at(-1)?.correct ? 'ok' : 'bad')}>
                {quiz.answers.at(-1)?.correct ? '✓ Chính xác!' : `✗ Đáp án đúng: ${q.word.word}`}
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
                <button key={o.id} className={cls} disabled={checked} onClick={() => setSelected(o)}>
                  {optionText(o)}
                </button>
              );
            })}
          </div>
        )}

        {checked && q.word.vi && (
          <p className="quiz-meaning" lang="vi">
            <strong>{q.word.word}</strong> = {q.word.vi}
          </p>
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
