//todo У верхній панелі адмінки показуємо поточний час, який оновлюється щосекунди, і сьогоднішню дату словами.

import { refs } from './js/refs';

// Що зробити:
// Написати функцію tick, що бере поточний час і виводить його в два елементи.
// Час форматувати через toLocaleTimeString, дату — через toLocaleDateString з днем тижня і місяцем словами.
// Викликати tick одразу, а потім запустити setInterval раз на секунду.
// Пояснити, навіщо потрібен виклик до setInterval.
// function tick() {
//   const currentTime = new Date();
//   const localeTime = currentTime.toLocaleTimeString('ua-UK', {
//     timeZone: 'Europe/Kyiv',
//   });
//   const localeDate = currentTime.toLocaleDateString('uk-UA', {
//     day: 'numeric',
//     weekday: 'long',
//     month: 'long',
//   });

//   refs.clockSpan.textContent = localeTime;
//   refs.todaySpan.textContent = localeDate;
// }

// setInterval(tick, 1000);
