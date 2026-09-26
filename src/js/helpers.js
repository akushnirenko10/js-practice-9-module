import { STORAGE_KEYS } from './constants';
import { refs } from './refs';
import { saveToLS } from './storage';

export function apply(size) {
  refs.article.style.fontSize = `${size}px`;
  refs.spanSize.textContent = size;

  saveToLS(STORAGE_KEYS.FONT_SIZES, size);
}

export function delay(ms) {
  return new Promise((res, rej) => {
    setTimeout(res, ms);
  });
}

export function loadReport() {
  return new Promise((resolve, reject) => {
    setTimeout(
      () => (Math.random() < 0.5 ? resolve({ rows: 125 }) : reject('Error')),
      900
    );
  });
}
