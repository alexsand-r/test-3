"use strict";

//====================================================================================================

//=====================================================================================================
// -------------------- кнопка показать больше в auto блок Overview блок Additional information:

(function () {
  const boxText = document.querySelector(".box-text"); // блок с текстом
  const expandBtn = document.getElementById("expand-btn"); // кнопка more
  const hideBtn = document.getElementById("hide-btn"); // кнопка show

  if (boxText.offsetHeight >= 123) {
    expandBtn.classList.remove("hidden");
  }
  function openBlock() {
    if (boxText) {
      boxText.classList.toggle("box-text");
      expandBtn.classList.toggle("hidden");
      hideBtn.classList.toggle("hidden");
    }
  }

  // Проверяем высоту блока
  if (boxText.offsetHeight < 123) {
    expandBtn.style.display = "none";
    hideBtn.style.display = "none";
    console.log("меньше 123");
  }

  // Добавляем обработчики событий
  expandBtn.addEventListener("click", openBlock);
  hideBtn.addEventListener("click", openBlock);
})();

//------------------------------- кнопка показать больше в auto блок Overview ----------------------------------------------------

// ======= код через  onclick="openText()"
const boxPost = document.querySelector(".box__post"); // блок с текстом
const btnMore = document.getElementById("btn-more"); // кнопка more
const btnShow = document.getElementById("btn-show"); // кнопка show
const lineOpacity = document.querySelector(".line-opacity");
function openText() {
  if (boxPost) {
    boxPost.classList.toggle("box__post");
    btnMore.classList.toggle("hidden");
    btnShow.classList.toggle("hidden");
    lineOpacity.classList.toggle("hidden");
  }
}

//=================================================================================================================
//----------------------------- галерея модальное окн
// Проверяем, есть ли на странице элемент с классом "gallery"
const galleryExists = document.querySelector(".gallery");
const btnClose = document.getElementById("btn-close");
// Если элемент с классом "gallery" существует, то добавляем обработчик клика
if (galleryExists) {
  // Получаем ссылки на все элементы слайдера
  const sliderElements = document.querySelectorAll(".product-images__picture");
  const clasSect = document.querySelectorAll(".clas-sect");

  // Получаем ссылку на контейнер галереи
  const gallery = document.getElementById("gallery");

  // Добавляем обработчик клика на каждый элемент слайдера
  sliderElements.forEach((sliderElement) => {
    sliderElement.addEventListener("click", () => {
      // Проверяем текущую ширину экрана
      if (window.innerWidth < 991.98) {
        // Показываем галерею при клике
        gallery.style.display = "block";

        // Добавляем класс "hidden" к элементам с классом "clas-sect"
        clasSect.forEach((element) => {
          element.classList.add("hidden");
        });
      }
    });
  });
  btnClose.addEventListener("click", () => {
    gallery.style.display = "none";
    // Добавляем класс "hidden" к элементам с классом "clas-sect"
    clasSect.forEach((element) => {
      element.classList.remove("hidden");
    });
  });
}

// страница auto-pop блоки показать скрыть Vehicle configuration based on decoding data from the VIN =
// ======= код через  onclick="viewContent(this)"

function viewContent(element) {
  var elementsToToggle = [];
  var currentElement = element.previousElementSibling;

  // Находим все элементы до следующей кнопки
  while (currentElement && !currentElement.classList.contains("click-btn")) {
    if (currentElement.classList.contains("block-hid")) {
      elementsToToggle.push(currentElement);
    }
    currentElement = currentElement.previousElementSibling;
  }

  // Удаляем класс "hidden" у найденных элементов
  elementsToToggle.forEach(function (el) {
    el.classList.toggle("hidden");
  });

  const viewText = element.querySelector(".view-text"); // текст на кнопке

  if (viewText.innerText === "Close") {
    viewText.innerText = "View All"; // Change the text to "View All" if it was "Close"
  } else {
    viewText.innerText = "Close"; // Change the text to "Close" if it was "View All"
  }
}
