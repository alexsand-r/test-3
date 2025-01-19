(function () {
  // Находим все кнопки и текстовые элементы
  const buttons = document.querySelectorAll("[data-copy-to-clipboard]");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const copyElement = button.querySelector("[data-copy]");
      const copiedElement = button.querySelector("[data-copied]");
      const spanText = button.previousElementSibling; // Предполагается, что span находится перед кнопкой

      // Копируем текст из элемента span в буфер обмена
      const textToCopy = spanText.textContent.trim();

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          console.log(textToCopy);

          // Скрываем элемент с текстом "Copy" и показываем "Copied"
          copyElement.classList.add("hidden");
          copiedElement.classList.remove("hidden");

          // Через 2 секунды вернуть исходное состояние
          setTimeout(() => {
            copyElement.classList.remove("hidden");
            copiedElement.classList.add("hidden");
          }, 1500); // 2000 миллисекунд = 2 секунды
        })
        .catch((error) => {
          console.error("Ошибка копирования текста: ", error);
        });
    });
  });
})();

// подключение кода в штмл
//   < script src = "js/btn-copy.js" ></ >
//   у каждой новой кнопки на странице добавляем id="btn-1"
