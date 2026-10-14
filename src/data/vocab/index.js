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

// Mỗi cuốn tải song song phần từ vựng và phần nghĩa tiếng Việt.
const load = (book, words, vi) => Promise.all([words(), vi()]).then(([w, v]) => fromCompact(book, w.default, v.default));
const loaders = {
  1: () => load(1, () => import('./book1.js'), () => import('./vi1.js')),
  2: () => load(2, () => import('./book2.js'), () => import('./vi2.js')),
  3: () => load(3, () => import('./book3.js'), () => import('./vi3.js')),
  4: () => load(4, () => import('./book4.js'), () => import('./vi4.js')),
  5: () => load(5, () => import('./book5.js'), () => import('./vi5.js')),
  6: () => load(6, () => import('./book6.js'), () => import('./vi6.js')),
};

// Dạng gọn trong file: [[word, pos, definition, example], ...] cho mỗi unit; vi = { word: 'nghĩa tiếng Việt' }.
function fromCompact(book, units, vi = {}) {
  return units.map((list, i) => ({
    unit: i + 1,
    words: list.map(([word, pos, definition, example]) => ({
      // Book 1 giữ định dạng id cũ (u1-afraid) để không mất tiến độ “đã thuộc” đã lưu.
      id: `${book === 1 ? '' : `b${book}-`}u${i + 1}-${word.replace(/\s+/g, '_')}`,
      word,
      pos,
      definition,
      example,
      vi: vi[word] || '',
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

// Bỏ dấu tiếng Việt để tìm kiếm “so hai” vẫn ra “sợ hãi”.
export const fold = (str) =>
  String(str).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
