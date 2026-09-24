//todo Сторінка «не знайдено» через 5 секунд повертає користувача на головну, але він може лишитись, натиснувши кнопку.

import { refs } from './js/refs';

// Що зробити:
// Запустити інтервал, що раз на секунду зменшує лічильник і виводить його.
// Коли лічильник дійшов до нуля — зупинити інтервал і виконати перехід.
// Кнопка «Залишитись» зупиняє інтервал і прибирає повідомлення.
// Перевірити, що після натискання кнопки відлік справді припинився.

let seconds = 5;

export const INTERVAL_ID = setInterval(() => {
  seconds -= 1;
  refs.leftSeconds.textContent = seconds;

  if (seconds === 0) {
    clearInterval(INTERVAL_ID);
    location.href = '../index.html';
  }
}, 1000);

refs.stayBtn.addEventListener('click', onStayBtnClick);

function onStayBtnClick() {
  clearInterval(INTERVAL_ID);
  refs.stayText.textContent = 'Перехiд скасовано!';
  refs.stayBtn.remove();
}
