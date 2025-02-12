"use strict";
//Этот код реализует интерактивный звездочный рейтинг. Пользователь может навести курсор
// на звезды, чтобы подсветить их, и кликнуть, чтобы зафиксировать свой выбор. Выбранный рейтинг
// отображается рядом со звездами. в переменной <span id="rating-value">0</span>
//код подключается к странице reviews.html
// Каждый блок с классом .rating обрабатывается отдельно.
// Внутри каждого блока обрабатываются только его звёзды, текстовые значения и input.
// Можно добавить сколько угодно блоков .rating в одном документе, и они будут работать независимо друг от друга.

(function () {
  const ratingContainers = document.querySelectorAll(".rating"); // Массив контейнеров рейтинга

  ratingContainers.forEach((container) => {
    const stars = container.querySelectorAll(".star"); // Звёзды внутри текущего контейнера
    const ratingValue = container.querySelector(".rating-value"); // Текущее значение рейтинга
    const inputElement = container.querySelector('input[name="star"]'); // Input для передачи значения
    let selectedRating = 0;

    // Функция для подсветки звёзд
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

    // Добавление событий на звёзды
    stars.forEach((star, index) => {
      // Наведение на звезду
      star.addEventListener("mouseover", () => {
        highlightStars(index + 1);
      });

      // Увод курсора
      star.addEventListener("mouseleave", () => {
        highlightStars(selectedRating);
      });

      // Клик по звезде
      star.addEventListener("click", () => {
        selectedRating = index + 1;
        ratingValue.textContent = `${selectedRating}`;

        // Обновляем значение input
        inputElement.value = selectedRating;
        console.log(`Selected rating: ${inputElement.value}`); // Проверка
      });
    });
  });
})();
