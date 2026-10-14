import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    // PWA: cài lên màn hình chính iPhone ("Thêm vào MH chính") và dùng được khi không có mạng.
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'apple-touch-icon.png'],
      manifest: {
        name: 'Keylish – Từ vựng & Ngữ pháp',
        short_name: 'Keylish',
        description: 'Ôn 3.600 từ vựng 4000 Essential English Words và ngữ pháp Essential Grammar in Use.',
        lang: 'vi',
        start_url: '/',
        scope: '/',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#f4f6fb',
        theme_color: '#4f46e5',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
        ],
      },
      workbox: {
        // Lưu sẵn toàn bộ app (kể cả dữ liệu 6 cuốn + ngữ pháp) để học offline.
        globPatterns: ['**/*.{js,css,html,svg,png}'],
        navigateFallback: '/index.html',
      },
    }),
  ],
  // Dùng CSS thuần — tắt việc Vite dò ngược lên thư mục cha tìm postcss.config.js
  // (thư mục cha là dự án Auto Voice có cấu hình Tailwind, không liên quan app này).
  css: { postcss: {} },
});
