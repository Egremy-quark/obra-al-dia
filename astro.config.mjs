import { defineConfig } from 'astro/config';

// Sitio estático: Vercel publica la carpeta dist/.
export default defineConfig({
  build: { format: 'file', inlineStylesheets: 'always' },
});
