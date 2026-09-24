export function loadFromLS(key) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error(`Помилка читання з LocalStorage ${error.message}`);
    return null;
  }
}

export function saveToLS(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error(`Помилка запису в LocalStorage ${error.message}`);
  }
}

export function removeKeyFromLS(key) {
  localStorage.removeItem(key);
}
