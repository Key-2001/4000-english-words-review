// Bộ từ vựng 4000 Essential English Words, Book 1–6 (mỗi cuốn 30 unit × 20 từ).
// Danh sách từ và cách chia unit theo sách; định nghĩa và câu ví dụ được biên soạn riêng.
// Mỗi cuốn là một chunk riêng, chỉ tải khi cần.

export const books = [1, 2, 3, 4, 5, 6].map((id) => ({
  id,
  title: `Book ${id}`,
  units: 30,
  words: 600,
}));

export const totalWordsAll = books.reduce((s, b) => s + b.words, 0);

const loaders = {
  1: () => import('./book1.js').then((m) => fromCompact(1, m.default)),
  2: () => import('./book2.js').then((m) => fromCompact(2, m.default)),
  3: () => import('./book3.js').then((m) => fromCompact(3, m.default)),
  4: () => import('./book4.js').then((m) => fromCompact(4, m.default)),
  5: () => import('./book5.js').then((m) => fromCompact(5, m.default)),
  6: () => import('./book6.js').then((m) => fromCompact(6, m.default)),
};

// Dạng gọn trong file: [[word, pos, definition, example], ...] cho mỗi unit.
function fromCompact(book, units) {
  return units.map((list, i) => ({
    unit: i + 1,
    words: list.map(([word, pos, definition, example]) => ({
      // Book 1 giữ định dạng id cũ (u1-afraid) để không mất tiến độ “đã thuộc” đã lưu.
      id: `${book === 1 ? '' : `b${book}-`}u${i + 1}-${word.replace(/\s+/g, '_')}`,
      word,
      pos,
      definition,
      example,
      unit: i + 1,
      book,
    })),
  }));
}

const cache = new Map();

export function loadBook(id) {
  if (!cache.has(id)) {
    const p = loaders[id]().catch((err) => {
      cache.delete(id);
      throw err;
    });
    cache.set(id, p);
  }
  return cache.get(id);
}

export async function loadAllBooks() {
  const all = await Promise.all(books.map((b) => loadBook(b.id)));
  return all.flatMap((units) => units.flatMap((u) => u.words));
}

// Che từ (và các dạng biến đổi đơn giản) trong câu để không lộ đáp án khi làm bài.
export function maskWord(text, word) {
  if (!text) return text;
  const base = word.toLowerCase();
  const stem = base.length > 4 && /[ey]$/.test(base) ? base.slice(0, -1) : base;
  const re = new RegExp(`\\b${stem.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[a-z]*`, 'gi');
  return text.replace(re, '_____');
}
