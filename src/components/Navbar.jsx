import { NavLink } from 'react-router-dom';
import { totalWordsAll } from '../data/vocab';

const links = [
  { to: '/', label: 'Trang chủ', short: 'Trang chủ', icon: '🏠', end: true },
  { to: '/vocabulary', label: 'Từ vựng', short: 'Từ vựng', icon: '📚' },
  { to: '/flashcards', label: 'Flashcard', short: 'Thẻ', icon: '🔁' },
  { to: '/practice', label: 'Bài tập', short: 'Bài tập', icon: '📝' },
  { to: '/grammar', label: 'Ngữ pháp', short: 'Ngữ pháp', icon: '📐' },
];

const linkClass = (base) => ({ isActive }) => base + (isActive ? ' is-active' : '');

// Desktop: menu ở thanh trên. Mobile: thanh tab cố định dưới đáy màn hình.
export default function Navbar({ learnedCount }) {
  return (
    <>
      <header className="navbar">
        <div className="navbar__inner">
          <NavLink to="/" className="brand">
            <span className="brand__badge">EN</span>
            <span className="brand__text">Từ vựng & Ngữ pháp</span>
          </NavLink>
          <nav className="nav" aria-label="Điều hướng chính">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className={linkClass('nav__link')}>
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="nav__progress" title="Số từ đã đánh dấu thuộc">
            ✅ {learnedCount}/{totalWordsAll}
          </div>
        </div>
      </header>

      <nav className="tabbar" aria-label="Điều hướng chính (mobile)">
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} className={linkClass('tabbar__item')}>
            <span className="tabbar__icon" aria-hidden="true">
              {l.icon}
            </span>
            <span className="tabbar__label">{l.short}</span>
          </NavLink>
        ))}
      </nav>
    </>
  );
}
