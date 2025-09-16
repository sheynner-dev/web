// Script básico de ejemplo
document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente 🚀");
});
// js/script.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("Portafolio cargado correctamente 🚀");
});

// Número de WhatsApp (con código de país). Si no es Perú, cambia el prefijo +51 y el número.
const WA_COUNTRY_AND_NUMBER = '51' + '978110873'; // -> '51978110873'

// Convierte texto a URL-encoding y abre WhatsApp con mensaje prellenado.
function openWhatsAppWithMessage(message) {
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WA_COUNTRY_AND_NUMBER}?text=${encoded}`;
  window.open(url, '_blank', 'noopener');
}

// Maneja envío del formulario: construye mensaje y abre WhatsApp
function sendWhatsAppFromForm(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !message) {
    alert('Por favor completa tu nombre y mensaje.');
    return false;
  }

  let fullMessage = `Hola Sheynner 👋,%0A`;
  fullMessage += `Soy: ${name}.%0A`;
  if (email) fullMessage += `Correo: ${email}.%0A`;
  fullMessage += `%0AMensaje:%0A${message}`;

  // Abrir WhatsApp en nueva pestaña/ventana
  openWhatsAppWithMessage(fullMessage);
  return false;
}
