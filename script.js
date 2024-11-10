// Храним сообщения для каждого языка
const messages = {
  ru: "Здравствуйте! Можно узнать детали работы?",  // Сообщение на русском
  en: "Hello! May I have the details of the job?",  // Сообщение на английском
  ro: "Bună ziua! Îmi puteți oferi detalii despre post?"  // Сообщение на румынском
};

// Текущий выбранный язык (по умолчанию русский)
let currentLanguage = 'ru';

// Обработчик для изменения языка
function setLanguage(language) {
  // Обновляем текущий язык
  currentLanguage = language;

  // Меняем текст на кнопке в зависимости от выбранного языка
  const button = document.getElementById('whatsapp-button');
  
  // Анимация исчезновения блока выбора языка
  const languageWrapper = document.getElementById('language-wrapper');
  languageWrapper.style.animation = 'fadeOut 0.5s ease-out forwards';

  setTimeout(() => {
    // Скрываем блок выбора языка
    languageWrapper.style.display = 'none';

    // Показываем основной контент с кнопкой
    const contentContainer = document.getElementById('content-container');
    contentContainer.style.display = 'block';

    // Меняем текст кнопки в зависимости от выбранного языка
    switch (language) {
        case 'ru':
            button.innerHTML = 'Написать в WhatsApp';
            break;
        case 'en':
            button.innerHTML = 'Write in WhatsApp';
            break;
        case 'ro':
            button.innerHTML = 'Scrie în WhatsApp';
            break;
        default:
            button.innerHTML = 'Написать в WhatsApp';
            break;
    }

    // Обновляем текст кнопки возврата
    updateBackButtonText(language);

    // Показываем кнопку возврата
    const backButton = document.querySelector('.back-button');
    backButton.style.display = 'inline-block';

    // Анимация появления нового текста
    contentContainer.style.animation = 'fadeIn 0.5s ease-out forwards';
  }, 500); // Задержка в 500мс, чтобы дождаться окончания анимации исчезновения
}

// Функция для редиректа в WhatsApp
function redirectToWhatsApp() {
  const phoneNumber = "37376892651"; // Укажите номер телефона
  const message = messages[currentLanguage]; // Выбираем сообщение в зависимости от языка
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  // Переход по ссылке
  window.location.href = url;
}

// Функция для возврата к выбору языка
function goBackToLanguageSelection() {
  // Скрываем основной контент с кнопкой
  const contentContainer = document.getElementById('content-container');
  contentContainer.style.animation = 'fadeOut 0.5s ease-out forwards'; // Анимация исчезновения контента

  setTimeout(() => {
    // Скрываем основной контейнер
    contentContainer.style.display = 'none';

    // Показываем блок выбора языка
    const languageWrapper = document.getElementById('language-wrapper');
    languageWrapper.style.display = 'flex'; // Показать блок выбора языка

    // Скрываем кнопку возврата
    const backButton = document.querySelector('.back-button');
    backButton.style.display = 'none';

    // Анимация появления блока выбора языка
    languageWrapper.style.animation = 'fadeIn 0.5s ease-out forwards'; // Анимация появления
  }, 500); // Задержка в 500мс, чтобы дождаться окончания анимации исчезновения контента
}

// Функция для обновления текста кнопки возврата
function updateBackButtonText(language) {
  const backButton = document.querySelector('.back-button');
  switch (language) {
    case 'ru':
      backButton.innerHTML = '← Вернуться к выбору языка';
      break;
    case 'en':
      backButton.innerHTML = '← Back to language selection';
      break;
    case 'ro':
      backButton.innerHTML = '← Înapoi la selecția limbii';
      break;
    default:
      backButton.innerHTML = '← Вернуться к выбору языка';
      break;
  }
}


