const EVENTOS = ['whatsapp_enviado', 'obra_calculada', 'obra_agregada'];

/** Solo obra y total. Nombre, teléfono y colonia no salen de aquí. */
export function eventoUmami(nombre, datos) {
  const umami = window.umami;
  if (!EVENTOS.includes(nombre) || !umami || typeof umami.track !== 'function') return;
  const limpio = {};
  if (datos && datos.obra != null && String(datos.obra).trim() !== '') {
    limpio.obra = String(datos.obra).trim().slice(0, 500);
  }
  if (datos && typeof datos.total === 'number' && Number.isFinite(datos.total)) {
    limpio.total = Math.round(datos.total * 100) / 100;
  }
  umami.track(nombre, limpio);
}

/** El script de la página puede correr antes que este módulo: vacía esa cola. */
export function activarEventos() {
  const pendientes = window.obraEventosPendientes || [];
  window.obraEventosPendientes = [];
  window.obraEvento = eventoUmami;
  pendientes.forEach((e) => eventoUmami(e.nombre, e.datos));
}
