"use strict";
// тут подключаю логику на формы регистрации
// переход от формы к форме. возвращение на шаг назад на клик Go back (кнопка на синем фоне)

// код с сайта флобайта (на форму там где нужно вводить проверочний код)
function focusNextInput(el, prevId, nextId) {
  if (el.value.length === 0) {
    document.getElementById(prevId).focus();
  } else {
    document.getElementById(nextId).focus();
  }
}

//-
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
const backToForm1 = document.getElementById("back-to-form1"); // получаю кнопу go back форма account datails (возврат к форме 1)
const backToForm2 = document.getElementById("back-to-form2"); // получаю кнопу go back форма account datails (возврат к форме 2)
const backToForm3 = document.getElementById("back-to-form3"); // получаю кнопу go back форма account datails (возврат к форме 3)

// закрываю первую форму выхожу из попапа на страничку
function closePopup() {
  backExit.addEventListener("click", function () {
    popupRegistrationForm.classList.add("hidden");
    console.log("закрываю попап");
  });
}
closePopup();
// при клике на Continue to account Info закрываю форму 1 и открываю форму 2
function openForma2() {
  step2.addEventListener("click", function () {
    form1.classList.add("hidden");
    form2.classList.remove("hidden");
    console.log("открываю форму 2");
  });
}
openForma2();
// закрываю форму два и перехожу на форму 1 при клике на go back
function closeForm2() {
  backToForm1.addEventListener("click", function () {
    form1.classList.remove("hidden");
    form2.classList.add("hidden");
  });
}
closeForm2();
// закрываю форму 3 и перехожу на форму 2 при клике на go back
function closeForm3() {
  backToForm2.addEventListener("click", function () {
    form2.classList.remove("hidden");
    form3.classList.add("hidden");
  });
}
closeForm3();
// закрываю форму 4 и перехожу на форму 3 при клике на go back
function closeForm4() {
  backToForm3.addEventListener("click", function () {
    form3.classList.remove("hidden");
    form4.classList.add("hidden");
  });
}
closeForm4();

// Функция закрытия формы при клике вне ее области
document.addEventListener("click", function (event) {
  if (form2) {
    if (
      !form2.contains(event.target) &&
      !form1.contains(event.target) &&
      !form3.contains(event.target) &&
      !form4.contains(event.target)
    ) {
      form1.classList.remove("hidden");
      form2.classList.add("hidden");
      console.log("кликнул за формой");
    }
  }
});
// при клике на   Continue to verification   закрываю форму 2 и открываю форму 3
function openForma3() {
  step3.addEventListener("click", function () {
    form2.classList.add("hidden");
    form3.classList.remove("hidden");
    console.log("открываю форму 3");
  });
}
openForma3();
// при клике на   Continue to verification   закрываю форму 2 и открываю форму 3
function openForma4() {
  step4.addEventListener("click", function () {
    form3.classList.add("hidden");
    form4.classList.remove("hidden");
    console.log("открываю форму 4");
  });
}
openForma4();
//required="" у 6 инпутов
