// Phát âm từ tiếng Anh bằng Web Speech API (không cần thư viện ngoài).
export function speak(text) {
  if (typeof window === 'undefined' || !window.speechSynthesis) return;
  try {
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'en-US';
    u.rate = 0.95;
    window.speechSynthesis.speak(u);
  } catch {
    /* trình duyệt không hỗ trợ — bỏ qua */
  }
}

export const speechSupported =
  typeof window !== 'undefined' && !!window.speechSynthesis;
