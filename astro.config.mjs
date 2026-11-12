import { defineConfig } from 'astro/config';

// Sitio estático: se sube tal cual a Netlify (carpeta dist/).
export default defineConfig({
  build: { format: 'file', inlineStylesheets: 'always' },
});
