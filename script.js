// Храним сообщения для каждого языка
const messages = {
  ru: "Bună ziua! În privința la job.",  // Сообщение на русском
  en: "Bună ziua! În privința la job.",  // Сообщение на английском
  ro: "Bună ziua! În privința la job."  // Сообщение на румынском
};

// Текущий выбранный язык (по умолчанию румынский)
let currentLanguage = 'ro';

// Функция для редиректа в WhatsApp
function redirectToWhatsApp() {
  const phoneNumber = "37376982589"; // Укажите номер телефона
  const message = messages[currentLanguage]; // Выбираем сообщение в зависимости от языка
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  // Перехожу на ссылку без дополнительных действий
  window.location.href = url;
}

// Обновляем текст кнопки
document.getElementById('whatsapp-button').innerHTML = 'Scrie în WhatsApp';
