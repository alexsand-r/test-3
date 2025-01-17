// Подключаем библиотеку lightGallery через глобальный объект
// Этот код добавляет интерактивную галерею изображений на страницу с помощью библиотеки lightGallery. Он:
// Инициализирует галерею для элемента с id="gallery", задавая параметры:
// Отключает подписи из атрибутов title и alt.
// Настраивает скорость анимации при переключении изображений.
// Убирает кнопку загрузки изображений.
// Запрещает бесконечный переход между изображениями.
// Отключает прокрутку страницы, когда галерея открыта, и снова включает её при закрытии галереи.

document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");

  if (gallery) {
    // Инициализация lightGallery
    const lightGalleryInstance = lightGallery(gallery, {
      getCaptionFromTitleOrAlt: false, // Отключить подписи из атрибутов title/alt
      speed: 500, // Настройки
      download: false, // Убирает кнопку загрузки
      loop: false, // Отключить бесконечное листание
    });

    // Отключение скролла при открытии галереи
    gallery.addEventListener("lgAfterOpen", () => {
      //console.log("Галерея открыта");
      document.body.style.overflow = "hidden"; // Отключить скролл
    });

    // Включение скролла при закрытии галереи
    gallery.addEventListener("lgBeforeClose", () => {
      //console.log("Галерея закрыта");
      document.body.style.overflow = "auto"; // Включить скролл
    });
  }
});
