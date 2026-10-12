# Ôn tập 4000 English Words – Book 1

Ứng dụng web ôn tập **600 từ vựng** trong sách *4000 Essential English Words – Book 1* (Paul Nation), xây bằng **React + Vite**, dữ liệu **tĩnh** (offline, không cần backend).

## Tính năng

- **📚 Từ vựng** — duyệt theo 30 unit, tìm kiếm trên toàn bộ 600 từ, nghe phát âm (Web Speech API), đánh dấu từ đã thuộc.
- **🔁 Flashcard** — lật thẻ tự kiểm tra (từ → nghĩa hoặc nghĩa → từ), xáo trộn, điều hướng bằng phím mũi tên.
- **📝 Bài tập** — 4 dạng: chọn nghĩa đúng, chọn từ đúng, điền từ, nghe & chọn. Chấm điểm và xem lại đáp án.
- **Tiến độ** lưu trong `localStorage` (từ đã thuộc + lịch sử làm bài).

## Chạy dự án

```bash
cd vocab-review
npm install
npm run dev
```

Mở địa chỉ Vite in ra (mặc định http://localhost:5173).

Build production:

```bash
npm run build
npm run preview
```

## Cấu trúc

```
vocab-review/
└─ src/
   ├─ data/vocabulary.js     # 600 từ (30 unit) — dữ liệu tĩnh trích từ PDF
   ├─ components/            # Navbar, VocabCard
   ├─ pages/                 # HomePage, VocabularyPage, FlashcardPage, PracticePage
   ├─ hooks/useProgress.js   # tiến độ học (localStorage)
   └─ utils/speech.js        # phát âm Web Speech API
```

## Ghi chú về dữ liệu

Dữ liệu từ vựng được trích tự động từ file PDF gốc bằng OCR, dùng cho mục đích **ôn tập cá nhân**. Do chất lượng OCR, một số ít định nghĩa/ví dụ có thể còn sai sót nhỏ — có thể chỉnh trực tiếp trong `src/data/vocabulary.js`.
