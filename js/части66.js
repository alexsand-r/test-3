//* расчет стоимости доставки
"use strict";

(function () {
  // Получаем блок для отображения городов и селектор стран
  const blockCity = document.getElementById("select-city");
  const countrySelect = document.getElementById("countries");

  // Рендер городов Польши
  function renderPoland() {
    blockCity.innerHTML = `
      <select id="cities-poland"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1000">Warsaw</option>
        <option id="city-2" value="$2000">Krakow</option>
        <option id="city-3" value="$3000">Lodz</option>
      </select>`;
  }

  // Рендер городов Германии
  function renderGermany() {
    blockCity.innerHTML = `
      <select id="cities-germany"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1000">Berlin</option>
        <option id="city-2" value="$2000">Hamburg</option>
        <option id="city-3" value="$3000">Munich</option>
      </select>`;
  }

  // Рендер городов Франции
  function renderFrance() {
    blockCity.innerHTML = `
      <select id="cities-france"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1000">Paris</option>
        <option id="city-2" value="$2000">Marseille</option>
        <option id="city-3" value="$3000">Lyon</option>
      </select>`;
  }

  // Обработчик события для выбора страны
  countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;

    if (selectedCountry === "germany") {
      renderGermany();
      console.log("Germany selected");
    } else if (selectedCountry === "poland") {
      renderPoland();
      console.log("Poland selected");
    } else if (selectedCountry === "france") {
      renderFrance();
      console.log("France selected");
    }
  });

  // Показать города Германии при загрузке страницы, если страна по умолчанию — Германия
  document.addEventListener("DOMContentLoaded", () => {
    const selectedCountry = countrySelect.value;
    if (selectedCountry === "germany") {
      renderGermany();
    }
  });
})();
