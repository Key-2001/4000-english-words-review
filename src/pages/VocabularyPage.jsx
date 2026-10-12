import { useEffect, useMemo, useState } from 'react';
import { loadAllBooks, totalWordsAll } from '../data/vocab';
import { useBook, useSelectedBook } from '../hooks/useBook';
import VocabCard from '../components/VocabCard';
import BookPicker from '../components/BookPicker';
import UnitTabs from '../components/UnitTabs';

export default function VocabularyPage({ progress }) {
  const { isLearned, toggleLearned } = progress;
  const [book, setBook] = useSelectedBook();
  const { units, loading, error } = useBook(book);
  const [unit, setUnit] = useState(1);
  const [query, setQuery] = useState('');
  const [onlyUnlearned, setOnlyUnlearned] = useState(false);
  const [allWords, setAllWords] = useState(null);

  const q = query.trim().toLowerCase();

  // Chỉ tải toàn bộ 6 cuốn khi người dùng bắt đầu tìm kiếm.
  useEffect(() => {
    if (q && !allWords) loadAllBooks().then(setAllWords).catch(() => setAllWords([]));
  }, [q, allWords]);

  const changeBook = (id) => {
    setBook(id);
    setUnit(1);
  };

  const list = useMemo(() => {
    const base = q ? allWords || [] : units?.find((u) => u.unit === unit)?.words || [];
    return base.filter((w) => {
      if (q && !(w.word.toLowerCase().includes(q) || w.definition.toLowerCase().includes(q))) return false;
      if (onlyUnlearned && isLearned(w.id)) return false;
      return true;
    });
  }, [q, allWords, units, unit, onlyUnlearned, isLearned]);

  const searching = q && !allWords;

  return (
    <div className="page">
      <div className="page__head">
        <h2>Từ vựng</h2>
        <p className="muted">
          {q
            ? searching
              ? 'Đang tìm…'
              : `Kết quả tìm kiếm trong ${totalWordsAll} từ: ${list.length}`
            : `Book ${book} · Unit ${unit} · ${list.length} từ`}
        </p>
      </div>

      <div className="toolbar">
        <input
          className="input"
          type="search"
          placeholder={`Tìm từ hoặc nghĩa (cả 6 cuốn, ${totalWordsAll} từ)…`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <label className="check">
          <input type="checkbox" checked={onlyUnlearned} onChange={(e) => setOnlyUnlearned(e.target.checked)} />
          Chỉ hiện từ chưa thuộc
        </label>
      </div>

      {!q && (
        <>
          <BookPicker value={book} onChange={changeBook} />
          {units && <UnitTabs units={units} value={unit} onChange={setUnit} />}
        </>
      )}

      {error ? (
        <p className="empty">Không tải được dữ liệu. Hãy thử tải lại trang.</p>
      ) : (!q && loading) || searching ? (
        <p className="empty">Đang tải…</p>
      ) : list.length === 0 ? (
        <p className="empty">Không có từ nào phù hợp.</p>
      ) : (
        <div className="card-grid">
          {list.map((w) => (
            <VocabCard key={w.id} item={w} learned={isLearned(w.id)} onToggle={toggleLearned} showSource={!!q} />
          ))}
        </div>
      )}
    </div>
  );
}
