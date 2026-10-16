import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    target: 'es2020',
    // three.js is large by nature; it lives in its own lazily-loaded chunk.
    chunkSizeWarningLimit: 1100,
  },
});
