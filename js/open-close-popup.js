"use strict";
//!-- Это код на все попапы которые будут отрыватья и закрываться на страницах
//!-- использовать вместо кода car-fox.js

// Этот код управляет всплывающим окном на веб-странице. Вот его описание:
// НА КАЖДУЮ КНОПКУ ОТКРЫТИЯ ПОПАПА ВЕШАЕМ КЛАСС popup-trigger в файлах html
// Всплывающее окно можно закрыть разными способами:
// Нажатием на кнопку с крестиком внутри окна.
// Кликнув по фону окна (за пределами содержимого).
// Нажав клавишу Escape на клавиатуре.
// При закрытии окна, оно скрывается, и прокрутка страницы восстанавливается.

"use strict";

(function () {
  const popupInspection = document.getElementById("popup-inspection"); // фон попапа
  const popupInspectionClose = document.getElementById(
    "popup-inspection-close"
  ); // крестик для закрытия
  const btnClose2 = document.getElementById("btn-close-2"); // кнопка "No, thanks" для закрытия
  const triggerButtons = document.querySelectorAll(".popup-trigger"); // Все кнопки, которые открывают попап

  // Функция для открытия попапа
  function openPopup() {
    popupInspection.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Отключить скролл
  }

  // Функция для закрытия попапа
  function closePopup() {
    popupInspection.classList.add("hidden");
    document.body.style.overflow = "auto"; // Включить скролл
  }

  // Добавляем обработчик для всех кнопок с классом "popup-trigger"
  triggerButtons.forEach((button) => {
    button.addEventListener("click", openPopup);
  });

  // Закрытие при клике на крестик
  if (popupInspectionClose) {
    popupInspectionClose.addEventListener("click", closePopup);
  }

  // Закрытие при клике на "No, thanks"
  if (btnClose2) {
    btnClose2.addEventListener("click", closePopup);
  }

  // Закрытие при клике на фон попапа
  if (popupInspection) {
    popupInspection.addEventListener("click", function (event) {
      if (event.target === popupInspection) {
        closePopup();
        console.log("закрываю попап");
      }
    });
  }

  // Закрытие при нажатии клавиши Esc
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup();
    }
  });
})();
