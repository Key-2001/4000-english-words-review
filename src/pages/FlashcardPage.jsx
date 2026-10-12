import { useEffect, useMemo, useState } from 'react';
import { units } from '../data/vocabulary';
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
  const [unit, setUnit] = useState(1);
  const [order, setOrder] = useState([]);
  const [idx, setIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [frontIsWord, setFrontIsWord] = useState(true);

  const words = useMemo(
    () => units.find((u) => u.unit === unit)?.words || [],
    [unit]
  );

  useEffect(() => {
    setOrder(words.map((_, i) => i));
    setIdx(0);
    setFlipped(false);
  }, [words]);

  const current = words[order[idx]];
  const go = (delta) => {
    setFlipped(false);
    setIdx((i) => (i + delta + order.length) % order.length);
  };

  if (!current) return null;

  return (
    <div className="page">
      <div className="page__head">
        <h2>Flashcard</h2>
        <p className="muted">
          Unit {unit} · thẻ {idx + 1}/{order.length}
        </p>
      </div>

      <div className="toolbar">
        <select className="input" value={unit} onChange={(e) => setUnit(Number(e.target.value))}>
          {units.map((u) => (
            <option key={u.unit} value={u.unit}>Unit {u.unit}</option>
          ))}
        </select>
        <button className="btn" onClick={() => setOrder(shuffle(order))}>🔀 Xáo trộn</button>
        <label className="check">
          <input
            type="checkbox"
            checked={frontIsWord}
            onChange={(e) => setFrontIsWord(e.target.checked)}
          />
          Mặt trước: từ
        </label>
      </div>

      <div className="flash-wrap">
        <button className="flash-nav" onClick={() => go(-1)} aria-label="Thẻ trước">‹</button>

        <div
          className={'flash' + (flipped ? ' is-flipped' : '')}
          onClick={() => setFlipped((f) => !f)}
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
                  {current.pos && <span className="flash__pos">{current.pos}</span>}
                </>
              ) : (
                <span className="flash__def">{current.definition}</span>
              )}
              <span className="flash__hint">Nhấn để lật</span>
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

        <button className="flash-nav" onClick={() => go(1)} aria-label="Thẻ sau">›</button>
      </div>

      <div className="flash-actions">
        {speechSupported && (
          <button className="btn" onClick={() => speak(current.word)}>🔊 Nghe</button>
        )}
        <button
          className={'btn' + (isLearned(current.id) ? ' btn--primary' : '')}
          onClick={() => toggleLearned(current.id)}
        >
          {isLearned(current.id) ? '✅ Đã thuộc' : '⭐ Đánh dấu thuộc'}
        </button>
        <button className="btn" onClick={() => go(1)}>Thẻ tiếp theo →</button>
      </div>
    </div>
  );
}
