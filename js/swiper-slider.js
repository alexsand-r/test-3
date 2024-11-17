"use strict";

if (document.querySelector(".product-card")) {
  // Инициализируем первый свайпер
  let thumbsSwiper = new Swiper(".images-product__slider", {
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    grabCursor: true,
    spaceBetween: 40,
    speed: 800,
    thumbs: {
      swiper: {
        el: ".images-preview__slider",
        slidesPerView: 6,
      },
    },
    navigation: {
      prevEl: ".swiper-button-prev-1",
      nextEl: ".swiper-button-next-1",
    },
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    on: {
      init: function () {
        // Удаляем классы при инициализации
        const paginationEl = document.querySelector(".swiper-pagination");
        paginationEl.classList.remove(
          "swiper-pagination-fraction",
          "swiper-pagination-horizontal"
        );
        // Замена "/" на "of" при инициализации
        replacePaginationText();
      },
      slideChange: function () {
        // Удаляем классы при смене слайда
        const paginationEl = document.querySelector(".swiper-pagination");
        paginationEl.classList.remove(
          "swiper-pagination-fraction",
          "swiper-pagination-horizontal"
        );
        // Замена "/" на "of" при смене слайда
        replacePaginationText();
      },
    },
  });

  // Инициализируем второй свайпер
  new Swiper(".images-preview__slider", {
    observer: true,
    observeParents: true,
    grabCursor: true,
    spaceBetween: 10,
    speed: 800,
    slideToClickedSlide: true,
    controller: {
      control: thumbsSwiper,
    },
    breakpoints: {
      320: { slidesPerView: 4 },
      430: { slidesPerView: 5 },
      489: { slidesPerView: 6 },
      660: { slidesPerView: 7 },
      725: { slidesPerView: 8 },
      991: { slidesPerView: 5 },
      1150: { slidesPerView: 6 },
      1270: { slidesPerView: 6 },
    },
  });

  // Проверка изображений и поворот, если изображение портретное
  const images = document.querySelectorAll(".images-product__slide img");

  // Функция для обновления высоты изображений
  function updateImageHeights() {
    images.forEach((img) => {
      const imgWidth = img.naturalWidth;
      const imgHeight = img.naturalHeight;

      // Если изображение портретное
      if (imgHeight > imgWidth) {
        img.classList.add("-rotate-90");

        // Проверка ширины устройства
        if (window.innerWidth <= 550) {
          img.style.height = "260px"; // Высота 260px для ширины экрана меньше или равно 991px
        } else if (window.innerWidth <= 650) {
          img.style.height = "300px"; // Высота 260px для ширины экрана меньше или равно 991px
        } else if (window.innerWidth <= 800) {
          img.style.height = "400px"; // Высота 260px для ширины экрана меньше или равно 991px
        } else if (window.innerWidth <= 991) {
          img.style.height = "500px"; // Высота 260px для ширины экрана меньше или равно 991px
        } else {
          img.style.height = "530px"; // Возвращаем высоту 530px для ширины больше 991px
        }
      }
    });
  }

  // Инициализация при загрузке страницы
  updateImageHeights();

  // Обновление высот при изменении размера окна
  window.addEventListener("resize", updateImageHeights);
}

// Функция замены текста пагинации
function replacePaginationText() {
  const paginationElement = document.querySelector(".swiper-pagination");
  if (paginationElement) {
    paginationElement.innerHTML = paginationElement.innerHTML.replace(
      " / ",
      " of "
    );
  }
}
