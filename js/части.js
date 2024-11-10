// --------------------------- синий фон на странице sign-up ----------------------------

//

// Обработчик события "DOMContentLoaded" для выполнения кода после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
  const bacgBlue = document.getElementById("bacg-blue"); // синий фон страницы sign-up

  // Функция для проверки и обработки изменений ширины окна
  function handleWindowResize() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 767.98) {
      bacgBlue.classList.add("bacg-blue");
    } else {
      bacgBlue.classList.remove("bacg-blue");
    }
  }

  // Вызываем функцию при загрузке страницы и при изменении размера окна
  handleWindowResize();
  window.addEventListener("resize", handleWindowResize);
});
