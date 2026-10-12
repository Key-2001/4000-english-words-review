import { useEffect, useState } from 'react';
import { loadBook } from '../data/vocab';

const KEY = 'fw4000-book';

// Cuốn sách đang chọn — nhớ giữa các trang và các lần mở app.
export function useSelectedBook() {
  const [book, setBook] = useState(() => {
    try {
      const v = Number(localStorage.getItem(KEY));
      return v >= 1 && v <= 6 ? v : 1;
    } catch {
      return 1;
    }
  });
  const change = (id) => {
    setBook(id);
    try {
      localStorage.setItem(KEY, String(id));
    } catch {
      /* bỏ qua */
    }
  };
  return [book, change];
}

// Tải dữ liệu một cuốn (lazy). Trả về units = null khi đang tải.
export function useBook(id) {
  const [state, setState] = useState({ id: null, units: null, error: false });

  useEffect(() => {
    let cancelled = false;
    loadBook(id)
      .then((units) => !cancelled && setState({ id, units, error: false }))
      .catch(() => !cancelled && setState({ id, units: null, error: true }));
    return () => {
      cancelled = true;
    };
  }, [id]);

  const ready = state.id === id;
  return { units: ready ? state.units : null, loading: !ready, error: ready && state.error };
}
