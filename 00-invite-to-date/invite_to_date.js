const readline = require('readline');
const https = require('https');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Настройки Telegram
const TELEGRAM_TOKEN = '8078574376:AAE_hu2xwGwOp9PqoYMiAbm20R5DKQXP_h4';
const CHAT_ID = '-1002633862662';
const MESSAGE_YES = '🎉 Она сказала ДА! 🫶🏻';

// Проверка подключения
function checkInternet(cb) {
  https.get('https://api.telegram.org', (res) => cb(true))
       .on('error', () => cb(false));
}

// Отправка сообщения
function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${encodeURIComponent(message)}`;
  https.get(url, (res) => {
    if (res.statusCode === 200) {
      console.log('✔️ Deine Antwort wurde mit einem Lächeln verschickt! 😉');
    } else {
      console.log('⚠️ Nachricht konnte nicht gesendet werden. Vielleicht war das Schicksal?');
    }
  }).on('error', (err) => {
    console.log('❌ Fehler beim Verbinden mit Telegram:', err.message);
  });
}

// Интерфейс
rl.question('Würdest du mit Sascha auf ein romantisches Date gehen? 💚💙 (ja / nein): ', (answer) => {
  const response = (answer || '').trim().toLowerCase();
  let localMessage = '';

  if (response === 'ja') {
    localMessage = '😳 Wirklich? Ich bin gerade ein bisschen sprachlos... Lass mich schnell die Verbindung prüfen und deine süße Antwort senden 💌...';
  } else if (response === 'nein') {
    localMessage = '🤷 Ich nehme das mal als charmantes „Vielleicht“ und schreib einfach: Sie hat zugestimmt ✨';
  } else {
    localMessage = '🤔 Deine geheimnisvolle Antwort klingt verdächtig nach Ja... 😉';
  }

  console.log(localMessage);

  checkInternet((online) => {
    if (online) {
      sendTelegramMessage(MESSAGE_YES); // всегда отправляем "она согласна"
    } else {
      console.log('🚫 Huch... keine Internetverbindung. Aber sein Herz ist trotzdem online.');
    }
    rl.close();
  });
});