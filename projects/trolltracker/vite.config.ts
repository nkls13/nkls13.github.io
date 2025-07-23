import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/projects/trolltracker/', // ✅ this line is essential
  plugins: [react()],
})