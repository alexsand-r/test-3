"use strict";

// Получаем блок для отображения городов и селектор стран
const blockCity = document.getElementById("select-city");
const countrySelect = document.getElementById("countries");
// функция вибирает значение стоимости доставки в выбранного города
function getValueSelectCity() {
  const selectElement = document.getElementById("city-select"); // получаю выбранный селект
  const selectedValue = selectElement.value; // получаю значение селекта
  const numericValue = parseFloat(selectedValue); // Преобразуем в число
  let deliveryPrice = document.getElementById("delivery-price"); // Delivery Price та цифра которую мы указываем в выпадашках, типа city-2 value $2000, вот 2000 это Delivery Price
  deliveryPrice.textContent = numericValue; // Delivery Price та цифра которую мы указываем в выпадашках, типа city-2 value $2000, вот 2000 это Delivery Price
  console.log("что это " + numericValue);
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
  const defaultCountry = "Poland"; // Установить страну по умолчанию
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
  getValueSelectCity();
}

// Data for each country
const countries = {
  Poland: [
    { name: "Warsaw", value: 1300 },
    { name: "Gdańsk", value: 1300 },
  ],
  Albania: [{ name: "Tirana", value: 1400 }],
  Andorra: [{ name: "Andorra la Vella", value: 1500 }],
  Armenia: [{ name: "Yerevan", value: 1450 }],
  Austria: [{ name: "Vienna", value: 1400 }],
  Azerbaijan: [{ name: "Baku", value: 1400 }],
  Belgium: [
    { name: "Antwerp", value: 1250 },
    { name: "Brussels", value: 1250 },
  ],
  Bulgaria: [
    { name: "Sofia", value: 1350 },
    { name: "Varna", value: 1350 },
  ],
  "Czech Republic": [{ name: "Prague", value: 1350 }],
  Denmark: [{ name: "Copenhagen", value: 1350 }],
  Estonia: [{ name: "Tallinn", value: 1300 }],
  Finland: [{ name: "Helsinki", value: 1350 }],
  France: [
    { name: "Paris", value: 1300 },
    { name: "Marseille", value: 1300 },
    { name: "Lyon", value: 1300 },
  ],
  Georgia: [
    { name: "Batumi", value: 1400 },
    { name: "Tbilisi", value: 1400 },
  ],
  Germany: [
    { name: "Berlin", value: 1250 },
    { name: "Hamburg", value: 1250 },
    { name: "Munich", value: 1250 },
  ],
  Greece: [
    { name: "Athens", value: 1350 },
    { name: "Piraeus", value: 1350 },
  ],
  Hungary: [{ name: "Budapest", value: 1350 }],
  Iceland: [
    { name: "Reykjavik", value: 1450 },
    { name: "Dublin", value: 1450 },
  ],
  Italy: [
    { name: "Genoa", value: 1350 },
    { name: "Milan", value: 1350 },
    { name: "Rome", value: 1350 },
  ],
  Kazakhstan: [{ name: "Aktau", value: 1450 }],
  Kosovo: [{ name: "Pristina", value: 1450 }],
  Latvia: [{ name: "Riga", value: 1300 }],
  Liechtenstein: [{ name: "Vaduz", value: 1450 }],
  Lithuania: [{ name: "Klaipeda", value: 1300 }],
  Luxembourg: [{ name: "Luxembourg", value: 1400 }],
  Moldova: [{ name: "Chisinau", value: 1350 }],
  Monaco: [{ id: "city-1", name: "Monte-Carlo", value: 1500 }],
  Montenegro: [{ id: "city-1", name: "Podgorica", value: 1450 }],
  Netherlands: [
    { id: "city-1", name: "Amsterdam", value: 1250 },
    { id: "city-2", name: "Rotterdam", value: 1250 },
  ],
  NorthMacedonia: [{ id: "city-1", name: "Skopje", value: 1450 }],
  Norway: [{ id: "city-1", name: "Oslo", value: 1350 }],
  Portugal: [{ id: "city-1", name: "Lisbon", value: 1350 }],
  Romania: [
    { id: "city-1", name: "Bucharest", value: 1350 },
    { id: "city-2", name: "Constanta", value: 1350 },
  ],
  SanMarino: [{ id: "city-1", name: "San Marino", value: 1500 }],
  Serbia: [{ id: "city-1", name: "Belgrade", value: 1400 }],
  Slovenia: [
    { id: "city-1", name: "Koper", value: 1350 },
    { id: "city-2", name: "Ljubljana", value: 1350 },
  ],
  Spain: [
    { id: "city-1", name: "Barcelona", value: 1300 },
    { id: "city-2", name: "Madrid", value: 1300 },
    { id: "city-3", name: "Valencia", value: 1300 },
  ],
  Sweden: [{ id: "city-1", name: "Gothenburg", value: 1300 }],
  Switzerland: [
    { id: "city-1", name: "Basel", value: 1350 },
    { id: "city-2", name: "Bern", value: 1350 },
    { id: "city-3", name: "Geneva", value: 1350 },
    { id: "city-4", name: "Zurich", value: 1350 },
  ],
  Turkey: [
    { id: "city-1", name: "Ankara", value: 1350 },
    { id: "city-2", name: "Istanbul", value: 1350 },
    { id: "city-3", name: "Izmir", value: 1350 },
  ],
  UK: [
    { id: "city-1", name: "Felixstowe", value: 1250 },
    { id: "city-2", name: "London", value: 1250 },
  ],
  Ukraine: [
    { id: "city-1", name: "Kyiv", value: 1450 },
    { id: "city-2", name: "Odessa", value: 1450 },
  ],
  USA: [
    { id: "city-1", name: "Houston", value: 1200 },
    { id: "city-2", name: "Los Angeles", value: 1200 },
    { id: "city-3", name: "Miami", value: 1200 },
    { id: "city-4", name: "New York", value: 1200 },
  ],
};

// To render cities for a specific country, use the renderCities function like this:
renderCities(countries.Poland);
