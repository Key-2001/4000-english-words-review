import { useCallback, useEffect, useState } from 'react';

const KEY = 'fw4000-progress-v1';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { learned: {}, quizzes: [] };
    const parsed = JSON.parse(raw);
    return { learned: parsed.learned || {}, quizzes: parsed.quizzes || [] };
  } catch {
    return { learned: {}, quizzes: [] };
  }
}

function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    /* localStorage không khả dụng — bỏ qua */
  }
}

// Hook quản lý tiến độ học: từ đã thuộc + lịch sử làm bài, lưu trong localStorage.
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

  const resetProgress = useCallback(() => {
    setState({ learned: {}, quizzes: [] });
  }, []);

  return {
    learnedCount: Object.keys(state.learned).length,
    quizzes: state.quizzes,
    isLearned,
    toggleLearned,
    addQuizResult,
    resetProgress,
  };
}
