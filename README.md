# Ôn tập tiếng Anh – Từ vựng & Ngữ pháp

Ứng dụng web ôn tập **3.600 từ vựng** (*4000 Essential English Words*, Book 1–6, Paul Nation) và **115 chủ điểm ngữ pháp** cơ bản (theo giáo trình *Essential Grammar in Use*, Raymond Murphy). Xây bằng **React + Vite**, dữ liệu **tĩnh** (không cần backend).

## Tính năng

### Từ vựng
- **📚 Từ vựng** — 6 cuốn × 30 unit × 20 từ; chọn cuốn và unit, tìm kiếm trên toàn bộ 3.600 từ, nghe phát âm (Web Speech API), đánh dấu từ đã thuộc.
- **🔁 Flashcard** — lật thẻ tự kiểm tra (từ → nghĩa hoặc nghĩa → từ), xáo trộn, điều hướng bằng phím mũi tên.
- **📝 Bài tập** — 4 dạng: chọn nghĩa đúng, chọn từ đúng, điền từ, nghe & chọn; phạm vi theo unit hoặc cả cuốn. Từ cần đoán được che trong đề bài để không lộ đáp án.

### Ngữ pháp
- **📐 115 chủ điểm** chia 21 chương (thì, bị động, động từ khuyết thiếu, câu hỏi, mạo từ, giới từ, cụm động từ…).
- Mỗi chủ điểm: giải thích tiếng Việt, bảng cấu trúc, ví dụ có phát âm, lỗi thường gặp và **8 bài tập chấm tự động** (trắc nghiệm + điền từ) — tổng cộng 920 câu.
- **🎯 Luyện tập tổng hợp** — trộn ngẫu nhiên câu hỏi từ các chương đã chọn.
- Tìm kiếm không cần gõ dấu ("hien tai" → "hiện tại").

### Tiến độ
Lưu trong `localStorage`: từ đã thuộc, điểm cao nhất từng chủ điểm ngữ pháp, lịch sử làm bài.

## Chạy dự án

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
npm run preview
```

## Cấu trúc

```
src/
├─ data/
│  ├─ vocab/
│  │  ├─ index.js          # danh sách cuốn, loader tải từng cuốn, maskWord
│  │  └─ book1.js … book6.js # 6 cuốn, mỗi cuốn tách 3 file × 10 unit
│  └─ grammar/
│     ├─ index.js          # mục lục 115 chủ điểm + loader tải theo chương
│     └─ present.js …      # 21 file nội dung, mỗi file = 1 chương (code-splitting)
├─ components/             # Navbar, VocabCard, RichText, GrammarExercises
├─ pages/                  # Home, Vocabulary, Flashcard, Practice, Grammar, GrammarUnit, GrammarQuiz
├─ hooks/useProgress.js    # tiến độ học (localStorage)
└─ utils/speech.js         # phát âm Web Speech API
```

### Định dạng một chủ điểm ngữ pháp

```js
{
  id: 1,
  intro: 'Giới thiệu, hỗ trợ **in đậm**',
  sections: [{ title, text?, table?: { head, rows }, examples?: [] }],
  tips: ['Lỗi thường gặp…'],
  exercises: [
    { type: 'choice', q: 'My parents ___ teachers.', options: ['is', 'am', 'are'], answer: 'are', explain: '…' },
    { type: 'gap', q: 'Sorry, I ___ late.', hint: 'be', answers: ['am'], explain: '…' },
  ],
}
```

Bài điền từ chấp nhận mọi đáp án trong `answers`, không phân biệt hoa/thường và dấu nháy (`don't` = `dont`).

## Ghi chú về dữ liệu

- **Từ vựng Book 1–6**: danh sách từ và cách chia unit lấy từ sách (đã đối chiếu với trang định nghĩa); phần định nghĩa và câu ví dụ được **biên soạn riêng**, không chép từ sách. Định dạng gọn: `[word, pos, definition, example]`.
- **Ngữ pháp** chỉ dùng **danh sách chủ điểm** của sách làm khung; toàn bộ phần giải thích, ví dụ và bài tập được **biên soạn riêng**, không sao chép nội dung sách.
