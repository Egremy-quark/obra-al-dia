# Contexto · Obra al Día

Sitio estático (Astro) de **Obra al Día** para Cosoleacaque, Minatitlán y alrededores. Explica materiales sin tecnicismos y cotiza con precios de la zona.

## Dónde vive cada dato

- Precios: solo `src/data/precios.json`. Si un precio no está confirmado, `precio` va en `null` y la página muestra «Precio por confirmar».
- WhatsApp, zona, redes y `umami_id`: `src/data/sitio.json`. Si `umami_id` está vacío, no se carga Umami.
- Eventos de Umami (solo obra y total, nunca nombre, teléfono ni colonia): `src/lib/umami.js`.
- Serie «Encalar en Navidad»: `src/data/series/encalar-navidad.json`.
- Abrir WhatsApp (mismo número y mismos datos del cliente): `src/lib/whatsapp.js`.

## Vocabulario

bulto, firme, losa, muro, enjarre, aplanado, gravilla, cal hidratada, cemento blanco, encalar, manos, caras, resanar, flete, colonia, maestro de obra.

## Cómo marcar un dato dudoso

Proporción, rendimiento o tiempo que no esté confirmado lleva `revisar: true`. En la página se muestra como **aproximado**. No se publica como cifra cerrada.

## Páginas

- `src/pages/index.astro` — inicio
- `src/pages/cotizador.astro` — cotizador de obra
- `src/pages/encalar-navidad.astro` — especial de Navidad (intermedio de «¿Cuánto cuesta…?», después de la parte 4)

## Bitácora

### 2026-11-12

- No estaban `docs/CONTEXTO.md` ni `.cursor/rules/proyecto.mdc`. Se crearon. La regla queda en siempre activa y su primera instrucción es leer este archivo y anotar aquí al terminar.
- Página `src/pages/encalar-navidad.astro`: especial «Encalar en Navidad» (cal con cemento blanco), con la serie por partes, calculadora de bultos y cierre a WhatsApp, TikTok e Instagram.
- Textos de la serie y constantes de la calculadora en `src/data/series/encalar-navidad.json`. Las 4 partes están en `proximamente` y con `revisar: true`. Rendimiento, proporción y kilos por bulto también llevan `revisar: true` y en la página salen como aproximados.
- Cal hidratada y cemento blanco agregados a `src/data/precios.json` con `precio: null` (en la página: «Precio por confirmar»).
- La apertura de WhatsApp pasó a `src/lib/whatsapp.js`. La usan el cotizador y la página de Navidad; el número sigue saliendo de `src/data/sitio.json`.
- Menú «Navidad» en `src/layouts/Base.astro` y tarjeta destacada en «¿Qué vas a construir?» del inicio.
- `npm run build` terminó sin errores.

### 2026-11-12 · analítica

- Vercel Web Analytics: paquete `@vercel/analytics` y componente `<Analytics />` en el `<head>` de `src/layouts/Base.astro`, como indica la documentación de Vercel para Astro.
- Umami: `umami_id` en `src/data/sitio.json` (vacío por ahora). El script de Umami Cloud solo entra al HTML si ese ID tiene valor.
- Eventos, sin nombre, teléfono ni colonia: `whatsapp_enviado` (obra o obras y total estimado), `obra_calculada` (firme, losa, muro, aplanado, encalar) y `obra_agregada`.
- README: sección de dónde ver las estadísticas.
- `npm run build` terminó sin errores.

### 2026-11-12 · GitHub

- El proyecto no tenía git. Se inició el repositorio y se subió a https://github.com/Egremy-quark/obra-al-dia
- `.gitignore` para no subir `node_modules`, `dist` ni la caché de Astro.

### 2026-11-12 · Vercel

- La guía de publicación del README quedó en Vercel: importar `Egremy-quark/obra-al-dia`, build `npm run build`, salida `dist`.
- El comentario de `astro.config.mjs` apunta a Vercel.
