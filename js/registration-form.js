"use strict";

// код с сайта флобайта (на форму там где нужно вводить проверочний код)
function focusNextInput(el, prevId, nextId) {
  if (el.value.length === 0) {
    document.getElementById(prevId).focus();
  } else {
    document.getElementById(nextId).focus();
  }
}

//-
// тут подключаю логику на формы регистрации
// переход от формы к форме. возвращение на шаг назад на клик Go back (кнопка на синем фоне)
(function () {
  const popupRegistrationForm = document.getElementById(
    "popup-registration-form"
  ); // получил весь попап
  const backExit = document.getElementById("back-exit"); // получаю кнопку назад на на форме Choose your role
  const form1 = document.getElementById("forma-1"); // форма 1
  const form2 = document.getElementById("forma-2"); // форма 2
  const form3 = document.getElementById("forma-3"); // форма 3
  const form4 = document.getElementById("forma-4"); // форма 4
  const step2 = document.getElementById("step-2"); // кнопка  -- Continue to account Info
  const step3 = document.getElementById("step-3"); // кнопка  -- Continue to verification
  const step4 = document.getElementById("step-4"); // кнопка  -- Can't verify? Try email code verification

  let isForma2 = false; // флаг для проверки формы 2
  let isForma3 = false; // флаг для проверки формы 3
  let isForma4 = false; // флаг для проверки формы 4

  console.log("isForma2", isForma2); // проверяю флаг формы 2
  console.log("isForma3", isForma3); // проверяю флаг формы 3
  console.log("isForma4", isForma4); // проверяю флаг формы 4

  // при клике на Continue to account Info закрываю форму 1 и открываю форму 2
  function openForma2() {
    step2.addEventListener("click", function () {
      form1.classList.add("hidden");
      form2.classList.remove("hidden");
      console.log("открываю форму 2");
      isForma2 = true;
      console.log("isForma2", isForma2); // проверяю флаг формы 2
    });
  }
  openForma2();

  // при клике на   Continue to verification   закрываю форму 2 и открываю форму 3 и отправляю форму
  function openForma3() {
    if (step3) {
      const form = document.querySelector("form");

      step3.addEventListener("click", function (event) {
        event.preventDefault(); // Останавливаем стандартное отправление формы

        // Проверяем валидацию
        if (!form.checkValidity()) {
          form.reportValidity(); // Показываем ошибки
          return;
        }

        // Делаем действия перед отправкой формы
        form2.classList.add("hidden");
        form3.classList.remove("hidden");

        console.log("Открываю форму 3");

        isForma2 = false; // сбрасываю флаг формы 2
        isForma3 = true; // устанавливаю флаг формы 3
        console.log("isForma2 в третьей форме", isForma2); // проверяю флаг формы 2
        console.log("isForma3 в третьей форме", isForma3); // проверяю флаг формы 3

        // Отправляем форму без перезагрузки
        const formData = new FormData(form);

        fetch("https://httpbin.org/post", {
          // Используем httpbin
          method: "POST",
          body: formData,
        })
          .then((response) => response.json()) // Парсим JSON-ответ
          .then((data) => {
            console.log("Форма успешно отправлена!", data);
            console.log("Отправленные данные:", data.form); // Проверяем, что отправилось
          })
          .catch((error) => {
            console.error("Ошибка при отправке формы:", error);
          });
      });
    }
  }

  openForma3();

  // при клике на   Continue to verification   закрываю форму 3 и открываю форму 4
  function openForma4() {
    step4.addEventListener("click", function () {
      isForma3 = false; // сбрасываю флаг формы 3
      form3.classList.add("hidden");
      form4.classList.remove("hidden");
      isForma4 = true; // добавлено
      console.log("открываю форму 4");
    });
  }
  openForma4();

  // закрываю первую форму выхожу из попапа на страничку
  function closePopup() {
    backExit.addEventListener("click", function () {
      if (isForma2) {
        form2.classList.add("hidden");
        form1.classList.remove("hidden");
        isForma2 = false;
        console.log("закрываю форму 2 и перехожу на форму 1");
        /*---*/
      } else if (isForma3) {
        form3.classList.add("hidden");
        form2.classList.remove("hidden");
        isForma3 = false;
        isForma2 = true;
        console.log("закрываю форму 3 и перехожу на форму 2");
      } else if (isForma4) {
        form4.classList.add("hidden");
        form3.classList.remove("hidden");
        isForma4 = false;
        isForma3 = true;
        console.log("закрываю форму 4 и перехожу на форму 3");
      } else {
        popupRegistrationForm.classList.add("hidden");
        document.body.style.overflow = "auto";
        console.log("закрываю попап");
      }
    });
  }
  closePopup();

  // закрываю форму два и перехожу на форму 1 при клике на go back
})();

//required="" у 6 инпутов
