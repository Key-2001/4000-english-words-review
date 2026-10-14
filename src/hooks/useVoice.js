import { useEffect, useState } from 'react';
import { bestVoice, currentVoice, getPrefs, getVoices, setPrefs, subscribe } from '../utils/speech';

// Danh sách giọng tiếng Anh trên máy + tuỳ chọn giọng/tốc độ đang dùng.
export function useVoice() {
  const read = () => ({ voices: getVoices(), prefs: getPrefs(), current: currentVoice(), best: bestVoice() });
  const [state, setState] = useState(read);
  useEffect(() => {
    setState(read());
    return subscribe(() => setState(read()));
  }, []);
  return { ...state, setPrefs };
}
