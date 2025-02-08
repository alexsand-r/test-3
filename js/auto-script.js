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
//----------------------------- галерея модальное окно
// код на мобильном позволяет при клике на фото авто в слайдере раскрывать фото на весь екран
// с вертикальным скролом. В код штмл в слайдер добавляется с айди <div id="gallery"....>
// с кнопкой закрытия этого блока. При клике на любое фото в слайдере на мобильном, все фото слайдера динамически
// добавляются в этот див. при клике на кнопку закрытия этого блока, фото в диве очищаются.
(function () {
  // Проверяем, есть ли на странице элемент с классом "gallery"
  const galleryExists = document.querySelector(".gallery");
  console.log(galleryExists);

  const btnClose = document.getElementById("btn-close");
  console.log(btnClose);
  // Если элемент с классом "gallery" существует, то добавляем обработчик клика
  if (galleryExists) {
    // Получаем ссылки на все элементы слайдера
    const sliderElements = document.querySelectorAll(
      ".product-images__picture"
    );
    const clasSect = document.querySelectorAll(".clas-sect");

    // Получаем ссылку на контейнер галереи
    const gallery = document.getElementById("gallery");

    // Добавляем обработчик клика на каждый элемент слайдера
    sliderElements.forEach((sliderElement) => {
      sliderElement.addEventListener("click", () => {
        // Проверяем текущую ширину экрана
        if (window.innerWidth < 576.98) {
          // Показываем галерею при клике
          gallery.style.display = "block";
          console.log("Я кликнул на фото");

          // Добавляем класс "hidden" к элементам с классом "clas-sect"
          clasSect.forEach((element) => {
            element.classList.add("hidden");
          });

          // Очищаем текущие изображения в галерее (если нужно обновить)
          gallery.innerHTML = ""; // Убираем все старые изображения из галереи

          // Добавляем кнопку закрытия обратно
          gallery.appendChild(btnClose);

          // Добавляем все изображения из слайдера в галерею
          sliderElements.forEach((sliderImage) => {
            const imgSrc = sliderImage.querySelector("img").src;

            // Создаем новый элемент img для каждой картинки из слайдера
            const newImage = document.createElement("img");
            newImage.src = imgSrc;
            newImage.alt = "picture";
            newImage.classList.add(
              "border-[3px]",
              "border-white",
              "border-l-[6px]",
              "border-r-[6px]"
            );

            // Добавляем изображение в галерею
            gallery.appendChild(newImage);
          });
        }
      });
    });

    // Обработчик закрытия галереи
    btnClose.addEventListener("click", () => {
      gallery.style.display = "none";
      // Убираем класс "hidden" с элементами с классом "clas-sect"
      clasSect.forEach((element) => {
        element.classList.remove("hidden");
      });
    });
  }
})();

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
