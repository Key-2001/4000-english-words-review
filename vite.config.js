import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Dùng CSS thuần — tắt việc Vite dò ngược lên thư mục cha tìm postcss.config.js
  // (thư mục cha là dự án Auto Voice có cấu hình Tailwind, không liên quan app này).
  css: { postcss: {} },
});
