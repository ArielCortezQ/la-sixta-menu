const venom = require('venom-bot');

// Crear el bot con nombre de sesión definido
venom
  .create({
    session: 'la-sixta',
    multidevice: true,
    headless: 'new', // Nueva versión de modo sin interfaz
    useChrome: false, // ⛔ IMPORTANTE: no usar tu Google Chrome
  })
  .then((client) => start(client))
  .catch((error) => console.error('Error creando la sesión:', error));


// Lógica del bot
function start(client) {
  client.onMessage(async (message) => {
    const text = (message.body || '').toLowerCase(); // ← Corregido

    if (text === '1') {
      await client.sendText(
        message.from,
        '📋 *Nuestro Menú:*\n\n🎂 Tortas personalizadas\n🍰 Porciones\n🧁 Cupcakes\n🍪 Galletitas decoradas\n\nPedí la opción 2 para armar tu torta 🎨'
      );
    } else if (text === '2') {
      await client.sendText(
        message.from,
        '🥳 ¡Vamos a armar tu torta! Responde a estas preguntas paso a paso.\n(Por ahora esta función está en desarrollo 🛠️)'
      );
    } else if (text === '3') {
      const googleMapsLink = 'https://www.google.com/maps/place/33%C2%B018\'53.0%22S+66%C2%B020\'31.4%22W/@-33.314722,-66.342056,17z';
      await client.sendText(
        message.from,
        `📍 Nuestra ubicación:\nLa Sixta Pastelería 🍰\n\n🕒 Horario: Lunes a Sábado de 10 a 18 hs\n\n🗺️ Cómo llegar:\n${googleMapsLink}`
      );
    } else {
      await client.sendText(
        message.from,
        '🧁 ¡Hola! Bienvenido a *La Sixta*.\n\nElige una opción para comenzar:\n\n1️⃣ Ver menú\n2️⃣ Armar tu torta\n3️⃣ Horarios y ubicación'
      );
    }
  });
}

