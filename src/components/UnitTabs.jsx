import { useEffect, useRef } from 'react';

// Dãy nút chọn unit. Trên mobile là một hàng vuốt ngang; unit đang chọn luôn được cuộn vào giữa.
export default function UnitTabs({ units, value, onChange }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const active = el?.querySelector('.is-active');
    if (!el || !active || el.scrollWidth <= el.clientWidth) return;
    el.scrollTo({
      left: active.offsetLeft - el.clientWidth / 2 + active.clientWidth / 2,
      behavior: document.visibilityState === 'visible' ? 'smooth' : 'auto',
    });
  }, [value, units]);

  return (
    <div className="unit-tabs" ref={ref} role="tablist" aria-label="Chọn unit">
      {units.map((u) => (
        <button
          key={u.unit}
          role="tab"
          aria-selected={u.unit === value}
          className={'unit-tab' + (u.unit === value ? ' is-active' : '')}
          onClick={() => onChange(u.unit)}
        >
          {u.unit}
        </button>
      ))}
    </div>
  );
}
