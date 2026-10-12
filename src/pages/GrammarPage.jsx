import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { grammarCategories, grammarUnits, totalGrammarUnits } from '../data/grammar';

// Bỏ dấu tiếng Việt để tìm kiếm “hien tai” vẫn ra “hiện tại”.
const fold = (s) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/đ/g, 'd');

export default function GrammarPage({ progress }) {
  const { getGrammarResult, grammarDoneCount } = progress;
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');

  const q = fold(query.trim());

  const groups = useMemo(() => {
    return grammarCategories
      .filter((c) => cat === 'all' || c.id === cat)
      .map((c) => ({
        ...c,
        units: grammarUnits.filter(
          (u) =>
            u.category === c.id &&
            (!q || fold(`${u.id} ${u.title} ${u.summary} ${c.title} ${c.en}`).includes(q))
        ),
      }))
      .filter((g) => g.units.length > 0);
  }, [q, cat]);

  const pct = Math.round((grammarDoneCount / totalGrammarUnits) * 100);

  return (
    <div className="page">
      <div className="page__head grammar-head">
        <div>
          <h2>Ngữ pháp</h2>
          <p className="muted">
            {totalGrammarUnits} chủ điểm · giải thích tiếng Việt · bài tập chấm tự động
          </p>
        </div>
        <Link className="btn btn--primary" to="/grammar/quiz">
          🎯 Luyện tập tổng hợp
        </Link>
      </div>

      <div className="grammar-progress">
        <span>
          Đã làm <strong>{grammarDoneCount}</strong>/{totalGrammarUnits} chủ điểm
        </span>
        <div className="progress-bar progress-bar--sm">
          <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
        </div>
      </div>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder="Tìm chủ điểm (vd: present perfect, mạo từ, giới từ…)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      <div className="chips">
        <button className={'chip' + (cat === 'all' ? ' is-active' : '')} onClick={() => setCat('all')}>
          Tất cả
        </button>
        {grammarCategories.map((c) => (
          <button key={c.id} className={'chip' + (cat === c.id ? ' is-active' : '')} onClick={() => setCat(c.id)}>
            {c.icon} {c.title}
          </button>
        ))}
      </div>

      {groups.length === 0 && <p className="empty">Không tìm thấy chủ điểm phù hợp.</p>}

      {groups.map((g) => {
        const done = g.units.filter((u) => getGrammarResult(u.id)).length;
        return (
          <section key={g.id} className="g-group">
            <h3 className="g-group__title">
              <span>
                {g.icon} {g.title} <span className="g-group__en">{g.en}</span>
              </span>
              <span className="g-group__count">
                {done}/{g.units.length}
              </span>
            </h3>
            <div className="g-unit-grid">
              {g.units.map((u) => {
                const r = getGrammarResult(u.id);
                const best = r ? Math.round((r.best / r.total) * 100) : null;
                return (
                  <Link key={u.id} to={`/grammar/${u.id}`} className={'g-unit' + (r ? ' is-done' : '')}>
                    <span className="g-unit__num">{u.id}</span>
                    <span className="g-unit__body">
                      <span className="g-unit__title">{u.title}</span>
                      <span className="g-unit__summary">{u.summary}</span>
                    </span>
                    {best != null && (
                      <span className={'g-unit__score ' + (best >= 80 ? 'good' : best >= 50 ? 'ok' : 'bad')}>{best}%</span>
                    )}
                  </Link>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
