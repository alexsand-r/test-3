"use strict";
//=======================================================================================================
// код на калькулятор растаможки (переключает с простого на профессиональный)
// на строке 258 функция которая расчитывает итоговую сумму которую нужно пропускать через кон-
// вертер валют  //! общий ИТОГО акциз -- ЭТО ЗНАЧЕНИЕ ДОЛЖНО ПЕРЕСЧИТЫВАТЬСЯ ПРИ ИЗМЕНЕНИИ ВАЛЮТЫ
(function () {
  const tabuBtnVal = document.querySelectorAll(".tabu-body__item");
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
  let exciseDutyValue = 0; // Глобальная переменная акзизного налога
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
  let totalAsValue = null;
  let currentCurrencyRate = 1; // курс валюты доллар по умолчанию
  let symbolValut; // символ валюты
  let currencyId; // айди валюты

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
        // Если нажата кнопка простой
        calculatorSimple.classList.remove("hidden");
        calculatorProfessional.classList.add("hidden");
        simple = true;
        prof = false;
        dataUpdate(); // устанавливаю 0 в поля таможенный збор, ват, акцизный налог и итого
        updateValueInput(); // обновляем инпуты
        updateSelectVat(); // обновляем селекты выбора Vat
        resetButtons();
        initializeCurrency();
      } else if (index === 1) {
        // Если нажата  кнопка Профессиональный
        calculatorProfessional.classList.remove("hidden");
        calculatorSimple.classList.add("hidden");
        simple = false;
        prof = true;
        dataUpdate(); // устанавливаю 0 в поля таможенный збор, ват, акцизный налог и итого
        updateValueInput(); // обновляем инпуты
        updateSelectVat(); // обновляем селекты выбора Vat
        resetButtons();
        initializeCurrency();
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
  // Инициализация первого элемента
  // этот код делает активным бензин по умолчанию
  function initializeDefaultFuel() {
    const firstLabel = fuelLabels[0]; // Первый элемент из fuelLabels
    if (firstLabel) {
      const input = firstLabel.querySelector("input");
      if (input) {
        input.checked = true; // Установить активным
        firstLabel.classList.add("fuel-primery"); // Добавить стиль
        selectedFuel = input.value; // Обновить выбранное топливо
      }
    }
    updateCoefficient(); // Обновляем значение коэффициента
  }
  initializeDefaultFuel();
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

  // todo Обработка ввода цены авто на инпуте
  function handleInputData(e) {
    sumaAvto = Number(e.target.value); // Получаем цену авто из инпута -15000
    if (isNaN(sumaAvto)) {
      return;
    } else {
      updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
      updateCoefficient();
      getAsTotal();
      recalculate(); // конвертация валюты
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
    recalculate(); // конвертация валюты
    updateCoefficient();
  }

  auctionCommission.addEventListener("input", handleInputAuctionCommission);

  // todo получаю стоимость доставки с инпута на странице ПРОФЕССИОНАЛЬНЫЙ КАЛКУЛЯТОР (1250$)
  function handleInputShippingCost(e) {
    startShippingCost = Number(e.target.value);
    if (isNaN(startShippingCost)) {
      return;
    }
    updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
    recalculate(); // конвертация валюты
    updateCoefficient();
  }
  shippingCost.addEventListener("input", handleInputShippingCost);

  //------------------------------- расчет ТАМОЖЕННАЯ ПОШЛИНА -----
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
      );
    }
    customsDutyValue.textContent = `${customsDuty} $`;
    updateVatValue(); // Пересчитываем VAT при обновлении таможенной пошлины
  }

  // ----------------------------  VAT - расчитываем -----------------------------------------
  function updateVatValue() {
    // Получаем актуальное значение selectPrecentVat прямо перед расчетом
    selectPrecentVat = Number(deliveryPercentage.value); // Обновляем значение на момент вызова
    if (isNaN(sumaAvto) || sumaAvto === 0) {
      vatValue = 0; // Если сумма авто пустая или некорректная, устанавливаем 0
    } else if (simple === true) {
      vatValue = Math.round(
        (sumaAvto + countryOfDelivery + customsDuty) * VAT_PERCENT_POLAND
      );
    } else if (prof === true) {
      if (selectPrecentVat == VAT_PERCENT_POLAND) {
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
    vat.textContent = `${vatValue} $`;
    getAsTotal();
  }

  //--------- Функция для обновления АКЦИЗНОГО НАЛОГА значения в зависимости от выбора топлива и объема двигателя и страны доставки
  function updateCoefficient() {
    if (selectedFuel) {
      const coefficient = fuelCoefficients[selectedFuel][engineCapacity];
      if (simple === true) {
        exciseDutyValue = Math.round(
          coefficient * (sumaAvto + countryOfDelivery) //0.031 * (цена авто + страна доставки)-40 по умолчанию
        );
      } else if (prof === true) {
        exciseDutyValue = Math.round(
          coefficient * (sumaAvto + startAuctionCommission + startShippingCost) //0.031 * (цена авто + комисия аукциона + цена доставки)
        );
      }
      exciseDuty.textContent = `${exciseDutyValue}  $`;
    }
    getAsTotal(); // Пересчитываем итоговую сумму
    recalculate(); // конвертация валюты
  }

  //! получение значения из селекта Оплата VAT в Польше или Германии по умолчанию 0,23 Польша
  // Слушатель события для обновления selectPrecentVat
  deliveryPercentage.addEventListener("change", () => {
    selectPrecentVat = Number(deliveryPercentage.value); // Обновляем значение selectPrecentVat
    updateVatValue();
    precentVat.textContent = `${selectPrecentVat * 100}%`;
    recalculate(); // конвертация валюты
  });

  // функция для обновления в первоначальное значение селекта выбора VAT польша
  function updateSelectVat() {
    deliveryPercentage.value = VAT_PERCENT_POLAND; // Устанавливаем значение по умолчанию
    selectPrecentVat = Number(deliveryPercentage.value); // Обновляем переменную selectPrecentVat
    updateVatValue(); // Пересчитываем VAT, если это требуется
    precentVat.textContent = `${selectPrecentVat * 100}%`; // Обновляем отображение процента
    dataUpdate();
  }

  //! Обработка изменения страны доставки
  countryOfDispatchSimple.addEventListener("change", () => {
    const selectedValue = countryOfDispatchSimple.value; // Получаем текущее выбранное значение
    countryOfDelivery = Number(selectedValue); // Обновляем значение страны доставки
    updateCustomsDuty(); // Обновляем таможенную пошлину и VAT
    getAsTotal(); // пересчет акциза
    updateCoefficient();
  });

  // Вычисляем значения ТАМОЖЕННОЙ ПОШЛИНЫ по умолчанию при загрузке страницы
  updateCustomsDuty();

  // функция которая обновляет обработчик клика по топливу
  function resetFuelSelection() {
    fuelLabels.forEach((label) => {
      const input = label.querySelector("input");
      input.checked = false; // Сбрасываем состояние каждого радио-инпута
      label.classList.remove("fuel-primery"); // Убираем активный стиль
    });
    selectedFuel = null; // Сбрасываем переменную выбора
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
    // таможенная пошлина
    customsDutyValue.textContent = `0 $`; // Сброс таможенной пошлины строки
    // VAT
    vat.textContent = `0 $`; // Сброс VAT строки
    vatValue = 0; // сброс VAT значения в 0
    // Акцизный налог
    exciseDuty.textContent = `0 $99999`; // Сброс акцизного налога строки
    // Итого
    startAuctionCommission = 0; // сброс на ноль комисии аукциона
    startShippingCost = 0; // начальное значение стоимости доставки равное 0
    customsDuty = 0;
    totalAsValue = 0;
    resetFuelSelection();
    initializeDefaultFuel();
    sumaAvto = 0;
  }

  // функция которая обновляет инпуты стоимость авто, комисия аукциона, стоимость доставки
  function updateValueInput() {
    priceSimple.forEach((el) => {
      el.value = "";
      el.placeholder = "15000$"; //стоимость авто
    });
    auctionCommission.value = "";
    auctionCommission.placeholder = "400$"; // комисия аукциона
    shippingCost.value = "";
    shippingCost.placeholder = "1250$"; // стоимость доставки
  }

  //! общий ИТОГО акциз -- ЭТО ЗНАЧЕНИЕ ДОЛЖНО ПЕРЕСЧИТЫВАТЬСЯ ПРИ ИЗМЕНЕНИИ ВАЛЮТЫ
  function getAsTotal() {
    totalAsValue = customsDuty + vatValue + exciseDutyValue; // Рассчитываем итоговую сумму
    totalAs.textContent = `${totalAsValue} $`; // Отображаем сумму в долларах
    return totalAsValue;
  }

  // Логика для обработки смены валюты
  const btns = document.querySelectorAll(".tabu-body__item");
  btns.forEach((el) => {
    el.addEventListener("click", function () {
      // Получаем курс валюты
      const rate = parseFloat(el.getAttribute("data-currency"));
      if (!isNaN(rate)) {
        currentCurrencyRate = rate; // Устанавливаем выбранный курс
      }
      // Получаем id выбранной валюты
      currencyId = el.querySelector("input").id; // Изменено: находим input внутри родителя
      // Обновляем символ валюты
      symbolValut = getCurrencySymbol(currencyId);
      // Пересчитываем итоговую сумму с новым курсом
      recalculate();
    });
  });

  // Функция для получения символа текущей валюты
  function getCurrencySymbol() {
    switch (currencyId) {
      case "usd":
        return "$";
      case "pl":
        return "zł";
      case "eur":
        return "€";
      default:
        return "";
    }
  }

  // Функция для пересчета валюты
  function recalculate() {
    const usdValue = totalAsValue; // Получаем суму ИТОГО в долларах
    const usdCustomsDuty = customsDuty; // получаем таможенную пошлину в долларах
    const usdVat = vatValue; // получаю VAT в долларах
    const usdExciseDuty = exciseDutyValue; //получаем акцизный налог в долларах

    // нужно получить значение каждого поля как и числом ИТОГО и дальше через иф
    if (!isNaN(usdValue)) {
      // Конвертируем в текущую валюту
      const convertedValueTotal = (usdValue * currentCurrencyRate).toFixed(0);
      // Обновляем значение на экране с нужным символом валюты - ИТОГО
      totalAs.textContent = `${convertedValueTotal} ${symbolValut}`;
    }
    // обновляем значение на с нужным символом - ТАМОЖЕННАЯ ПОШЛИНА
    if (!isNaN(usdCustomsDuty)) {
      const convertedValueCustomsDuty = (
        usdCustomsDuty * currentCurrencyRate
      ).toFixed(0);
      customsDutyValue.textContent = `${convertedValueCustomsDuty} ${symbolValut}`;
    }
    // обновляем значение на с нужным символом - VAT
    if (!isNaN(usdVat)) {
      const convertedValueVat = (usdVat * currentCurrencyRate).toFixed(0);
      vat.textContent = `${convertedValueVat} ${symbolValut}`;
    }
    // обновляем значение с нужным символом - АКЦИЗНЫЙ НАЛОГ
    if (!isNaN(usdExciseDuty)) {
      const convertedExciseDuty = (usdExciseDuty * currentCurrencyRate).toFixed(
        0
      );
      exciseDuty.textContent = `${convertedExciseDuty}  ${symbolValut}`;
    }
  }

  // переключает активный класс на кнопках дол зл евро
  tabuBtnVal.forEach((item) => {
    item.addEventListener("click", function () {
      tabuBtnVal.forEach(function (element) {
        element.classList.remove("_activ");
      });
      item.classList.add("_activ");
    });
  });

  // обновляю актиную кнопку валюты на поумолчанию доллар
  function resetButtons() {
    tabuBtnVal.forEach(function (element) {
      element.classList.remove("_activ");
    });
    // Найдем кнопку с id="usd" и сделаем её активной
    const defaultButton = document.getElementById("usd");
    if (defaultButton) {
      defaultButton.closest(".tabu-body__item").classList.add("_activ");
    }
  }

  // эта фукция устаналивает валюты по умолчанию (она решила вопрос когда при первом выборе типа топлива(двигателя)
  // убирался андефайн)
  function initializeCurrency() {
    currencyId = "usd"; // Устанавливаем валюту по умолчанию
    symbolValut = getCurrencySymbol(currencyId); // Обновляем символ валюты
    currentCurrencyRate = 1; // Устанавливаем курс валюты по умолчанию
    resetButtons(); // Обновляем активную кнопку
    recalculate(); // Пересчет всех значений с валютой по умолчанию
  }

  // Вызов функции при загрузке страницы
  initializeCurrency();
})();
