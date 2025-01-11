"use strict";

// код переключает активную кнопку блока "вариант калькулятора" с УПРАЩЕННОГО на ПРОФЕСИОНАЛЬНЫЙ
// добавляет активний класс _activ-1 к активной кнопке етот класс подключается в файле customs-clearance-calculator.css

(function () {
  const tabuBtn = document.querySelectorAll(".cal-item");
  tabuBtn.forEach((item) => {
    item.addEventListener("click", function () {
      tabuBtn.forEach(function (element) {
        element.classList.remove("_activ-1");
      });
      item.classList.add("_activ-1");
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
