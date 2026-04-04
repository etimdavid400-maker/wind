import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    react(),
    sitemap({
      hostname: 'https://www.otan.org.ng',
    }),
  ],
  base: '/', // ✅ Ensure your JS/CSS are loaded correctly on production
});