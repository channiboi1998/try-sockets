import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build',
    sourcemap: true
  },
  test: {
    globals: true,
    environment: 'jsdom',
    allowOnly: true,
    passWithNoTests: true,
    reporters: 'verbose',
    coverage: {
      reporter: ['text', 'json', 'html']
    }
  }
});
