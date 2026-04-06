// vite.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    sitemap({
      hostname: 'https://www.otan.org.ng',
    }),
  ],
  base: '/', // Ensure JS/CSS load correctly on production
  build: {
    // Increase chunk warning limit to 2MB
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        // Split vendor libraries into separate chunk
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react')) return 'react';
            if (id.includes('firebase')) return 'firebase';
            return 'vendor';
          }
        },
      },
    },
  },
});