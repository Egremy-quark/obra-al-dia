# Obra al Día · sitio y cotizador

Sitio estático hecho con Astro. Inicio (`src/pages/index.astro`), cotizador (`src/pages/cotizador.astro`) y el especial de Navidad (`src/pages/encalar-navidad.astro`).

## Cambiar precios
Edita `src/data/precios.json` y vuelve a publicar. Es el único lugar donde están los precios
(tu agente de Hermes puede actualizar este archivo con la exportación de SICAR).

## Número de WhatsApp
En `src/data/sitio.json`, pon tu número en `whatsapp` con lada de país y sin espacios, por ejemplo `5219221234567`.
Vacío, el botón abre WhatsApp para que el cliente elija a quién mandar la lista.

## Estadísticas
Dos sitios, y ninguno guarda el nombre, el teléfono ni la colonia del cliente.

- **Vercel Web Analytics.** Publica el proyecto en Vercel y, en el proyecto, abre **Analytics** y pulsa **Enable** la primera vez. Las visitas salen en ese mismo panel.
- **Umami.** En [cloud.umami.is](https://cloud.umami.is), copia el ID del sitio y pégalo en `src/data/sitio.json`, en `umami_id`. Vacío, el script no se carga. En ese panel de Umami ves las visitas y los eventos `whatsapp_enviado` (obra y total estimado), `obra_calculada` (firme, losa, muro, aplanado o encalar) y `obra_agregada`.

## Probar en tu Mac
    npm install
    npm run dev      # http://localhost:4321

## Publicar en Netlify
- Rápido: `npm run build` y arrastra la carpeta `dist/` a app.netlify.com/drop.
- Automático: sube el proyecto a GitHub y en Netlify elige "Import from Git"; `netlify.toml` ya trae la configuración.
