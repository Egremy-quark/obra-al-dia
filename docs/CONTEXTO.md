# Contexto · Obra al Día

Sitio estático (Astro) de **Obra al Día** para Cosoleacaque, Minatitlán y alrededores. Explica materiales sin tecnicismos y cotiza con precios de la zona.

Alfredo tiene, además, su propia tornillería. A la par de los videos de Obra al Día saca una serie de la tornillería: diferencias entre tornillos y cómo pedirlos. Esos videos dicen claro que son de la tornillería. El tono de esa serie es regla fija: humor y referencias de cultura general (caricaturas, frases conocidas).

## Dónde vive cada dato

- Precios: solo `src/data/precios.json`. Si un precio no está confirmado, `precio` va en `null` y la página muestra «Precio por confirmar».
- WhatsApp, zona, redes y `umami_id`: `src/data/sitio.json`. Si `umami_id` está vacío, no se carga Umami. La tornillería va en `sitio.tornilleria`: si `nombre` está vacío, la página dice «Nuestra tornillería»; si `whatsapp` está vacío, usa el WhatsApp principal.
- Tornillería (usos, cómo se pide y la serie): `src/data/tornilleria.json`. Cada dato técnico lleva `revisar: true`.
- Precios de tornillería: `src/data/precios-tornilleria.json`. Si un producto no tiene precio, la página no muestra nada. Nunca se inventa.
- Eventos de Umami (solo obra y total, nunca nombre, teléfono ni colonia): `src/lib/umami.js`.
- Serie «Encalar en Navidad»: `src/data/series/encalar-navidad.json`.
- Abrir WhatsApp (mismo número y mismos datos del cliente): `src/lib/whatsapp.js`.

## Vocabulario

bulto, firme, losa, muro, enjarre, aplanado, gravilla, cal hidratada, cemento blanco, encalar, manos, caras, resanar, flete, colonia, maestro de obra, pija, taquete, tornillo, rondana, ancla.

## Cómo marcar un dato dudoso

Proporción, rendimiento o tiempo que no esté confirmado lleva `revisar: true`. En la página se muestra como **aproximado**. No se publica como cifra cerrada.

## Páginas

- `src/pages/index.astro` — inicio
- `src/pages/cotizador.astro` — cotizador de obra
- `src/pages/encalar-navidad.astro` — especial de Navidad (intermedio de «¿Cuánto cuesta…?», después de la parte 4)
- `src/pages/tornilleria.astro` — serie y pedido de la tornillería

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

### 2026-11-12 · rediseño

- Nuevo sistema en `src/layouts/Base.astro`: crema, tinta, coral y terracota; Archivo expandido e Inter. El amarillo queda solo en calcomanías y etiquetas. Modo oscuro invierte crema y negro.
- Inicio reordenado en seis bloques: hero, lo que te damos, elige tu obra, consejos, precios en un `<details>` y pie corto. Se quitaron «Así funciona», las tarjetas de obras y la sección larga de videos.
- Cotizador con los mismos cálculos y el mismo WhatsApp. Pasos 01–04, pestañas tipo botón y «Cómo se calcula» cerrado en un `<details>`.
- `.cursor/rules/proyecto.mdc` describe el sistema nuevo.

### 2026-11-12 · paleta original

- Regresó la paleta de obra en `src/layouts/Base.astro`: fondo `#ECEEEA`, amarillo `#F2B705`, azul de plano `#2E5C88`. En oscuro, fondo `#13171A` y plano `#86AFD6`. El amarillo y su texto se quedan igual. Se quitaron crema decorativa, coral, terracota, salvia y lavanda.
- Fuentes: Big Shoulders Display en mayúsculas, Public Sans e IBM Plex Mono. Salieron Archivo e Inter.
- El encabezado vuelve a la banda amarilla con borde inferior de 5 px.
- «Elige tu obra» usa fondo `--ink` y texto `--bg`. «Construye mejor» usa fondo amarillo y texto `--on-accent`.
- Hovers de 180 ms: el botón principal se levanta 2 px con sombra sólida, el de borde pasa a `--sunk`, las obras y las pestañas encienden el borde en amarillo, y la calcomanía gira 2° más. Con `prefers-reduced-motion` solo cambia el color. El foco visible es un contorno de 3 px en `--plan`.
- El acomodo, los textos y los cálculos quedan igual. `npm run build` terminó sin errores.

### 2026-11-13 · tornillería

- Quedó en este contexto que Alfredo tiene su tornillería y una serie de videos aparte. El tono de esa serie es regla fija: humor y referencias de cultura general.
- Página `src/pages/tornilleria.astro`: hero, qué vas a fijar, cómo se pide, arma tu pedido y la serie. Misma paleta, fuentes y hovers. Etiqueta «Tornillería» en el encabezado.
- Datos técnicos en `src/data/tornilleria.json`, todos con `revisar: true`. En la página salen como aproximados.
- `src/data/sitio.json`: `tornilleria.nombre` y `tornilleria.whatsapp` vacíos. Sin nombre se lee «Nuestra tornillería»; sin número usa el WhatsApp principal.
- `src/data/precios-tornilleria.json` vacío. Si un producto no trae precio, no se muestra.
- El pedido por WhatsApp reutiliza `src/lib/whatsapp.js`.
- Menú «Tornillería» en `src/layouts/Base.astro` y entrada en «Elige tu obra» del inicio.
- Se subió a GitHub (`main`) para que Vercel lo publique.
