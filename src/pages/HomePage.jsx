import { Link } from 'react-router-dom';
import { totalUnits, totalWords } from '../data/vocabulary';

export default function HomePage({ progress }) {
  const { learnedCount, quizzes, resetProgress } = progress;
  const pct = Math.round((learnedCount / totalWords) * 100);
  const lastQuiz = quizzes[0];

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero__title">Ôn tập 4000 English Words</h1>
        <p className="hero__sub">
          {totalWords} từ vựng thiết yếu · {totalUnits} unit · học từ vựng và luyện bài tập ngay
          trên trình duyệt, không cần mạng.
        </p>
        <div className="hero__cta">
          <Link className="btn btn--primary" to="/vocabulary">Bắt đầu học từ vựng</Link>
          <Link className="btn" to="/practice">Làm bài tập</Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <div className="stat__num">{totalWords}</div>
          <div className="stat__label">Tổng số từ</div>
        </div>
        <div className="stat">
          <div className="stat__num">{learnedCount}</div>
          <div className="stat__label">Từ đã thuộc</div>
        </div>
        <div className="stat">
          <div className="stat__num">{pct}%</div>
          <div className="stat__label">Hoàn thành</div>
        </div>
        <div className="stat">
          <div className="stat__num">{quizzes.length}</div>
          <div className="stat__label">Bài đã làm</div>
        </div>
      </section>

      <div className="progress-bar" aria-label={`Đã thuộc ${pct}%`}>
        <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
      </div>

      <section className="feature-grid">
        <Link to="/vocabulary" className="feature">
          <div className="feature__icon">📚</div>
          <h3>Từ vựng</h3>
          <p>Duyệt theo unit, tìm kiếm, nghe phát âm và đánh dấu từ đã thuộc.</p>
        </Link>
        <Link to="/flashcards" className="feature">
          <div className="feature__icon">🔁</div>
          <h3>Flashcard</h3>
          <p>Lật thẻ để tự kiểm tra: nhìn từ đoán nghĩa hoặc ngược lại.</p>
        </Link>
        <Link to="/practice" className="feature">
          <div className="feature__icon">📝</div>
          <h3>Bài tập</h3>
          <p>Trắc nghiệm nghĩa, chọn từ theo định nghĩa, điền từ và nghe – chọn.</p>
        </Link>
      </section>

      {lastQuiz && (
        <section className="last-quiz">
          <h3>Kết quả gần nhất</h3>
          <p>
            {lastQuiz.label} — <strong>{lastQuiz.score}/{lastQuiz.total}</strong>{' '}
            ({Math.round((lastQuiz.score / lastQuiz.total) * 100)}%)
          </p>
        </section>
      )}

      {(learnedCount > 0 || quizzes.length > 0) && (
        <button className="btn btn--ghost" onClick={resetProgress}>
          Xoá toàn bộ tiến độ
        </button>
      )}
    </div>
  );
}
