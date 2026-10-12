import { useState } from 'react';
import { Link } from 'react-router-dom';

// Chuẩn hoá câu trả lời: không phân biệt hoa/thường, dấu nháy cong/thẳng, khoảng trắng, dấu chấm cuối.
function normalize(s) {
  return String(s)
    .toLowerCase()
    .replace(/[’‘`´]/g, "'")
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/[.!?]+$/, '')
    .trim();
}

function isCorrect(ex, value) {
  if (value == null || value === '') return false;
  if (ex.type === 'choice') return value === ex.answer;
  const v = normalize(value);
  const noApos = (s) => s.replace(/'/g, '');
  return ex.answers.some((a) => normalize(a) === v || noApos(normalize(a)) === noApos(v));
}

function correctText(ex) {
  return ex.type === 'choice' ? ex.answer : ex.answers.join(' / ');
}

// Phiếu bài tập: làm tất cả câu rồi bấm "Kiểm tra" để chấm.
export default function GrammarExercises({ exercises, onFinish, showUnitLinks = false }) {
  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const setAnswer = (i, v) => setAnswers((a) => ({ ...a, [i]: v }));
  const results = exercises.map((ex, i) => isCorrect(ex, answers[i]));
  const score = results.filter(Boolean).length;
  const answeredCount = exercises.filter((_, i) => answers[i] != null && answers[i] !== '').length;
  const pct = Math.round((score / exercises.length) * 100);

  const check = () => {
    setChecked(true);
    onFinish?.(score, exercises.length);
  };

  const reset = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="worksheet">
      {checked && (
        <div className={'ws-score ' + (pct >= 80 ? 'good' : pct >= 50 ? 'ok' : 'bad')}>
          <strong>
            Đúng {score}/{exercises.length} câu ({pct}%)
          </strong>
          <span>{pct >= 80 ? 'Tuyệt vời! 🎉' : pct >= 50 ? 'Khá tốt, xem lại các câu sai nhé.' : 'Hãy đọc lại phần lý thuyết rồi thử lại.'}</span>
        </div>
      )}

      <ol className="ws-list">
        {exercises.map((ex, i) => {
          const parts = ex.q.split('___');
          const ok = results[i];
          return (
            <li key={i} className={'ws-item' + (checked ? (ok ? ' is-ok' : ' is-bad') : '')}>
              <div className="ws-q">
                <span className="ws-num">{i + 1}</span>
                <p className="ws-text">
                  {parts.map((p, j) => (
                    <span key={j}>
                      {p}
                      {j < parts.length - 1 &&
                        (ex.type === 'gap' ? (
                          <input
                            className="ws-input"
                            value={answers[i] ?? ''}
                            disabled={checked}
                            onChange={(e) => setAnswer(i, e.target.value)}
                            aria-label={`Câu ${i + 1}: điền vào chỗ trống`}
                            autoCapitalize="off"
                            autoCorrect="off"
                            spellCheck={false}
                          />
                        ) : (
                          <span className="ws-blank">{answers[i] && parts.length === 2 ? answers[i] : '____'}</span>
                        ))}
                    </span>
                  ))}
                  {ex.hint && <span className="ws-hint"> ({ex.hint})</span>}
                </p>
              </div>

              {ex.type === 'choice' && (
                <div className="ws-options">
                  {ex.options.map((opt) => {
                    let cls = 'ws-opt';
                    if (answers[i] === opt) cls += ' is-selected';
                    if (checked && opt === ex.answer) cls += ' is-correct';
                    if (checked && answers[i] === opt && opt !== ex.answer) cls += ' is-wrong';
                    return (
                      <button key={opt} type="button" className={cls} disabled={checked} onClick={() => setAnswer(i, opt)}>
                        {opt}
                      </button>
                    );
                  })}
                </div>
              )}

              {checked && (
                <div className="ws-feedback">
                  {ok ? <span className="ws-mark ok">✓ Đúng</span> : <span className="ws-mark bad">✗ Đáp án: {correctText(ex)}</span>}
                  {ex.explain && <span className="ws-explain">{ex.explain}</span>}
                  {showUnitLinks && ex.unitId && (
                    <Link className="ws-unit-link" to={`/grammar/${ex.unitId}`}>
                      Unit {ex.unitId} · {ex.unitTitle} →
                    </Link>
                  )}
                </div>
              )}
            </li>
          );
        })}
      </ol>

      <div className="ws-actions">
        {!checked ? (
          <>
            <span className="muted">
              Đã làm {answeredCount}/{exercises.length} câu
            </span>
            <button className="btn btn--primary" onClick={check}>
              Kiểm tra
            </button>
          </>
        ) : (
          <button className="btn btn--primary" onClick={reset}>
            Làm lại
          </button>
        )}
      </div>
    </div>
  );
}
