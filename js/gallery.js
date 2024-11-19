// Подключаем библиотеку lightGallery через глобальный объект

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
