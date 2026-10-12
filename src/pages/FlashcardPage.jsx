import { useEffect, useMemo, useRef, useState } from 'react';
import { maskWord } from '../data/vocab';
import { useBook, useSelectedBook } from '../hooks/useBook';
import BookPicker from '../components/BookPicker';
import { posLabel } from '../components/VocabCard';
import { speak, speechSupported } from '../utils/speech';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function FlashcardPage({ progress }) {
  const { isLearned, toggleLearned } = progress;
  const [book, setBook] = useSelectedBook();
  const { units, loading } = useBook(book);
  const [unit, setUnit] = useState(1);
  const [order, setOrder] = useState([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [frontIsWord, setFrontIsWord] = useState(true);

  const words = useMemo(() => units?.find((u) => u.unit === unit)?.words || [], [units, unit]);

  useEffect(() => {
    setOrder(words.map((_, i) => i));
    setIdx(0);
    setFlipped(false);
  }, [words]);

  const changeBook = (id) => {
    setBook(id);
    setUnit(1);
  };

  const current = words[order[idx]];
  const go = (delta) => {
    setFlipped(false);
    setIdx((i) => (i + delta + order.length) % order.length);
  };

  // Vuốt ngang trên điện thoại để chuyển thẻ; chạm để lật.
  const touch = useRef({ x: 0, y: 0, swiped: false });
  const onTouchStart = (e) => {
    const t = e.touches[0];
    touch.current = { x: t.clientX, y: t.clientY, swiped: false };
  };
  const onTouchEnd = (e) => {
    const t = e.changedTouches[0];
    const dx = t.clientX - touch.current.x;
    const dy = t.clientY - touch.current.y;
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      touch.current.swiped = true;
      go(dx < 0 ? 1 : -1);
    }
  };
  const onCardClick = () => {
    if (touch.current.swiped) {
      touch.current.swiped = false;
      return;
    }
    setFlipped((f) => !f);
  };

  return (
    <div className="page">
      <div className="page__head">
        <h2>Flashcard</h2>
        <p className="muted">
          Book {book} · Unit {unit}
          {current && ` · thẻ ${idx + 1}/${order.length}`}
        </p>
      </div>

      <BookPicker value={book} onChange={changeBook} />

      <div className="toolbar">
        <select className="input" value={unit} onChange={(e) => setUnit(Number(e.target.value))}>
          {(units || []).map((u) => (
            <option key={u.unit} value={u.unit}>
              Unit {u.unit}
            </option>
          ))}
        </select>
        <button className="btn" onClick={() => setOrder(shuffle(order))} disabled={!current}>
          🔀 Xáo trộn
        </button>
        <label className="check">
          <input type="checkbox" checked={frontIsWord} onChange={(e) => setFrontIsWord(e.target.checked)} />
          Mặt trước: từ
        </label>
      </div>

      {loading || !current ? (
        <p className="empty">Đang tải…</p>
      ) : (
        <>
          <div className="flash-wrap">
            <button className="flash-nav" onClick={() => go(-1)} aria-label="Thẻ trước">
              ‹
            </button>

            <div
              className={'flash' + (flipped ? ' is-flipped' : '')}
              onClick={onCardClick}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setFlipped((f) => !f);
                if (e.key === 'ArrowRight') go(1);
                if (e.key === 'ArrowLeft') go(-1);
              }}
            >
              <div className="flash__inner">
                <div className="flash__face flash__front">
                  {frontIsWord ? (
                    <>
                      <span className="flash__word">{current.word}</span>
                      {current.pos && <span className="flash__pos">{posLabel[current.pos] || current.pos}</span>}
                    </>
                  ) : (
                    <span className="flash__def">{maskWord(current.definition, current.word)}</span>
                  )}
                  <span className="flash__hint">Chạm để lật · vuốt để chuyển thẻ</span>
                </div>
                <div className="flash__face flash__back">
                  {frontIsWord ? (
                    <>
                      <p className="flash__def">{current.definition}</p>
                      {current.example && <p className="flash__ex">“{current.example}”</p>}
                    </>
                  ) : (
                    <span className="flash__word">{current.word}</span>
                  )}
                </div>
              </div>
            </div>

            <button className="flash-nav" onClick={() => go(1)} aria-label="Thẻ sau">
              ›
            </button>
          </div>

          <div className="flash-actions">
            <button className="btn" onClick={() => go(-1)} aria-label="Thẻ trước">
              ‹ Trước
            </button>
            {speechSupported && (
              <button className="btn" onClick={() => speak(current.word)}>
                🔊 Nghe
              </button>
            )}
            <button
              className={'btn' + (isLearned(current.id) ? ' btn--primary' : '')}
              onClick={() => toggleLearned(current.id)}
            >
              {isLearned(current.id) ? '✅ Đã thuộc' : '⭐ Thuộc'}
            </button>
            <button className="btn" onClick={() => go(1)} aria-label="Thẻ sau">
              Sau ›
            </button>
          </div>
        </>
      )}
    </div>
  );
}
