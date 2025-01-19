"use strict";

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

//=======================================================================================================
// код на калькулятор растаможки (переключает с простого на профессиональный)
// на строке 258 функция которая расчитывает итоговую сумму которую нужно пропускать через кон-
// вертер валют  //! общий ИТОГО акциз -- ЭТО ЗНАЧЕНИЕ ДОЛЖНО ПЕРЕСЧИТЫВАТЬСЯ ПРИ ИЗМЕНЕНИИ ВАЛЮТЫ
(function () {
  let simple = true; // переменные для хранения активного состояния калькулятора
  let prof = false; // переменная для хранения активного состояния калькулятора
  const tabuBtn = document.querySelectorAll(".cal-item");
  const calculatorSimple = document.getElementById("calculator-simple"); // блок с простым калькулятором
  const calculatorProfessional = document.getElementById(
    "calculator-professional"
  ); // блок с профессиональным калькулятором
  const fuelCoefficients = {
    petrol: { below2000: 0.031, above2000: 0.186 }, // бензин проценты
    diesel: { below2000: 0.031, above2000: 0.186 }, // дизель проценты
    petrolElectr: { below2000: 0.0155, above2000: 0.093 }, // бензин/електро проценты
    dieselElectr: { below2000: 0.0155, above2000: 0.093 }, // дизель/електро проценты
    phev: { below2000: 0, above2000: 0.093 }, // гибрид водород
    electric: { below2000: 0, above2000: 0 }, // Пример для электродвигателя
  };
  const PRECENT_CUSTOMS = 0.1; // Сейчас это 10 процентов PRECENT_CUSTOMS
  const VAT_PERCENT_POLAND = 0.23; // Ставка НДС в польше VAT_PERCENT_POLAND
  const VAT_PERCENT_GERMANY = 0.19; // ставка ндс в германии VAT_PERCENT_GERMANY
  const priceSimple = document.querySelectorAll("[data-price-input]"); // Инпуты простого калькулятора и проф получаю по дата атрибуту
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
  let exciseDutyValue = 0; // Глобальная переменная
  const fuelLabels = document.querySelectorAll(".fuel"); // массив радио инпутов с видом топлива
  const engineCapacitySelect = document.querySelectorAll(
    "[data-engine-capacity]"
  ); // селектор объема двигателя
  let selectedFuel = null; // Выбранное топливо
  let engineCapacity = "below2000"; // Выбранный объем двигателя
  let precentVat = document.getElementById("precent-vat"); // получил в переменную <span>VAT (<span id="precent-vat">23%</span>)</span>
  let auctionCommission = document.getElementById("auction-commission"); // инпут с комисией аукциона профессиональный калькулятор
  let startAuctionCommission = 0; // начальное значение комисии аукциона
  const shippingCost = document.getElementById("shipping-cost"); // инпут страны доставки авто вводит пользователь
  let startShippingCost = 0; // начальное значение стоимости доставки равное 0
  const deliveryPercentage = document.getElementById("delivery-percentage"); // инпут Оплата VAT в Польше
  let selectPrecentVat = deliveryPercentage.value; // Значение по умолчанию

  // код переключает активную кнопку блока "вариант калькулятора" с УПРАЩЕННОГО на ПРОФЕСИОНАЛЬНЫЙ
  // добавляет активний класс _activ-1 к активной кнопке етот класс подключается в файле customs-clearance-calculator.css
  // также этот код меняет видимость блока калькулятора с упрощенного на професиональный класс hidden подвязан к
  // классу _activ-1
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
        simple = true;
        prof = false;
        dataUpdate(); // устанавливаю 0 в поля таможенный збор, ват, акцизный налог и итого
        updateValueInput(); // обновляем инпуты
        updateSelectVat(); // обновляем селекты выбора Vat
        sumaAvto = 0; // ставлю 0 поле ввода цены авто
      } else if (index === 1) {
        // Если нажата вторая кнопка
        calculatorProfessional.classList.remove("hidden");
        calculatorSimple.classList.add("hidden");
        simple = false;
        prof = true;
        dataUpdate(); // устанавливаю 0 в поля таможенный збор, ват, акцизный налог и итого
        updateValueInput(); // обновляем инпуты
        updateSelectVat(); // обновляем селекты выбора Vat
        sumaAvto = 0; // ставлю 0 поле ввода цены авто
      }
    });
  });

  //
  //!-этот код выбирает одно из активных состояний: бензин, дизель, електро и тд + калькулятор растаможки
  // при клике добавляется активный класс fuel-primery (так же класс fuel) который подключается
  //  в файле customs-clearance-calculator.css
  // так же в коде штмл есть соответсвтующий прозрачный инпут с типом радио. Логика такая - при активации
  // одного из параметра можно взять состояние соответсвующего инпута.
  // код на каклькулятор растаможки
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
        //console.log(input.checked);
      } else {
        // Убираем активный стиль с предыдущего выбора
        fuelLabels.forEach((lbl) => lbl.classList.remove("fuel-primery"));

        // Обновляем активное топливо
        input.checked = true;
        label.classList.add("fuel-primery");
        selectedFuel = input.value;
        //console.log(input.checked);
      }

      updateCoefficient(); // Обновляем значение коэффициента
    });
  });

  // todo Обработка ввода цены авто на инпуте
  function handleInputData(e) {
    sumaAvto = Number(e.target.value); // Получаем цену авто из инпута -15000
    if (isNaN(sumaAvto)) {
      return;
    } else {
      //console.log("Цена авто:", sumaAvto);
      updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
      updateCoefficient();
      getAsTotal();
    }
  }
  // Вешаем обработчик события ввода на поле цены авто работает на каждый инпут
  priceSimple.forEach((input) => {
    input.addEventListener("input", handleInputData);
  });

  // todo получаю комисию аукциона в инпуте - 400$
  function handleInputAuctionCommission(e) {
    startAuctionCommission = Number(e.target.value);
    if (isNaN(startAuctionCommission)) {
      return;
    }
    updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
    //console.log("получаю комисию аукциона в инпуте--", startAuctionCommission);
  }

  auctionCommission.addEventListener("input", handleInputAuctionCommission);

  // todo получаю стоимость доставки с инпута на странице ПРОФЕССИОНАЛЬНЫЙ КАЛКУЛЯТОР
  function handleInputShippingCost(e) {
    startShippingCost = Number(e.target.value);
    if (isNaN(startShippingCost)) {
      return;
    }
    updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
    //console.log("страна доставки -- ", startShippingCost);
  }
  shippingCost.addEventListener("input", handleInputShippingCost);

  // расчет ТАМОЖЕННАЯ ПОШЛИНА
  function updateCustomsDuty() {
    if (isNaN(sumaAvto) || sumaAvto === 0) {
      customsDuty = 0; // Если сумма авто пустая или некорректная, устанавливаем 0
    } else if (simple === true) {
      customsDuty = Math.round(
        (sumaAvto + countryOfDelivery) * PRECENT_CUSTOMS
      );
    } else if (prof === true) {
      customsDuty = Math.round(
        (sumaAvto + startShippingCost + startAuctionCommission) *
          PRECENT_CUSTOMS
      ); //! тут меняется код для калькуляторов
    }
    //console.log("Таможенная пошлина:", customsDuty);
    customsDutyValue.textContent = `${customsDuty} $`; // Обновляем текст

    // Пересчитываем VAT при обновлении таможенной пошлины
    updateVatValue();
  }

  //! получение значения из селекта Оплата VAT в Польше или Германии по умолчанию 0,23 Польша
  // Слушатель события для обновления selectPrecentVat
  deliveryPercentage.addEventListener("change", () => {
    selectPrecentVat = Number(deliveryPercentage.value); // Обновляем значение selectPrecentVat
    updateVatValue();
    precentVat.textContent = `${selectPrecentVat * 100}%`;
    //console.log("Новый процент VAT: ", selectPrecentVat); // Выводим новый процент
  });

  // функция для обновления в первоначальное значение селекта выбора VAT польша
  function updateSelectVat() {
    deliveryPercentage.value = "0.23"; // Устанавливаем значение по умолчанию
    selectPrecentVat = Number(deliveryPercentage.value); // Обновляем переменную selectPrecentVat
    updateVatValue(); // Пересчитываем VAT, если это требуется
    precentVat.textContent = `${selectPrecentVat * 100}%`; // Обновляем отображение процента
    //console.log("Селект установлен в изначальное значение: ", selectPrecentVat);
    dataUpdate();
  }

  // VAT - расчитываем
  function updateVatValue() {
    // Получаем актуальное значение selectPrecentVat прямо перед расчетом
    selectPrecentVat = Number(deliveryPercentage.value); // Обновляем значение на момент вызова
    //console.log("смена процента ват при клике - ", selectPrecentVat);

    if (isNaN(sumaAvto) || sumaAvto === 0) {
      vatValue = 0; // Если сумма авто пустая или некорректная, устанавливаем 0
    } else if (simple === true) {
      vatValue = Math.round(
        (sumaAvto + countryOfDelivery + customsDuty) * VAT_PERCENT_POLAND
      ); // Вычисляем VAT
    } else if (prof === true) {
      if (selectPrecentVat == 0.23) {
        vatValue = Math.round(
          (sumaAvto +
            startShippingCost +
            startAuctionCommission +
            customsDuty) *
            VAT_PERCENT_POLAND
        );
      } else {
        vatValue = Math.round(
          (sumaAvto +
            startShippingCost +
            startAuctionCommission +
            customsDuty) *
            VAT_PERCENT_GERMANY
        );
      }
    }
    //console.log("VAT:", vatValue);
    vat.textContent = `${vatValue} $`; // Обновляем текст
    getAsTotal();
  }

  //! общий ИТОГО акциз -- ЭТО ЗНАЧЕНИЕ ДОЛЖНО ПЕРЕСЧИТЫВАТЬСЯ ПРИ ИЗМЕНЕНИИ ВАЛЮТЫ
  function getAsTotal() {
    let totalAsValue = customsDuty + vatValue + exciseDutyValue;
    totalAs.textContent = `${totalAsValue} $`;
    //console.log("общий акциз - ", totalAsValue);
  }

  //! Обработка изменения страны доставки

  countryOfDispatchSimple.addEventListener("change", () => {
    const selectedValue = countryOfDispatchSimple.value; // Получаем текущее выбранное значение
    countryOfDelivery = Number(selectedValue); // Обновляем значение страны доставки
    console.log("значение страны доставки " + countryOfDelivery);

    updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
    getAsTotal(); // пересчет акциза
    updateCoefficient();
  });

  // Вычисляем значения ТАМОЖЕННОЙ ПОШЛИНЫ по умолчанию при загрузке страницы
  updateCustomsDuty();

  //! Функция для обновления АКЦИЗНОГО НАЛОГА значения в зависимости от выбора топлива и объема двигателя и страны доставки
  function updateCoefficient() {
    if (selectedFuel) {
      const coefficient = fuelCoefficients[selectedFuel][engineCapacity];
      //console.log(`Выбранное топливо: ${selectedFuel}`);
      //console.log(`Объем двигателя: ${engineCapacity}`);
      //console.log("коеффициент ", coefficient);
      // Здесь можно использовать coefficient для расчета
      //exciseDutyValue = Math.round(coefficient * sumaAvto);
      if (simple === true) {
        exciseDutyValue = Math.round(
          coefficient * (sumaAvto + countryOfDelivery)
        );
        //console.log("коефициент топлива - ", coefficient);
        //console.log("акцизный налог - ", exciseDutyValue);
      } else if (prof === true) {
        exciseDutyValue = Math.round(
          coefficient * (sumaAvto + startAuctionCommission + startShippingCost)
        );
        //console.log("коефициент топлива - ", coefficient);
      }

      exciseDuty.textContent = `${exciseDutyValue}  $`;
    }
    getAsTotal(); // Пересчитываем итоговую сумму
  }

  // функция которая обновляет обработчик клика по топливу
  function resetFuelSelection() {
    fuelLabels.forEach((label) => {
      const input = label.querySelector("input");

      // Сбрасываем состояние каждого радио-инпута
      input.checked = false;

      // Убираем активный стиль
      label.classList.remove("fuel-primery");
    });

    // Сбрасываем переменную выбора
    selectedFuel = null;

    //console.log("Состояние сброшено к значению по умолчанию");
  }

  // Обработчик изменения для каждого из селектов выбора объема топлива до 2000 и выше 2000 см куб
  // менет например 0,31 на 0,18 при активном бензине или другом виде топлива
  engineCapacitySelect.forEach((el) => {
    el.addEventListener("change", () => {
      // Обновляем значение engineCapacity для текущего элемента
      engineCapacity = el.selectedIndex === 0 ? "below2000" : "above2000";
      updateCoefficient(); // Обновляем значение коэффициента
    });
  });

  // функция обновления значений полей таможенная пошлина, vat, акцизный сбор и итого при переходе с простого на проф каклькулятор
  function dataUpdate() {
    customsDutyValue.textContent = `0 $`; // Сброс таможенной пошлины
    startAuctionCommission = 0; // сброс на ноль комисии аукциона
    startShippingCost = 0; // начальное значение стоимости доставки равное 0
    vat.textContent = `0 $`; // Сброс VAT
    exciseDuty.textContent = `0 $`; // Сброс акцизного налога
    totalAs.textContent = `0 $`; // Сброс итоговой суммы
    resetFuelSelection();
  }

  // функция которая обновляет инпуты стоимость авто, комисия аукциона, стоимость доставки
  function updateValueInput() {
    priceSimple.forEach((el) => {
      el.value = "";
      el.placeholder = "15000$"; //стоимость авто
      //console.log(priceSimple.placeholder);
    });

    auctionCommission.value = "";
    auctionCommission.placeholder = "400$"; // комисия аукциона
    //console.log(auctionCommission.placeholder);

    shippingCost.value = "";
    shippingCost.placeholder = "1250$"; // стоимость доставки
  }
})();
