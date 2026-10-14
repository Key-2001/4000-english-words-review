import { useState } from 'react';

// Tuỳ chọn hiển thị nhỏ, nhớ trong localStorage (an toàn khi trình duyệt chặn bộ nhớ).
export function usePref(key, initial) {
  const [value, setValue] = useState(() => {
    try {
      const raw = localStorage.getItem(key);
      return raw == null ? initial : JSON.parse(raw);
    } catch {
      return initial;
    }
  });
  const update = (v) => {
    setValue(v);
    try {
      localStorage.setItem(key, JSON.stringify(v));
    } catch {
      /* bỏ qua */
    }
  };
  return [value, update];
}
