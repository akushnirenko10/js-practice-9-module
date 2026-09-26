import { STORAGE_KEYS } from './constants';
import { apply, delay, loadReport } from './helpers';
import { refs } from './refs';
import { loadFromLS, saveToLS } from './storage';

export function onReaderToolsClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  const { step } = event.target.dataset;

  const newSize = loadFromLS(STORAGE_KEYS.FONT_SIZES) + Number(step);
  saveToLS(STORAGE_KEYS.FONT_SIZES, newSize);

  apply(newSize);
}

let messagesListItem = null;
let TIMEOUT_ID = null;

export function onDeleteBtnClick(event) {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  messagesListItem = event.target.closest('li');
  messagesListItem.hidden = true;
  refs.undoBoxField.hidden = false;

  TIMEOUT_ID = setTimeout(() => {
    messagesListItem.remove();
    refs.undoBoxField.hidden = true;
    messagesListItem = null;
  }, 5000);
}

export function onUndoBtnClick() {
  clearTimeout(TIMEOUT_ID);
  messagesListItem.hidden = false;
  messagesListItem = null;
  refs.undoBoxField.hidden = true;
}

export function onNotifyBtnClick() {
  refs.notifyBtn.disabled = true;
  refs.msg.textContent = 'Очiкуйте!';
  delay(2000).then(() => {
    refs.notifyBtn.disabled = false;
    refs.msg.textContent = 'Перевiр почту';
  });
}

export function onLoadBtnClick() {
  refs.loader.classList.add('visible');
  refs.loadBtn.disabled = true;
  refs.textReport.textContent = '';
  loadReport()
    .then(({ rows }) => {
      refs.textReport.textContent = `Завантажено рядкiв ${rows}`;
    })
    .catch(err => {
      refs.textReport.textContent = `Помилка ${err}`;
    })
    .finally(() => {
      refs.loader.classList.remove('visible');
      refs.loadBtn.disabled = false;
    });
}
