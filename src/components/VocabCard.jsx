import { useState } from 'react';
import { speak, speechSupported } from '../utils/speech';

export const posLabel = {
  n: 'danh từ',
  v: 'động từ',
  adj: 'tính từ',
  adv: 'trạng từ',
  prep: 'giới từ',
  pron: 'đại từ',
  conj: 'liên từ',
  aux: 'trợ động từ',
  int: 'thán từ',
  abbr: 'viết tắt',
};

// Thẻ từ vựng: hiển thị từ, loại từ, định nghĩa, ví dụ; nút phát âm và đánh dấu đã thuộc.
export default function VocabCard({ item, learned, onToggle, showSource = false, showVi = true }) {
  const [revealed, setRevealed] = useState(false);
  const viVisible = showVi || revealed;
  return (
    <article className={'card' + (learned ? ' card--learned' : '')}>
      <div className="card__head">
        <div className="card__word-row">
          <h3 className="card__word">{item.word}</h3>
          {item.pos && <span className="card__pos">{posLabel[item.pos] || item.pos}</span>}
        </div>
        <div className="card__actions">
          {speechSupported && (
            <button
              className="icon-btn"
              onClick={() => speak(item.word)}
              title="Nghe phát âm"
              aria-label={`Nghe phát âm từ ${item.word}`}
            >
              🔊
            </button>
          )}
          <button
            className={'icon-btn' + (learned ? ' icon-btn--on' : '')}
            onClick={() => onToggle(item.id)}
            title={learned ? 'Bỏ đánh dấu đã thuộc' : 'Đánh dấu đã thuộc'}
            aria-label="Đánh dấu đã thuộc"
          >
            {learned ? '✅' : '⭐'}
          </button>
        </div>
      </div>
      {showSource && (
        <span className="card__source">
          Book {item.book} · Unit {item.unit}
        </span>
      )}
      {item.vi &&
        (viVisible ? (
          <p className="card__vi" lang="vi">
            {item.vi}
          </p>
        ) : (
          <button className="card__vi-reveal" onClick={() => setRevealed(true)}>
            👁 Xem nghĩa tiếng Việt
          </button>
        ))}
      <p className="card__def">{item.definition}</p>
      {item.example && <p className="card__example">“{item.example}”</p>}
    </article>
  );
}
