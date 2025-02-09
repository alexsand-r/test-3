"use strict";

//----------------------------- фото на весь екран на мобилке на слайдере
// код на мобильном позволяет при клике на фото авто в слайдере раскрывать фото на весь екран
// с вертикальным скролом.
(function () {
  const popupMobSlide = document.querySelector("[data-popup-mob-slide]");
  // Проверяем, есть ли на странице элемент с классом "gallery"
  const galleryExists = document.querySelector(".gallery");
  const btnButtom = document.getElementById("btn-buttom"); // место куда перенесу блок ставки
  const btnClose = document.getElementById("btn-close");
  const priceForm = document.getElementById("price-form"); // Форма
  const priceFormOriginalParent = priceForm.parentElement; // Запоминаем оригинальное место формы
  const headerPop = document.getElementById("header-pop"); // место для шапки
  const header = document.getElementById("header"); // получил хеадер
  // Запоминаем родителя и следующий элемент после header
  const headerOriginalParent = header.parentElement;
  const headerNextSibling = header.nextElementSibling;

  // Если элемент с классом "gallery" существует, то добавляем обработчик клика
  if (galleryExists) {
    // Получаем ссылки на все элементы слайдера
    const sliderElements = document.querySelectorAll(
      ".product-images__picture"
    );

    // Получаем ссылку на контейнер галереи
    const gallery = document.getElementById("gallery");

    // Добавляем обработчик клика на каждый элемент слайдера
    sliderElements.forEach((sliderElement) => {
      sliderElement.addEventListener("click", () => {
        // Проверяем текущую ширину экрана
        if (window.innerWidth < 576.98) {
          // Показываем галерею при клике
          gallery.style.display = "block";
          popupMobSlide.classList.remove("hidden"); // удаляю хиден у папапа при клике
          // Очищаем текущие изображения в галерее (если нужно обновить)
          gallery.innerHTML = ""; // Убираем все старые изображения из галереи
          document.body.style.overflow = "hidden"; // Отключаем прокрутку страницы
          // Добавляем кнопку закрытия обратно
          gallery.appendChild(btnClose);
          gallery.appendChild(btnButtom);
          gallery.appendChild(headerPop);

          // Добавляем все изображения из слайдера в галерею
          sliderElements.forEach((sliderImage) => {
            const imgSrc = sliderImage.querySelector("img").src;
            // Создаем новый элемент img для каждой картинки из слайдера
            const newImage = document.createElement("img");
            newImage.src = imgSrc;
            newImage.alt = "picture";
            newImage.classList.add(
              "rounded-[8px]", // Бордер радиус 8 пикселей
              "mb-[6px]", // Маржин боттом 6 пикселей
              "mr-[6px]",
              "ml-[6px]",
              "max-w-[97%]" // Максимальная ширина 100%
            );

            // Добавляем изображение в галерею
            gallery.appendChild(newImage);
          });
          // Перемещаем форму в попап
          btnButtom.appendChild(priceForm);
          // перемещаю шапку в попап
          headerPop.appendChild(header);
        }
      });
    });

    // Обработчик закрытия галереи

    btnClose.addEventListener("click", () => {
      document.body.style.overflow = "auto"; // Отключаем прокрутку страницы
      gallery.style.display = "none";
      popupMobSlide.classList.add("hidden");
      // Возвращаем форму на её место
      priceFormOriginalParent.appendChild(priceForm);
      // Возвращаем шапку на её оригинальное место
      if (headerNextSibling) {
        headerOriginalParent.insertBefore(header, headerNextSibling);
      } else {
        headerOriginalParent.appendChild(header);
      }
    });
  }
})();
