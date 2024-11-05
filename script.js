// Функция для редиректа в WhatsApp
function redirectToWhatsApp() {
  const phoneNumber = "37379953483"; // Молдова, без "+"
  const message = "Привет! Я хочу связаться с вами."; // Сообщение, которое будет отправлено

  // Создаем URL для WhatsApp, корректно кодируя сообщение
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Переход по ссылке
  window.location.href = url; // Это должно работать, если номер телефона и ссылка верны
}
