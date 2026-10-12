import { useState } from 'react';
import { Link } from 'react-router-dom';
import { grammarCategories, loadCategory, totalGrammarUnits } from '../data/grammar';
import GrammarExercises from '../components/GrammarExercises';

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Luyện tổng hợp: trộn ngẫu nhiên câu hỏi từ các chủ điểm đã chọn.
export default function GrammarQuizPage({ progress }) {
  const { addQuizResult } = progress;
  const [selected, setSelected] = useState(() => new Set(grammarCategories.map((c) => c.id)));
  const [count, setCount] = useState(20);
  const [questions, setQuestions] = useState(null);
  const [round, setRound] = useState(0);
  const [loading, setLoading] = useState(false);

  const toggle = (id) =>
    setSelected((s) => {
      const n = new Set(s);
      if (n.has(id)) n.delete(id);
      else n.add(id);
      return n;
    });

  const start = async () => {
    setLoading(true);
    try {
      const cats = await Promise.all([...selected].map((id) => loadCategory(id)));
      const pool = cats.flat().flatMap((u) => u.exercises.map((ex) => ({ ...ex, unitId: u.id, unitTitle: u.title })));
      setQuestions(shuffle(pool).slice(0, count));
      setRound((r) => r + 1);
    } finally {
      setLoading(false);
    }
  };

  if (questions) {
    return (
      <div className="page">
        <div className="page__head grammar-head">
          <div>
            <h2>Luyện tập tổng hợp</h2>
            <p className="muted">{questions.length} câu ngẫu nhiên từ {selected.size} chủ đề</p>
          </div>
          <div className="row-gap">
            <button className="btn" onClick={() => setQuestions(null)}>
              ⚙️ Đổi phạm vi
            </button>
            <button className="btn" onClick={start} disabled={loading}>
              🔀 Bộ câu mới
            </button>
          </div>
        </div>
        <GrammarExercises
          key={round}
          exercises={questions}
          showUnitLinks
          onFinish={(score, total) => addQuizResult({ label: 'Ngữ pháp tổng hợp', score, total })}
        />
      </div>
    );
  }

  return (
    <div className="page">
      <nav className="breadcrumb">
        <Link to="/grammar">Ngữ pháp</Link> <span>›</span> Luyện tập tổng hợp
      </nav>
      <div className="page__head">
        <h2>Luyện tập tổng hợp</h2>
        <p className="muted">Chọn các chủ đề muốn ôn, hệ thống sẽ trộn ngẫu nhiên câu hỏi từ {totalGrammarUnits} chủ điểm.</p>
      </div>

      <div className="row-gap" style={{ marginBottom: 10 }}>
        <button className="btn btn--ghost" onClick={() => setSelected(new Set(grammarCategories.map((c) => c.id)))}>
          Chọn tất cả
        </button>
        <button className="btn btn--ghost" onClick={() => setSelected(new Set())}>
          Bỏ chọn
        </button>
      </div>

      <div className="chips">
        {grammarCategories.map((c) => (
          <button key={c.id} className={'chip' + (selected.has(c.id) ? ' is-active' : '')} onClick={() => toggle(c.id)}>
            {c.icon} {c.title}
          </button>
        ))}
      </div>

      <div className="setup">
        <label className="field">
          <span>Số câu</span>
          <select className="input" value={count} onChange={(e) => setCount(Number(e.target.value))}>
            {[10, 20, 30, 50].map((n) => (
              <option key={n} value={n}>
                {n} câu
              </option>
            ))}
          </select>
        </label>
      </div>

      <button className="btn btn--primary btn--lg" onClick={start} disabled={selected.size === 0 || loading}>
        {loading ? 'Đang chuẩn bị…' : `Bắt đầu · ${count} câu`}
      </button>
    </div>
  );
}
