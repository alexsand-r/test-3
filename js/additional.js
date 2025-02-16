"use strict";

const container = document.querySelector(".button-container");
const buttons = Array.from(container.children);

function rearrangeButtons() {
  let currentRowWidth = 0;
  const maxRowWidth = container.offsetWidth; // максимальная ширина контейнера
  let row = [];

  // Перебираем кнопки для рассчета ширины
  buttons.forEach((button) => {
    const buttonWidth = button.offsetWidth;

    if (currentRowWidth + buttonWidth <= maxRowWidth) {
      row.push(button);
      currentRowWidth += buttonWidth;
    } else {
      // Если не влезает в текущую строку, переносим в следующую
      row.forEach((btn) => container.appendChild(btn));
      row = [button]; // начинаем новую строку с текущей кнопки
      currentRowWidth = buttonWidth; // обновляем текущую ширину строки
    }
  });

  // Переносим оставшиеся кнопки
  row.forEach((btn) => container.appendChild(btn));
}

// Привязка события resize
window.addEventListener("resize", rearrangeButtons);
rearrangeButtons(); // первый вызов для расстановки кнопок при загрузке страницы
