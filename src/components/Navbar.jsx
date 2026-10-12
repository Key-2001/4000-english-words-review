import { NavLink } from 'react-router-dom';
import { totalWords } from '../data/vocabulary';

const links = [
  { to: '/', label: 'Trang chủ', end: true },
  { to: '/vocabulary', label: 'Từ vựng' },
  { to: '/flashcards', label: 'Flashcard' },
  { to: '/practice', label: 'Bài tập' },
  { to: '/grammar', label: 'Ngữ pháp' },
];

export default function Navbar({ learnedCount }) {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="brand">
          <span className="brand__badge">EN</span>
          <span className="brand__text">Từ vựng & Ngữ pháp</span>
        </NavLink>
        <nav className="nav">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) => 'nav__link' + (isActive ? ' is-active' : '')}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="nav__progress" title="Số từ đã đánh dấu thuộc">
          ✅ {learnedCount}/{totalWords}
        </div>
      </div>
    </header>
  );
}
