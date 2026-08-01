import { defineConfig } from 'vite';

// On GitHub Pages the site is served from https://<user>.github.io/<repo>/,
// so assets need that prefix. Locally (and on a custom domain) the base is '/'.
// The deploy workflow sets VITE_BASE; everything else defaults to root.
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  root: '.',
  base,
  server: {
    port: 5173,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
});
