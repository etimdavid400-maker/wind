// vite.config.js
// import { defineConfig } from 'vite';
// import tailwindcss from '@tailwindcss/vite'
// import react from '@vitejs/plugin-react';
// import sitemap from 'vite-plugin-sitemap';

// export default defineConfig({
//   plugins: [
//     tailwindcss(),
//     react(),
//     sitemap({
//       hostname: 'https://www.otan.org.ng',
//     }),
//   ],
//   base: '/', // Ensure JS/CSS load correctly on production
//   build: {
//     // Increase chunk warning limit to 2MB
//     chunkSizeWarningLimit: 2000,
//   },
// });

import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    sitemap({
      hostname: 'https://www.otan.org.ng',

      // 🔥 CRITICAL FIX (prevents your Vercel crash)
      generateRobotsTxt: false,

      // extra safety: prevents dist filesystem assumptions
      outDir: 'dist',
    }),
  ],

  base: '/',

  build: {
    chunkSizeWarningLimit: 2000,
  },
});