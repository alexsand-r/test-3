"use strict";

// код переключает активную кнопку блока "вариант калькулятора" с УПРАЩЕННОГО на ПРОФЕСИОНАЛЬНЫЙ
// добавляет активний класс _activ-1 к активной кнопке етот класс подключается в файле customs-clearance-calculator.css
// также этот код меняет видимость блока калькулятора с упрощенного на професиональный класс hidden подвязан к
// классу _activ-1
(function () {
  const tabuBtn = document.querySelectorAll(".cal-item");
  const calculatorSimple = document.getElementById("calculator-simple"); // блок с простым калькулятором
  const calculatorProfessional = document.getElementById(
    "calculator-professional"
  ); // блок с профессиональным калькулятором

  tabuBtn.forEach((item, index) => {
    item.addEventListener("click", function () {
      // Убираем активный класс со всех кнопок
      tabuBtn.forEach(function (element) {
        element.classList.remove("_activ-1");
      });

      // Добавляем активный класс на текущую кнопку
      item.classList.add("_activ-1");

      // Переключаем видимость блоков в зависимости от индекса кнопки
      if (index === 0) {
        // Если нажата первая кнопка
        calculatorSimple.classList.remove("hidden");
        calculatorProfessional.classList.add("hidden");
      } else if (index === 1) {
        // Если нажата вторая кнопка
        calculatorProfessional.classList.remove("hidden");
        calculatorSimple.classList.add("hidden");
      }
    });
  });
})();

//
//
//
//-этот код выбирает одно из активных состояний: бензин, дизель, електро и тд
// при клике добавляется активный класс fuel-primery (так же класс fuel) который подключается в файле customs-clearance-calculator.css
// так же в коде штмл есть соответсвтующий прозрачный инпут с типом радио. Логика такая - при активации
// одного из параметра можно взять состояние соответсвующего инпута.
(function () {
  const fuelLabels = document.querySelectorAll(".fuel");
  let lastSelected = null; // Для отслеживания текущего выбранного элемента

  fuelLabels.forEach((label) => {
    label.addEventListener("click", (event) => {
      const input = label.querySelector("input");

      // Игнорируем клик, если он был вызван непосредственно <input>
      if (event.target === input) {
        return;
      }

      // Если кликнули на уже выбранный элемент, снимаем выбор
      if (lastSelected === input) {
        input.checked = false;
        label.classList.remove("fuel-primery"); // Убираем стиль активного элемента
        lastSelected = null;
        //console.log("Выбор снят");
      } else {
        // Снимаем класс у предыдущего выбранного элемента
        if (lastSelected) {
          lastSelected.closest(".fuel").classList.remove("fuel-primery");
        }

        // Выбираем текущий элемент
        input.checked = true;
        label.classList.add("fuel-primery"); // Применяем стиль активного элемента
        lastSelected = input;
        //console.log(`Выбран: ${input.value}`);
      }
    });
  });
})();
//
//
// этот код на блок РАСЧЕТ СТОИМОСТИ РАСТАМОЖКИ на блок КОНВЕРТЕР ВАЛЮТ
// меняет активную валюту USD - PL - EUR
//! этот код я переиспользовал со страницы КАТАЛОГА там он переключает ALL - LIVE - SOLD
(function () {
  const tabuBtn = document.querySelectorAll(".tabu-body__item");
  tabuBtn.forEach((item) => {
    item.addEventListener("click", function () {
      tabuBtn.forEach(function (element) {
        element.classList.remove("_activ");
      });
      item.classList.add("_activ");
    });
  });
})();
