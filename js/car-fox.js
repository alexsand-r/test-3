"use strict";
//*--

// Этот код управляет всплывающим окном на веб-странице. Вот его описание:
// Когда пользователь нажимает кнопку с текстом "request an inspection", открывается всплывающее окно, и прокрутка страницы отключается (чтобы пользователь не мог прокручивать страницу, пока окно открыто).
// Всплывающее окно можно закрыть разными способами:
// Нажатием на кнопку с крестиком внутри окна.
// Кликнув по фону окна (за пределами содержимого).
// Нажав клавишу Escape на клавиатуре.
// При закрытии окна, оно скрывается, и прокрутка страницы восстанавливается.

(function () {
  const requestAnInspection = document.getElementById("request-an-inspection"); // кнопка "request an inspection" показывает всплывающее окно
  const popupInspectionClose = document.getElementById(
    "popup-inspection-close"
  ); // крестик закрыть всплывающее окно
  const popupInspection = document.getElementById("popup-inspection"); // всплыающее окно фон
  // показываю всплывающее окно при клике на кнопку "request an inspection"
  const btnClose2 = document.getElementById("btn-close-2"); //кнопка No, thanks на мобилке закрывает модальное окно
  requestAnInspection.addEventListener("click", function () {
    popupInspection.classList.remove("hidden"); //удаляю класс "hidden"и показываю блок
    document.body.style.overflow = "hidden"; // Отключить скролл
  });
  //функция закрывает всплывающее окно
  function closePopup() {
    popupInspection.classList.add("hidden"); //удаляю класс "hidden"и показываю блок
    document.body.style.overflow = "auto"; // Включить скролл
  }
  // закрываю при клике на крестик
  popupInspectionClose.addEventListener("click", closePopup);
  // закрываю кликом на No, thanks
  btnClose2.addEventListener("click", closePopup);
  // закрываю при клике на поле вокруг блока окна
  popupInspection.addEventListener("click", function (event) {
    // проверяю, что клик был именно по фону (попапу), а не по самому окну
    if (event.target === popupInspection) {
      closePopup();
    }
  });
  // закрываю при нажатии клавиши Esc
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      // проверяем, была ли нажата клавиша "Escape"
      closePopup();
    }
  });
})();
