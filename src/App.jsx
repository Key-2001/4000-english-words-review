import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VocabularyPage from './pages/VocabularyPage';
import FlashcardPage from './pages/FlashcardPage';
import PracticePage from './pages/PracticePage';
import GrammarPage from './pages/GrammarPage';
import GrammarUnitPage from './pages/GrammarUnitPage';
import GrammarQuizPage from './pages/GrammarQuizPage';
import { useProgress } from './hooks/useProgress';

export default function App() {
  const progress = useProgress();
  return (
    <div className="app">
      <Navbar learnedCount={progress.learnedCount} />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage progress={progress} />} />
          <Route path="/vocabulary" element={<VocabularyPage progress={progress} />} />
          <Route path="/flashcards" element={<FlashcardPage progress={progress} />} />
          <Route path="/practice" element={<PracticePage progress={progress} />} />
          <Route path="/grammar" element={<GrammarPage progress={progress} />} />
          <Route path="/grammar/quiz" element={<GrammarQuizPage progress={progress} />} />
          <Route path="/grammar/:unitId" element={<GrammarUnitPage progress={progress} />} />
        </Routes>
      </main>
      <footer className="footer">
        Từ vựng: danh sách từ theo bộ <strong>4000 Essential English Words, Book 1–6</strong> (Paul Nation; định nghĩa và ví dụ được biên soạn riêng). Chủ điểm ngữ pháp theo
        giáo trình <strong>Essential Grammar in Use</strong> (Raymond Murphy) — phần giải thích và bài tập được
        biên soạn riêng. Ứng dụng ôn tập cá nhân · dữ liệu tĩnh.
      </footer>
    </div>
  );
}
