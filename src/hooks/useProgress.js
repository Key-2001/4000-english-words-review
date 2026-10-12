import { useCallback, useEffect, useState } from 'react';

const KEY = 'fw4000-progress-v1';
const EMPTY = { learned: {}, quizzes: [], grammar: {} };

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return EMPTY;
    const parsed = JSON.parse(raw);
    return {
      learned: parsed.learned || {},
      quizzes: parsed.quizzes || [],
      grammar: parsed.grammar || {}, // tương thích dữ liệu cũ chưa có phần ngữ pháp
    };
  } catch {
    return EMPTY;
  }
}

function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* localStorage không khả dụng — bỏ qua */
  }
}

// Hook quản lý tiến độ học: từ đã thuộc, kết quả ngữ pháp và lịch sử làm bài, lưu trong localStorage.
export function useProgress() {
  const [state, setState] = useState(load);

  useEffect(() => {
    save(state);
  }, [state]);

  const toggleLearned = useCallback((id) => {
    setState((s) => {
      const learned = { ...s.learned };
      if (learned[id]) delete learned[id];
      else learned[id] = Date.now();
      return { ...s, learned };
    });
  }, []);

  const isLearned = useCallback((id) => !!state.learned[id], [state.learned]);

  const addQuizResult = useCallback((result) => {
    setState((s) => ({
      ...s,
      quizzes: [{ ...result, at: Date.now() }, ...s.quizzes].slice(0, 50),
    }));
  }, []);

  // Lưu kết quả bài tập của một chủ điểm ngữ pháp, giữ lại điểm cao nhất.
  const saveGrammarResult = useCallback((unitId, score, total) => {
    setState((s) => {
      const prev = s.grammar[unitId];
      const better = !prev || score / total > prev.best / prev.total;
      return {
        ...s,
        grammar: {
          ...s.grammar,
          [unitId]: {
            best: better ? score : prev.best,
            total: better ? total : prev.total,
            attempts: (prev?.attempts || 0) + 1,
            at: Date.now(),
          },
        },
      };
    });
  }, []);

  const getGrammarResult = useCallback((unitId) => state.grammar[unitId] || null, [state.grammar]);

  const resetProgress = useCallback(() => {
    setState(EMPTY);
  }, []);

  return {
    learnedCount: Object.keys(state.learned).length,
    grammarDoneCount: Object.keys(state.grammar).length,
    quizzes: state.quizzes,
    isLearned,
    toggleLearned,
    addQuizResult,
    saveGrammarResult,
    getGrammarResult,
    resetProgress,
  };
}
