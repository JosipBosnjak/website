import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

export default defineConfig({
  plugins: [react(), ghPages()], // Ensure ghPages is being called as a function
  base: '/website/', // Make sure this matches your GitHub Pages repo name
});
