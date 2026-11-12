/** Arma el enlace wa.me. Número con lada y sin espacios; vacío, el cliente elige el chat. */
export function armarUrlWhatsApp(numero, texto) {
  return 'https://wa.me/' + (numero || '') + '?text=' + encodeURIComponent(texto);
}

/** Misma cola que el cotizador: nombre, colonia y cuándo empieza. */
export function conDatosCliente(texto, datos = {}) {
  const extra = [];
  const nombre = String(datos.nombre || '').trim();
  const colonia = String(datos.colonia || '').trim();
  const cuando = String(datos.cuando || '').trim();
  if (nombre) extra.push('Nombre: ' + nombre);
  if (colonia) extra.push('Colonia: ' + colonia);
  if (cuando) extra.push('Empiezo: ' + cuando);
  return extra.length ? texto + '\n\n' + extra.join('\n') : texto;
}

/** Abre WhatsApp con el texto. Si el navegador bloquea la ventana, sigue en la misma pestaña. */
export function enviarPedido(numero, texto, datos) {
  const url = armarUrlWhatsApp(numero, conDatosCliente(texto, datos));
  const w = window.open(url, '_blank');
  if (!w) location.href = url;
}
