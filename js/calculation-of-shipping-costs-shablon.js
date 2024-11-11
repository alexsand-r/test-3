"use strict";

// Получаем блок для отображения городов и селектор стран
const blockCity = document.getElementById("select-city");
const countrySelect = document.getElementById("countries");
// функция, которая обновляет стоимость доставки
function getValueSelectCity() {
  const selectElement = document.getElementById("city-select"); // получаем выбранный селект
  const selectedValue = selectElement.value; // получаем значение выбранного города
  const numericValue = parseFloat(selectedValue); // преобразуем в число
  let deliveryPrice = document.getElementById("delivery-price"); // элемент, где отображается стоимость доставки
  deliveryPrice.textContent = numericValue; // обновляем стоимость доставки
  console.log("Что это: " + numericValue); // выводим в консоль
}

// Обработчик события для изменения выбора страны
countrySelect.addEventListener("change", () => {
  const selectedCountry = countrySelect.value;
  const cities = countries[selectedCountry];
  if (cities) {
    renderCities(cities);
  }
});

// Отображение городов для страны по умолчанию при загрузке страницы (например, Польша)
document.addEventListener("DOMContentLoaded", () => {
  const defaultCountry = "poland"; // Установить страну по умолчанию
  countrySelect.value = defaultCountry; // Опционально: установить выбранную страну по умолчанию
  renderCities(countries[defaultCountry]);
});

function renderCities(cities) {
  blockCity.innerHTML = `
    <select id="city-select"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
      ${cities
        .map((city) => `<option value="${city.value}">${city.name}</option>`)
        .join("")}
    </select>`;

  // Добавим обработчик для выбора города
  const citySelect = document.getElementById("city-select");
  citySelect.addEventListener("change", getValueSelectCity);

  // Вызовем функцию один раз, чтобы отобразить цену для первого города
  getValueSelectCity();
}

// страны и города
const countries = {
  poland: [
    { name: "Warsaw", value: 1300 },
    { name: "Gdańsk", value: 1300 },
  ],
  albania: [{ name: "Tirana", value: 1400 }],
  andorra: [{ name: "Andorra la Vella", value: 1500 }],
  armenia: [{ name: "Yerevan", value: 1450 }],
  austria: [{ name: "Vienna", value: 1400 }],
  azerbaijan: [{ name: "Baku", value: 1400 }],
  belgium: [
    { name: "Antwerp", value: 1250 },
    { name: "Brussels", value: 1250 },
  ],
  bulgaria: [
    { name: "Sofia", value: 1350 },
    { name: "Varna", value: 1350 },
  ],
  czechRepublic: [{ name: "Prague", value: 1350 }],
  denmark: [{ name: "Copenhagen", value: 1350 }],
  estonia: [{ name: "Tallinn", value: 1300 }],
  finland: [{ name: "Helsinki", value: 1350 }],
  france: [
    { name: "Paris", value: 1300 },
    { name: "Marseille", value: 1300 },
    { name: "Lyon", value: 1300 },
  ],
  georgia: [
    { name: "Batumi", value: 1400 },
    { name: "Tbilisi", value: 1400 },
  ],
  germany: [
    { name: "Berlin", value: 1250 },
    { name: "Hamburg", value: 1250 },
    { name: "Munich", value: 1250 },
  ],
  greece: [
    { name: "Athens", value: 1350 },
    { name: "Piraeus", value: 1350 },
  ],
  hungary: [{ name: "Budapest", value: 1350 }],
  iceland: [
    { name: "Reykjavik", value: 1450 },
    { name: "Dublin", value: 1450 },
  ],
  italy: [
    { name: "Genoa", value: 1350 },
    { name: "Milan", value: 1350 },
    { name: "Rome", value: 1350 },
  ],
  kazakhstan: [{ name: "Aktau", value: 1450 }],
  kosovo: [{ name: "Pristina", value: 1450 }],
  latvia: [{ name: "Riga", value: 1300 }],
  liechtenstein: [{ name: "Vaduz", value: 1450 }],
  lithuania: [{ name: "Klaipeda", value: 1300 }],
  luxembourg: [{ name: "Luxembourg", value: 1400 }],
  moldova: [{ name: "Chisinau", value: 1350 }],
  monaco: [{ id: "city-1", name: "Monte-Carlo", value: 1500 }],
  montenegro: [{ id: "city-1", name: "Podgorica", value: 1450 }],
  netherlands: [
    { id: "city-1", name: "Amsterdam", value: 1250 },
    { id: "city-2", name: "Rotterdam", value: 1250 },
  ],
  northMacedonia: [{ id: "city-1", name: "Skopje", value: 1450 }],
  norway: [{ id: "city-1", name: "Oslo", value: 1350 }],
  portugal: [{ id: "city-1", name: "Lisbon", value: 1350 }],
  romania: [
    { id: "city-1", name: "Bucharest", value: 1350 },
    { id: "city-2", name: "Constanta", value: 1350 },
  ],
  sanMarino: [{ id: "city-1", name: "San Marino", value: 1500 }],
  serbia: [{ id: "city-1", name: "Belgrade", value: 1400 }],
  slovenia: [
    { id: "city-1", name: "Koper", value: 1350 },
    { id: "city-2", name: "Ljubljana", value: 1350 },
  ],
  spain: [
    { id: "city-1", name: "Barcelona", value: 1300 },
    { id: "city-2", name: "Madrid", value: 1300 },
    { id: "city-3", name: "Valencia", value: 1300 },
  ],
  sweden: [{ id: "city-1", name: "Gothenburg", value: 1300 }],
  switzerland: [
    { id: "city-1", name: "Basel", value: 1350 },
    { id: "city-2", name: "Bern", value: 1350 },
    { id: "city-3", name: "Geneva", value: 1350 },
    { id: "city-4", name: "Zurich", value: 1350 },
  ],
  turkey: [
    { id: "city-1", name: "Ankara", value: 1350 },
    { id: "city-2", name: "Istanbul", value: 1350 },
    { id: "city-3", name: "Izmir", value: 1350 },
  ],
  uk: [
    { id: "city-1", name: "Felixstowe", value: 1250 },
    { id: "city-2", name: "London", value: 1250 },
  ],
  ukraine: [
    { id: "city-1", name: "Kyiv", value: 1450 },
    { id: "city-2", name: "Odessa", value: 1450 },
  ],
  usa: [
    { id: "city-1", name: "Houston", value: 1200 },
    { id: "city-2", name: "Los Angeles", value: 1200 },
    { id: "city-3", name: "Miami", value: 1200 },
    { id: "city-4", name: "New York", value: 1200 },
  ],
};

//================================================================

document.addEventListener("DOMContentLoaded", function () {
  const finalCarPrice = document.getElementById("final-car-price");
  const finalPrice = parseInt(finalCarPrice.textContent, 10);

  // Auction Fee: 5% от стоимости Final Car Price
  const auctionFee = document.getElementById("auction-fee");
  auctionFee.textContent = Math.round(finalPrice * 0.05); // Округляем до целого числа
  const numberAuctionFree = Math.round(Number(auctionFee.textContent)); // Округляем

  // Unloading + forwarding
  const unloadingForwarding = document.getElementById("unloading-forwarding");
  const numberUnloadingForwarding = Math.round(
    Number(unloadingForwarding.textContent)
  ); // Округляем

  // Broker service
  const brokerService = document.getElementById("broker-service");
  const numberBrokerService = Math.round(Number(brokerService.textContent)); // Округляем

  // Элемент для стоимости доставки
  const deliveryPriceElement = document.getElementById("delivery-price");
  let numberDeliveryPrice = Math.round(
    Number(deliveryPriceElement.textContent)
  ); // Округляем

  // Элемент для суммы налога
  const taxAmount = document.getElementById("tax-amount");

  // Функция, которая высчитывает 20% от общей суммы всех значений
  function updateTaxAmount() {
    const taxAmountValue =
      ((finalPrice +
        numberAuctionFree +
        numberDeliveryPrice +
        numberUnloadingForwarding +
        numberBrokerService) *
        20) /
      100;

    return Math.round(taxAmountValue); // Округляем сумму налога
  }

  // Функция, которая считает полную цену
  function totalPrice() {
    const totalValue =
      finalPrice +
      numberAuctionFree +
      numberDeliveryPrice +
      numberUnloadingForwarding +
      numberBrokerService +
      updateTaxAmount(); // Добавляем значение налога к общей сумме
    return Math.round(totalValue); // Округляем итоговую стоимость
  }

  // Отображаем начальное значение налога
  taxAmount.textContent = updateTaxAmount();

  // Элемент для отображения итоговой суммы
  const total = document.getElementById("total");
  total.textContent = totalPrice();

  // Создаем MutationObserver для отслеживания изменений в элементе стоимости доставки
  const observer = new MutationObserver(() => {
    // Обновляем значение доставки
    numberDeliveryPrice = Math.round(Number(deliveryPriceElement.textContent)); // Округляем
    console.log("Обновленная стоимость доставки:", numberDeliveryPrice);

    // Пересчитываем и обновляем значение налога
    taxAmount.textContent = updateTaxAmount();

    // Пересчитываем и обновляем итоговую стоимость
    total.textContent = totalPrice();
  });

  // Настраиваем observer для отслеживания изменений в deliveryPriceElement
  observer.observe(deliveryPriceElement, {
    characterData: true, // Следим за изменениями текстового содержимого
    childList: true,
    subtree: true,
  });
});
