//todo Як у поштовому клієнті: лист зникає одразу, але насправді видаляється через 5 секунд — і цей час можна натиснути «Скасувати».

import { onDeleteBtnClick, onUndoBtnClick } from './js/handlers';
import { refs } from './js/refs';

// Що зробити:
// Делегуванням ловити клік по кнопці видалення.
// Одразу сховати лист і показати панель скасування.
// Через setTimeout на 5 секунд остаточно видалити елемент.
// Кнопка «Скасувати» робить clearTimeout і повертає лист на місце.

refs.messagesField.addEventListener('click', onDeleteBtnClick);
refs.undoBtn.addEventListener('click', onUndoBtnClick);
