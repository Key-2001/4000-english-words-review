import { useMemo, useState } from 'react';
import { units, allWords } from '../data/vocabulary';
import VocabCard from '../components/VocabCard';

export default function VocabularyPage({ progress }) {
  const { isLearned, toggleLearned } = progress;
  const [unit, setUnit] = useState(1);
  const [query, setQuery] = useState('');
  const [onlyUnlearned, setOnlyUnlearned] = useState(false);

  const q = query.trim().toLowerCase();

  const list = useMemo(() => {
    const base = q
      ? allWords // khi tìm kiếm thì tìm trên toàn bộ từ
      : units.find((u) => u.unit === unit)?.words.map((w) => ({ ...w, unit })) || [];
    return base.filter((w) => {
      if (q && !(w.word.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q)))
        return false;
      if (onlyUnlearned && isLearned(w.id)) return false;
      return true;
    });
  }, [q, unit, onlyUnlearned, isLearned]);

  return (
    <div className="page">
      <div className="page__head">
        <h2>Từ vựng</h2>
        <p className="muted">
          {q ? `Kết quả tìm kiếm: ${list.length} từ` : `Unit ${unit} · ${list.length} từ`}
        </p>
      </div>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder="Tìm từ hoặc nghĩa (toàn bộ 600 từ)…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="check">
          <input
            type="checkbox"
            checked={onlyUnlearned}
            onChange={(e) => setOnlyUnlearned(e.target.checked)}
          />
          Chỉ hiện từ chưa thuộc
        </label>
      </div>

      {!q && (
        <div className="unit-tabs">
          {units.map((u) => (
            <button
              key={u.unit}
              className={'unit-tab' + (u.unit === unit ? ' is-active' : '')}
              onClick={() => setUnit(u.unit)}
            >
              {u.unit}
            </button>
          ))}
        </div>
      )}

      {list.length === 0 ? (
        <p className="empty">Không có từ nào phù hợp.</p>
      ) : (
        <div className="card-grid">
          {list.map((w) => (
            <VocabCard
              key={w.id}
              item={w}
              learned={isLearned(w.id)}
              onToggle={toggleLearned}
            />
          ))}
        </div>
      )}
    </div>
  );
}
