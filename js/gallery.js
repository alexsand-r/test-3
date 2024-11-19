// Подключаем библиотеку lightGallery через глобальный объект
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  if (gallery) {
    lightGallery(gallery, {
      getCaptionFromTitleOrAlt: false, // Отключить подписи из атрибутов title/alt
      speed: 500, // Настройки
      // download: false, // Убирает кнопку загрузки
      loop: false, // Отключить бесконечное листание (для ограничения)
    });
  }
});
