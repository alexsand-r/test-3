// тут старый код для страницы расстаможки
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

//-----------------------------------------------------------------------------------------------------------------
//
//
//!-этот код выбирает одно из активных состояний: бензин, дизель, електро и тд
// при клике добавляется активный класс fuel-primery (так же класс fuel) который подключается
//  в файле customs-clearance-calculator.css
// так же в коде штмл есть соответсвтующий прозрачный инпут с типом радио. Логика такая - при активации
// одного из параметра можно взять состояние соответсвующего инпута.
// (function () {
//   const fuelLabels = document.querySelectorAll(".fuel");
//   let lastSelected = null; // Для отслеживания текущего выбранного элемента

//   fuelLabels.forEach((label) => {
//     label.addEventListener("click", (event) => {
//       const input = label.querySelector("input");

//       // Игнорируем клик, если он был вызван непосредственно <input>
//       if (event.target === input) {
//         return;
//       }

//       // Если кликнули на уже выбранный элемент, снимаем выбор
//       if (lastSelected === input) {
//         input.checked = false;
//         label.classList.remove("fuel-primery"); // Убираем стиль активного элемента
//         lastSelected = null;
//         //console.log("Выбор снят");
//       } else {
//         // Снимаем класс у предыдущего выбранного элемента
//         if (lastSelected) {
//           lastSelected.closest(".fuel").classList.remove("fuel-primery");
//         }

//         // Выбираем текущий элемент
//         input.checked = true;
//         label.classList.add("fuel-primery"); // Применяем стиль активного элемента
//         lastSelected = input;
//         //console.log(`Выбран: ${input.value}`);
//       }
//     });
//   });
// })();

//
//
//
//
// код на каклькулятор растаможки
const precentCustoms = 0.1; // Сейчас это 10 процентов
const vatPercent = 0.23; // Ставка НДС
const priceSimple = document.getElementById("price-simple"); // Инпут стоимость авто - простой калькулятор
const countryOfDispatchSimple = document.getElementById(
  "country-of-dispatch-simple"
); // Страна отправки ПРОСТОЙ калькулятор
const defaultSelectedValue = countryOfDispatchSimple.value; // Значение по умолчанию
let countryOfDelivery = Number(defaultSelectedValue); // Значение страны доставки по умолчанию
let customsDutyValue = document.getElementById("customs-duty"); // Таможенная пошлина
let vat = document.getElementById("vat"); // Поле VAT
let sumaAvto = 0; // Начальная стоимость авто
let customsDuty = 0; // Таможенная пошлина
let vatValue = 0; // Значение VAT
let exciseDuty = document.getElementById("excise-duty"); // поле акцизный сбор
let totalAs = document.getElementById("total-as"); // поле итого сумма сбора

// Обновляем таможенную пошлину
function updateCustomsDuty() {
  if (isNaN(sumaAvto) || sumaAvto === 0) {
    customsDuty = 0; // Если сумма авто пустая или некорректная, устанавливаем 0
  } else {
    customsDuty = Math.round((sumaAvto + countryOfDelivery) * precentCustoms);
    // Вычисляем таможенную пошлину
  }

  console.log("Таможенная пошлина:", customsDuty);
  customsDutyValue.textContent = `${customsDuty} zl`; // Обновляем текст

  // Пересчитываем VAT при обновлении таможенной пошлины
  updateVatValue();
}
let exciseDutyValue = 0;
//! общий итого
function getAsTotal() {
  totalAs = customsDuty + vatValue + exciseDutyValue;
  console.log("общий акциз - ", totalAs);
}

// Обновляем значение VAT
function updateVatValue() {
  if (isNaN(sumaAvto) || sumaAvto === 0) {
    vatValue = 0; // Если сумма авто пустая или некорректная, устанавливаем 0
  } else {
    vatValue = Math.round(
      (sumaAvto + countryOfDelivery + customsDuty) * vatPercent
    ); // Вычисляем VAT
  }

  console.log("VAT:", vatValue);
  vat.textContent = `${vatValue} zl`; // Обновляем текст
}

// todo Обработка ввода цены авто на инпуте
function handleInputData(e) {
  sumaAvto = Number(e.target.value); // Получаем цену авто из инпута -15000
  console.log("Цена авто:", sumaAvto);
  updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
  updateCoefficient();
  getAsTotal();
}

// Обработка изменения страны доставки
countryOfDispatchSimple.addEventListener("change", () => {
  const selectedValue = countryOfDispatchSimple.value; // Получаем текущее выбранное значение
  countryOfDelivery = Number(selectedValue); // Обновляем значение страны доставки
  console.log("Страна доставки:", countryOfDelivery);
  updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
});

// Вешаем обработчик события ввода на поле цены авто
priceSimple.addEventListener("input", handleInputData);

// Вычисляем значения по умолчанию при загрузке страницы
updateCustomsDuty();

const fuelCoefficients = {
  petrol: { below2000: 0.031, above2000: 0.186 }, // бензин проценты
  diesel: { below2000: 0.031, above2000: 0.186 }, // дизель проценты
  petrolElectr: { below2000: 0.0155, above2000: 0.093 }, // бензин/електро проценты
  dieselElectr: { below2000: 0.0155, above2000: 0.093 }, // дизель/електро проценты
  phev: { below2000: 0, above2000: 0.093 }, // гибрид водород
  electric: { below2000: 0, above2000: 0 }, // Пример для электродвигателя
};

const fuelLabels = document.querySelectorAll(".fuel"); // массив радио инпутов с видом топлива
const engineCapacitySelect = document.getElementById("engine-capacity"); // селектор объема двигателя

let selectedFuel = null; // Выбранное топливо
let engineCapacity = "below2000"; // Выбранный объем двигателя

// Функция для обновления значения в зависимости от выбора топлива и объема двигателя
function updateCoefficient() {
  if (selectedFuel) {
    const coefficient = fuelCoefficients[selectedFuel][engineCapacity];
    console.log(`Выбранное топливо: ${selectedFuel}`);
    console.log(`Объем двигателя: ${engineCapacity}`);
    console.log("коеффициент ", coefficient);
    // Здесь можно использовать coefficient для расчета
    let exciseDutyValue = (coefficient * sumaAvto).toFixed(0);
    console.log("цена авто * на коэффициент  " + exciseDutyValue);
    exciseDuty.textContent = `${exciseDutyValue}  zl`;
  }
}

// Обработчик клика по топливу
fuelLabels.forEach((label) => {
  label.addEventListener("click", (event) => {
    const input = label.querySelector("input");
    // Игнорируем клик, если он был вызван непосредственно <input>
    if (event.target === input) {
      return;
    }
    // Если клик на активный, то снимаем выбор
    if (selectedFuel === input.value) {
      input.checked = false;
      label.classList.remove("fuel-primery");
      selectedFuel = null;
    } else {
      // Убираем активный стиль с предыдущего выбора
      fuelLabels.forEach((lbl) => lbl.classList.remove("fuel-primery"));

      // Обновляем активное топливо
      input.checked = true;
      label.classList.add("fuel-primery");
      selectedFuel = input.value;
    }

    updateCoefficient(); // Обновляем значение коэффициента
  });
});

// Обработчик изменения селекта объема двигателя
engineCapacitySelect.addEventListener("change", () => {
  engineCapacity =
    engineCapacitySelect.selectedIndex === 0 ? "below2000" : "above2000";
  updateCoefficient(); // Обновляем значение коэффициента
});
