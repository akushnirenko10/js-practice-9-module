import { STORAGE_KEYS } from './constants';
import { apply } from './helpers';
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
