"use strict";
//!-- Это код на все попапы которые будут отрыватья и закрываться на страницах
//!-- использовать вместо кода car-fox.js

// Этот код управляет всплывающим окном на веб-странице.
//! НА КАЖДУЮ КНОПКУ ОТКРЫТИЯ ПОПАПА ВЕШАЕМ КЛАСС  popup-trigger (этот класс одинаковый для всех кнопок)
//! добавляем в html попапа id="popup-refund" со значением айди попапа (айди конкретного попапа должно совпадать
//! с data-popup="popup-refund" на страничке)
// Всплывающее окно можно закрыть разными способами:
// Нажатием на кнопку с крестиком внутри окна.
// Кликнув по фону окна (за пределами содержимого).
// Нажав клавишу Escape на клавиатуре.
// При закрытии окна, оно скрывается, и прокрутка страницы восстанавливается.

"use strict";

(function () {
  const popups = document.querySelectorAll(".popups"); // все попапы
  const triggerButtons = document.querySelectorAll(".popup-trigger"); // Все кнопки, которые открывают попап
  const closeButtons = document.querySelectorAll(".popup-close"); // Все кнопки для закрытия попапов

  // Функция для открытия попапа
  function openPopup(popupId) {
    popups.forEach((popup) => {
      if (popup.id === popupId) {
        popup.classList.remove("hidden"); // Показываем нужный попап
      } else {
        popup.classList.add("hidden"); // Скрываем остальные попапы
      }
    });
    document.body.style.overflow = "hidden"; // Отключаем прокрутку страницы
  }
  // Добавляем обработчики кликов для кнопок открытия
  triggerButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const popupId = button.dataset.popup; // Получаем значение атрибута data-popup
      openPopup(popupId);
    });
  });
  // Закрытие попапа при нажатии на кнопки с классом "popup-close"
  closeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const popup = button.closest(".popups"); // Находим ближайший попап
      if (popup) {
        popup.classList.add("hidden"); // Прячем попап
        document.body.style.overflow = "auto"; // Включаем прокрутку
      }
    });
  });
  // Закрытие при нажатии клавиши Esc
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      popups.forEach((popup) => {
        popup.classList.add("hidden"); // Прячем все попапы
      });
      document.body.style.overflow = "auto"; // Включаем прокрутку
    }
  });
  // Закрытие попапа при клике на фон (пустое место)
  popups.forEach((popup) => {
    popup.addEventListener("click", (event) => {
      // Проверяем, что клик произошёл по самому попапу (фону), а не по его содержимому
      if (event.target === popup) {
        popup.classList.add("hidden"); // Скрываем попап
        document.body.style.overflow = "auto"; // Включаем прокрутку
      }
    });
  });
})();
