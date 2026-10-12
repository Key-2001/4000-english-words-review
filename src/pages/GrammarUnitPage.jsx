import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getCategory, getUnitMeta, loadUnit, totalGrammarUnits } from '../data/grammar';
import RichText, { plainText } from '../components/RichText';
import GrammarExercises from '../components/GrammarExercises';
import { speak, speechSupported } from '../utils/speech';

export default function GrammarUnitPage({ progress }) {
  const { unitId } = useParams();
  const id = Number(unitId);
  const meta = getUnitMeta(id);
  const [unit, setUnit] = useState(null);
  const [error, setError] = useState(false);
  const { getGrammarResult, saveGrammarResult, addQuizResult } = progress;

  useEffect(() => {
    let cancelled = false;
    setUnit(null);
    setError(false);
    window.scrollTo(0, 0);
    if (!meta) return;
    loadUnit(id)
      .then((u) => !cancelled && setUnit(u))
      .catch(() => !cancelled && setError(true));
    return () => {
      cancelled = true;
    };
  }, [id, meta]);

  if (!meta) {
    return (
      <div className="page">
        <p className="empty">
          Không tìm thấy chủ điểm này. <Link to="/grammar">← Về danh sách ngữ pháp</Link>
        </p>
      </div>
    );
  }

  const category = getCategory(meta.category);
  const prev = getUnitMeta(id - 1);
  const next = getUnitMeta(id + 1);
  const result = getGrammarResult(id);

  const onFinish = (score, total) => {
    saveGrammarResult(id, score, total);
    addQuizResult({ label: `Ngữ pháp · Unit ${id}`, score, total });
  };

  return (
    <div className="page lesson">
      <nav className="breadcrumb">
        <Link to="/grammar">Ngữ pháp</Link> <span>›</span> {category.icon} {category.title}
      </nav>

      <header className="lesson__head">
        <span className="lesson__badge">Unit {id}</span>
        <h2 className="lesson__title">{meta.title}</h2>
        <p className="muted">{meta.summary}</p>
        {result && (
          <p className="lesson__best">
            Điểm cao nhất: {result.best}/{result.total} · đã làm {result.attempts} lần
          </p>
        )}
      </header>

      {error && (
        <p className="empty">
          Không tải được nội dung. <button className="btn" onClick={() => window.location.reload()}>Thử lại</button>
        </p>
      )}
      {!unit && !error && <p className="empty">Đang tải bài học…</p>}

      {unit && (
        <>
          <RichText as="p" className="lesson__intro" text={unit.intro} />

          {unit.sections.map((s, i) => (
            <section key={i} className="lesson__section">
              <h3>{s.title}</h3>
              {s.text && <RichText as="p" text={s.text} />}
              {s.table && (
                <div className="table-wrap">
                  <table className="g-table">
                    <thead>
                      <tr>
                        {s.table.head.map((h, j) => (
                          <th key={j}>{h}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td key={c}>{cell}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
              {s.examples && (
                <ul className="examples">
                  {s.examples.map((ex, j) => (
                    <li key={j}>
                      <RichText text={ex} />
                      {speechSupported && (
                        <button
                          className="icon-btn icon-btn--sm"
                          onClick={() => speak(plainText(ex).replace(/\(.*?\)/g, ''))}
                          aria-label="Nghe câu ví dụ"
                          title="Nghe câu ví dụ"
                        >
                          🔊
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {unit.tips?.length > 0 && (
            <aside className="tips">
              <h3>⚠️ Lưu ý & lỗi thường gặp</h3>
              <ul>
                {unit.tips.map((t, i) => (
                  <li key={i}>
                    <RichText text={t} />
                  </li>
                ))}
              </ul>
            </aside>
          )}

          <section className="lesson__section">
            <h3>📝 Bài tập ({unit.exercises.length} câu)</h3>
            <GrammarExercises key={id} exercises={unit.exercises} onFinish={onFinish} />
          </section>
        </>
      )}

      <nav className="lesson__nav">
        {prev ? (
          <Link className="lesson__navlink" to={`/grammar/${prev.id}`}>
            <small>← Unit {prev.id}</small>
            <span>{prev.title}</span>
          </Link>
        ) : (
          <span />
        )}
        {next && id < totalGrammarUnits ? (
          <Link className="lesson__navlink lesson__navlink--next" to={`/grammar/${next.id}`}>
            <small>Unit {next.id} →</small>
            <span>{next.title}</span>
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
}
