import { books } from '../data/vocab';

export default function BookPicker({ value, onChange }) {
  return (
    <div className="book-picker" role="tablist" aria-label="Chọn cuốn sách">
      {books.map((b) => (
        <button
          key={b.id}
          role="tab"
          aria-selected={b.id === value}
          className={'book-tab' + (b.id === value ? ' is-active' : '')}
          onClick={() => onChange(b.id)}
        >
          {b.title}
        </button>
      ))}
    </div>
  );
}
