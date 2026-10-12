import { Link } from 'react-router-dom';
import { books, totalWordsAll as totalWords } from '../data/vocab';
import { totalGrammarUnits } from '../data/grammar';

export default function HomePage({ progress }) {
  const { learnedCount, grammarDoneCount, quizzes, resetProgress } = progress;
  const pct = Math.round((learnedCount / totalWords) * 100);
  const grammarPct = Math.round((grammarDoneCount / totalGrammarUnits) * 100);
  const lastQuiz = quizzes[0];

  return (
    <div className="home">
      <section className="hero">
        <h1 className="hero__title">Ôn tập tiếng Anh</h1>
        <p className="hero__sub">
          {totalWords} từ vựng thiết yếu ({books.length} cuốn · {books.length * 30} unit) và {totalGrammarUnits} chủ điểm ngữ pháp cơ bản — học
          lý thuyết, luyện bài tập ngay trên trình duyệt.
        </p>
        <div className="hero__cta">
          <Link className="btn btn--primary" to="/vocabulary">Học từ vựng</Link>
          <Link className="btn btn--primary" to="/grammar">Học ngữ pháp</Link>
          <Link className="btn" to="/practice">Làm bài tập</Link>
        </div>
      </section>

      <section className="stats">
        <div className="stat">
          <div className="stat__num">{learnedCount}</div>
          <div className="stat__label">Từ đã thuộc / {totalWords}</div>
        </div>
        <div className="stat">
          <div className="stat__num">{pct}%</div>
          <div className="stat__label">Từ vựng hoàn thành</div>
        </div>
        <div className="stat">
          <div className="stat__num">{grammarDoneCount}</div>
          <div className="stat__label">Chủ điểm ngữ pháp đã làm / {totalGrammarUnits}</div>
        </div>
        <div className="stat">
          <div className="stat__num">{quizzes.length}</div>
          <div className="stat__label">Bài đã làm</div>
        </div>
      </section>

      <div className="progress-pair">
        <div>
          <span className="muted">Từ vựng · {pct}%</span>
          <div className="progress-bar progress-bar--sm" aria-label={`Từ vựng ${pct}%`}>
            <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
          </div>
        </div>
        <div>
          <span className="muted">Ngữ pháp · {grammarPct}%</span>
          <div className="progress-bar progress-bar--sm" aria-label={`Ngữ pháp ${grammarPct}%`}>
            <div className="progress-bar__fill" style={{ width: `${grammarPct}%` }} />
          </div>
        </div>
      </div>

      <section className="feature-grid">
        <Link to="/vocabulary" className="feature">
          <div className="feature__icon">📚</div>
          <h3>Từ vựng</h3>
          <p>6 cuốn 4000 Essential English Words: duyệt theo unit, tìm kiếm, nghe phát âm, đánh dấu từ đã thuộc.</p>
        </Link>
        <Link to="/flashcards" className="feature">
          <div className="feature__icon">🔁</div>
          <h3>Flashcard</h3>
          <p>Lật thẻ để tự kiểm tra: nhìn từ đoán nghĩa hoặc ngược lại.</p>
        </Link>
        <Link to="/practice" className="feature">
          <div className="feature__icon">📝</div>
          <h3>Bài tập từ vựng</h3>
          <p>Trắc nghiệm nghĩa, chọn từ theo định nghĩa, điền từ và nghe – chọn.</p>
        </Link>
        <Link to="/grammar" className="feature">
          <div className="feature__icon">📐</div>
          <h3>Ngữ pháp</h3>
          <p>{totalGrammarUnits} chủ điểm: giải thích tiếng Việt, bảng cấu trúc, ví dụ, lỗi thường gặp và bài tập chấm tự động.</p>
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

      {(learnedCount > 0 || quizzes.length > 0 || grammarDoneCount > 0) && (
        <button className="btn btn--ghost" onClick={resetProgress}>
          Xoá toàn bộ tiến độ
        </button>
      )}
    </div>
  );
}
