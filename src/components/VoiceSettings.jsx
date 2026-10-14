import { useEffect } from 'react';
import { useVoice } from '../hooks/useVoice';
import { isHighQuality, normLang, speak, speechSupported } from '../utils/speech';

const ACCENTS = [
  ['en-US', 'Anh – Mỹ'],
  ['en-GB', 'Anh – Anh'],
  ['en-AU', 'Anh – Úc'],
  ['en-CA', 'Anh – Canada'],
  ['en-IE', 'Anh – Ireland'],
  ['en-IN', 'Anh – Ấn Độ'],
  ['en-ZA', 'Anh – Nam Phi'],
];
const accentName = (lang) => ACCENTS.find(([code]) => code === normLang(lang))?.[1] || normLang(lang);

const SAMPLE = 'Hello! Let’s practice: beautiful, comfortable, vegetable, through.';
const isIOS = typeof navigator !== 'undefined' && /iPhone|iPad|iPod/.test(navigator.userAgent);

const voiceLabel = (v) => `${v.name}${isHighQuality(v) ? ' ★' : ''}`;

// Bảng chọn giọng đọc + tốc độ, mở từ nút 🔊 trên thanh điều hướng.
export default function VoiceSettings({ onClose }) {
  const { voices, prefs, current, best, setPrefs } = useVoice();

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  // Nhóm giọng theo giọng vùng (Mỹ, Anh, Úc…), giữ thứ tự chất lượng trong mỗi nhóm.
  const groups = [];
  for (const v of voices) {
    const name = accentName(v.lang);
    let g = groups.find((x) => x.name === name);
    if (!g) groups.push((g = { name, list: [] }));
    g.list.push(v);
  }

  const chosen = prefs.voiceURI && voices.some((v) => v.voiceURI === prefs.voiceURI) ? prefs.voiceURI : '';

  return (
    <div className="sheet-backdrop" onClick={onClose}>
      <div className="sheet" role="dialog" aria-modal="true" aria-labelledby="voice-title" onClick={(e) => e.stopPropagation()}>
        <div className="sheet__head">
          <h3 id="voice-title">🔊 Giọng đọc</h3>
          <button className="btn btn--ghost" onClick={onClose}>
            Xong
          </button>
        </div>

        {!speechSupported ? (
          <p className="muted">Trình duyệt này không hỗ trợ đọc phát âm.</p>
        ) : voices.length === 0 ? (
          <p className="muted">Không tìm thấy giọng tiếng Anh nào trên máy. App sẽ dùng giọng mặc định của trình duyệt.</p>
        ) : (
          <>
            <label className="field">
              <span>Giọng ({voices.length} giọng tiếng Anh trên máy này)</span>
              <select
                className="input"
                value={chosen}
                onChange={(e) => {
                  const uri = e.target.value || null;
                  setPrefs({ voiceURI: uri });
                  speak(SAMPLE, { voice: voices.find((v) => v.voiceURI === uri) || best });
                }}
              >
                <option value="">Tự động — {best ? `${voiceLabel(best)} (${accentName(best.lang)})` : 'mặc định'}</option>
                {groups.map((g) => (
                  <optgroup key={g.name} label={g.name}>
                    {g.list.map((v) => (
                      <option key={v.voiceURI} value={v.voiceURI}>
                        {voiceLabel(v)}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
            </label>

            <p className="voice-current">
              Đang dùng: <strong>{current?.name}</strong> · {current && accentName(current.lang)}
              {current && isHighQuality(current) && <span className="voice-badge">chất lượng cao</span>}
            </p>
          </>
        )}

        {speechSupported && (
          <>
            <label className="field">
              <span>Tốc độ đọc: {prefs.rate.toFixed(2)}×</span>
              <input
                className="range"
                type="range"
                min="0.5"
                max="1.2"
                step="0.05"
                value={prefs.rate}
                onChange={(e) => setPrefs({ rate: Number(e.target.value) })}
              />
              <span className="range__labels">
                <span>Chậm</span>
                <span>Bình thường</span>
                <span>Nhanh</span>
              </span>
            </label>

            <button className="btn btn--primary" onClick={() => speak(SAMPLE)}>
              ▶ Nghe thử
            </button>
          </>
        )}

        <div className="voice-tip">
          <strong>Mẹo:</strong> giọng có dấu ★ là bản chất lượng cao, đọc tự nhiên hơn.{' '}
          {isIOS ? (
            <>
              Trên iPhone, tải thêm trong <em>Cài đặt → Trợ năng → Nội dung được đọc → Giọng nói → Tiếng Anh</em>, chọn
              giọng (ví dụ Ava, Zoe, Evan) bản <em>Nâng cao</em> hoặc <em>Cao cấp</em>, rồi mở lại app.
            </>
          ) : (
            <>Bạn có thể cài thêm giọng tiếng Anh trong phần cài đặt Đọc văn bản / Text-to-Speech của máy, rồi mở lại app.</>
          )}
        </div>
      </div>
    </div>
  );
}
