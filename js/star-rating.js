"use strict";
//Этот код реализует интерактивный звездочный рейтинг. Пользователь может навести курсор
// на звезды, чтобы подсветить их, и кликнуть, чтобы зафиксировать свой выбор. Выбранный рейтинг
// отображается рядом со звездами. в переменной <span id="rating-value">0</span>
//код подключается к странице reviews.html

(function () {
  const stars = document.querySelectorAll(".star");
  const ratingValue = document.getElementById("rating-value");
  let selectedRating = 0;

  // Функция подсветки звезд
  function highlightStars(rating) {
    stars.forEach((star, idx) => {
      if (idx < rating) {
        star.classList.remove("text-gray-300");
        star.classList.add("text-yellow-300");
      } else {
        star.classList.remove("text-yellow-300");
        star.classList.add("text-gray-300");
      }
    });
  }
  // Наведение на звездочку
  stars.forEach((star, index) => {
    star.addEventListener("mouseover", () => {
      highlightStars(index + 1); // Подсвечиваем звезды до текущей
    });

    // Увод курсора
    star.addEventListener("mouseleave", () => {
      highlightStars(selectedRating); // Возвращаемся к выбранному рейтингу
    });

    // Клик по звездочке
    star.addEventListener("click", () => {
      selectedRating = index + 1; // Фиксируем выбранный рейтинг
      ratingValue.textContent = `${selectedRating}`;
    });
  });
})();
