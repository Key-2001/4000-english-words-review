// Phát âm tiếng Anh bằng Web Speech API (giọng đọc có sẵn trên máy, chạy được offline).
// Mỗi máy có bộ giọng khác nhau, nên app tự chọn giọng tiếng Anh tốt nhất trên máy
// và cho người dùng tự chọn giọng + tốc độ (lưu riêng trên từng máy).

const synth = typeof window !== 'undefined' ? window.speechSynthesis : undefined;
const KEY = 'fw4000-voice';
const DEFAULTS = { voiceURI: null, rate: 0.9 }; // voiceURI null = tự động

export const speechSupported = !!synth;

// Giọng "vui" / robot của Apple — không hợp để học phát âm.
const NOVELTY =
  /\b(albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|fred|junior|kathy|ralph|grandma|grandpa|rocko|sandy|shelley|flo|eddy|reed)\b/i;

export const normLang = (lang = '') => lang.replace('_', '-');

export function isHighQuality(v) {
  return /premium|enhanced|neural|natural/i.test(`${v.name} ${v.voiceURI}`);
}

function quality(v) {
  const id = `${v.name} ${v.voiceURI}`.toLowerCase();
  let s = 0;
  if (/premium/.test(id)) s += 60;
  else if (/enhanced|neural|natural/.test(id)) s += 50;
  else if (/google/.test(id)) s += 35;
  if (/samantha|ava|zoe|allison|susan|evan|nathan|tom|serena|daniel|kate|karen|moira|tessa|aaron|nicky/.test(id)) s += 10;
  if (/compact/.test(id)) s -= 5;
  if (v.localService) s += 3;
  const lang = normLang(v.lang);
  if (lang === 'en-US') s += 20;
  else if (lang === 'en-GB') s += 12;
  return s;
}

let voices = [];
const listeners = new Set();
const emit = () => listeners.forEach((fn) => fn());

function refresh() {
  if (!synth) return;
  const english = synth.getVoices().filter((v) => /^en([-_]|$)/i.test(v.lang));
  const usable = english.filter((v) => !NOVELTY.test(v.name));
  const next = (usable.length ? usable : english).sort((a, b) => quality(b) - quality(a) || a.name.localeCompare(b.name));
  if (next.length !== voices.length || next.some((v, i) => v !== voices[i])) {
    voices = next;
    emit();
  }
}

if (synth) {
  refresh();
  synth.onvoiceschanged = refresh;
  // iOS đôi khi không bắn sự kiện voiceschanged — thử lại vài lần.
  [250, 1000, 3000].forEach((t) => setTimeout(refresh, t));
}

export function getVoices() {
  if (!voices.length) refresh();
  return voices;
}

export function getPrefs() {
  try {
    return { ...DEFAULTS, ...JSON.parse(localStorage.getItem(KEY) || '{}') };
  } catch {
    return { ...DEFAULTS };
  }
}

export function setPrefs(patch) {
  const next = { ...getPrefs(), ...patch };
  try {
    localStorage.setItem(KEY, JSON.stringify(next));
  } catch {
    /* bỏ qua */
  }
  emit();
}

export const bestVoice = () => getVoices()[0] || null;

export function currentVoice() {
  const { voiceURI } = getPrefs();
  return (voiceURI && getVoices().find((v) => v.voiceURI === voiceURI)) || bestVoice();
}

export function subscribe(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function speak(text, overrides = {}) {
  if (!synth) return;
  try {
    synth.cancel();
    const u = new SpeechSynthesisUtterance(text);
    const v = overrides.voice !== undefined ? overrides.voice : currentVoice();
    if (v) u.voice = v;
    u.lang = v ? normLang(v.lang) : 'en-US';
    u.rate = overrides.rate ?? getPrefs().rate;
    synth.speak(u);
  } catch {
    /* trình duyệt không hỗ trợ — bỏ qua */
  }
}
