import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import VocabularyPage from './pages/VocabularyPage';
import FlashcardPage from './pages/FlashcardPage';
import PracticePage from './pages/PracticePage';
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
        </Routes>
      </main>
      <footer className="footer">
        Dữ liệu từ vựng: <strong>4000 Essential English Words – Book 1</strong> (Paul Nation).
        Ứng dụng ôn tập cá nhân · dữ liệu tĩnh, hoạt động offline.
      </footer>
    </div>
  );
}
