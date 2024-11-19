// Подключаем библиотеку lightGallery через глобальный объект
document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.getElementById("gallery");
  if (gallery) {
    lightGallery(gallery, {
      speed: 500, // Настройки
      download: false, // Убирает кнопку загрузки
    });
  }
});
