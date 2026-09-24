//todo Кнопки A− і A+ змінюють розмір тексту статті в межах 14–26 px. Обраний розмір зберігається між візитами.

// Що зробити:
// Прочитати збережений розмір або взяти 18 за замовчуванням.
// Функція apply застосовує розмір до статті, оновлює підпис і зберігає значення.
// Делегуванням на панелі ловити кліки по кнопках з data-step.
// Обмежити розмір мінімумом і максимумом.

import { STORAGE_KEYS } from './js/constants';
import { onReaderToolsClick } from './js/handlers';
import { apply } from './js/helpers';
import { refs } from './js/refs';
import { loadFromLS, saveToLS } from './js/storage';

const size = Number(loadFromLS(STORAGE_KEYS.FONT_SIZES)) || 18;

refs.readerTools.addEventListener('click', onReaderToolsClick);

apply(size);
