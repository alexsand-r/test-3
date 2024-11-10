"use strict";
// вибор страны и города доставки
(function () {
  // Получаем блок для отображения городов и селектор стран
  const blockCity = document.getElementById("select-city");
  const countrySelect = document.getElementById("countries");

  // Рендер городов Польши
  function renderPoland() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1300">Warsaw</option>
        <option id="city-2" value="$1300">Gdańsk</option>
        
      </select>`;
  }

  // Рендер городов albania
  function renderAlbania() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1400">Tirana</option>
      </select>`;
  }

  // Рендер городов Andorra
  function renderAndorra() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1500">Andorra la Vella</option>
      </select>`;
  }

  // Рендер городов Armenia
  function renderArmenia() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Yerevan</option>
      </select>`;
  }

  // Рендер городов austria
  function renderAustria() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1400">Vienna</option>
      </select>`;
  }

  // Рендер городов azerbaijan
  function renderAzerbaijan() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1400">Baku</option>
      </select>`;
  }

  // Рендер городов Belgium
  function renderBelgium() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1250">Antwerp</option>
        <option id="city-2" selected value="$1250">Brussels</option>
      </select>`;
  }

  // Рендер городов Bulgaria
  function renderBulgaria() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Sofia</option>
        <option id="city-2" selected value="$1350">Varna</option>
      </select>`;
  }

  // Рендер городов czech republic
  function renderCzechRepublic() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Prague</option>
      </select>`;
  }

  // Рендер городов Denmark
  function renderDenmark() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Copenhagen</option>
      </select>`;
  }

  // Рендер городов Estonia
  function renderEstonia() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1300">Tallinn</option>
      </select>`;
  }

  // Рендер городов Finland
  function renderFinland() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Helsinki</option>
      </select>`;
  }

  // Рендер городов Франции
  function renderFrance() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1300">Paris</option>
        <option id="city-2" value="$1300">Marseille</option>
        <option id="city-3" value="$1300">Lyon</option>
      </select>`;
  }
  // Рендер городов Georgia
  function renderGeorgia() {
    blockCity.innerHTML = `
      <select
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1400">Batumi</option>
        <option id="city-2" value="$1400">Tbilisi</option>
      
      </select>`;
  }

  // Рендер городов Германии
  function renderGermany() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1250">Berlin</option>
        <option id="city-2" value="$1250">Hamburg</option>
        <option id="city-3" value="$1250">Munich</option>
      </select>`;
  }
  // Рендер городов Greece
  function renderGreece() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Athens</option>
        <option id="city-2" value="$1350">Piraeus</option>
     
      </select>`;
  }
  // Рендер городов Hungary
  function renderHungary() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Budapest</option>
      </select>`;
  }
  // Рендер городов Iceland
  function renderIceland() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Reykjavik</option>
         <option id="city-2" value="$1450">Dublin</option>
      </select>`;
  }
  // Рендер городов Italy
  function renderItaly() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Genoa</option>
         <option id="city-2" value="$1350">Milan</option>
         <option id="city-3" value="$1350">Rome</option>
      </select>`;
  }
  // Рендер городов Kazakhstan
  function renderKazakhstan() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Aktau</option>
      </select>`;
  }
  // Рендер городов Kosovo
  function renderKosovo() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Pristina</option>
      </select>`;
  }
  // Рендер городов Latvia
  function renderLatvia() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1300">Riga</option>
      </select>`;
  }
  // Рендер городов Liechtenstein
  function renderLiechtenstein() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Vaduz</option>
      </select>`;
  }
  // Рендер городов Lithuania
  function renderLithuania() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1300">Klaipeda</option>
      </select>`;
  }
  // Рендер городов Luxembourg
  function renderLuxembourg() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1400">Luxembourg</option>
      </select>`;
  }
  // Рендер городов Moldova
  function renderMoldova() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Chisinau</option>
      </select>`;
  }
  // Рендер городов Monaco
  function renderMonaco() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1500">Monte-Carlo</option>
      </select>`;
  }
  // Рендер городов Montenegro
  function renderMontenegro() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Podgorica</option>
      </select>`;
  }
  // Рендер городов Netherlands
  function renderNetherlands() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1250">Amsterdam</option>
           <option id="city-2" value="$1250">Rotterdam</option>
      </select>`;
  }
  // Рендер городов North Macedonia
  function renderNorthMacedonia() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Skopje</option>

      </select>`;
  }
  // Рендер городов Norway
  function renderNorway() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Oslo</option>

      </select>`;
  }
  // Рендер городов Portugal
  function renderPortugal() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Lisbon</option>

      </select>`;
  }
  // Рендер городов Romania
  function renderRomania() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Bucharest</option>
        <option id="city-2" value="$1350">Constanta</option>
      </select>`;
  }
  // Рендер городов San Marino
  function renderSanMarino() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1500">San Marino</option>
       
      </select>`;
  }
  // Рендер городов Serbia
  function renderSerbia() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1400">Belgrade</option>
       
      </select>`;
  }
  // Рендер городов Slovenia
  function renderSlovenia() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Koper</option>
        <option id="city-2" value="$1350">Ljubljana</option>
       
      </select>`;
  }
  // Рендер городов Spain
  function renderSpain() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1300">Barcelona</option>
        <option id="city-2" value="$1300">Madrid</option>
        <option id="city-3" value="$1300">Valencia</option>
      </select>`;
  }
  // Рендер городов Sweden
  function renderSweden() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1300">Gothenburg</option>

      </select>`;
  }
  // Рендер городов Switzerland
  function renderSwitzerland() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Basel</option>
        <option id="city-2" value="$1350">Bern</option>
        <option id="city-3" value="$1350">Geneva</option>
        <option id="city-4" value="$1350">Zurich</option>

      </select>`;
  }
  // Рендер городов Switzerland
  function renderSwitzerland() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Dushanbe</option>
      </select>`;
  }
  // Рендер городов Turkey
  function renderTurkey() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1350">Ankara</option>
        <option id="city-2" value="$1350">Istanbul</option>
        <option id="city-3" value="$1350">Izmir</option>
      </select>`;
  }
  // Рендер городов UK
  function renderUk() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1250">Felixstowe</option>
        <option id="city-2" value="$1250">London</option>

      </select>`;
  }
  // Рендер городов Ukraine
  function renderUkraine() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1450">Kyiv</option>
        <option id="city-2" value="$1450">Odessa</option>

      </select>`;
  }
  // Рендер городов USA
  function renderUsa() {
    blockCity.innerHTML = `
      <select 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm font-normal rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full">
        <option id="city-1" selected value="$1200">Houston</option>
        <option id="city-2" value="$1200">Los Angeles</option>
        <option id="city-3" value="$1200">Miami</option>
        <option id="city-4" value="$1200">New York</option>

      </select>`;
  }

  // Обработчик события для выбора страны
  countrySelect.addEventListener("change", () => {
    const selectedCountry = countrySelect.value;

    if (selectedCountry === "poland") {
      renderPoland();
    } else if (selectedCountry === "albania") {
      renderAlbania();
    } else if (selectedCountry === "andorra") {
      renderAndorra();
    } else if (selectedCountry === "armenia") {
      renderArmenia();
    } else if (selectedCountry === "austria") {
      renderAustria();
    } else if (selectedCountry === "azerbaijan") {
      renderAzerbaijan();
    } else if (selectedCountry === "belgium") {
      renderBelgium();
    } else if (selectedCountry === "bulgaria") {
      renderBulgaria();
    } else if (selectedCountry === "czech-republic") {
      renderCzechRepublic();
    } else if (selectedCountry === "denmark") {
      renderDenmark();
    } else if (selectedCountry === "estonia") {
      renderEstonia();
    } else if (selectedCountry === "finland") {
      renderFinland();
    } else if (selectedCountry === "france") {
      renderFrance();
    } else if (selectedCountry === "georgia") {
      renderGeorgia();
    } else if (selectedCountry === "germany") {
      renderGermany();
    } else if (selectedCountry === "greece") {
      renderGreece();
    } else if (selectedCountry === "hungary") {
      renderHungary();
    } else if (selectedCountry === "iceland") {
      renderIceland();
    } else if (selectedCountry === "italy") {
      renderItaly();
    } else if (selectedCountry === "kazakhstan") {
      renderKazakhstan();
    } else if (selectedCountry === "kosovo") {
      renderKosovo();
    } else if (selectedCountry === "latvia") {
      renderLatvia();
    } else if (selectedCountry === "liechtenstein") {
      renderLiechtenstein();
    } else if (selectedCountry === "lithuania") {
      renderLithuania();
    } else if (selectedCountry === "luxembourg") {
      renderLuxembourg();
    } else if (selectedCountry === "moldova") {
      renderMoldova();
    } else if (selectedCountry === "monaco") {
      renderMonaco();
    } else if (selectedCountry === "montenegro") {
      renderMontenegro();
    } else if (selectedCountry === "netherlands") {
      renderNetherlands();
    } else if (selectedCountry === "north-macedonia") {
      renderNorthMacedonia();
    } else if (selectedCountry === "norway") {
      renderNorway();
    } else if (selectedCountry === "portugal") {
      renderPortugal();
    } else if (selectedCountry === "romania") {
      renderRomania();
    } else if (selectedCountry === "san-marino") {
      renderSanMarino();
    } else if (selectedCountry === "serbia") {
      renderSerbia();
    } else if (selectedCountry === "slovenia") {
      renderSlovenia();
    } else if (selectedCountry === "spain") {
      renderSpain();
    } else if (selectedCountry === "sweden") {
      renderSweden();
    } else if (selectedCountry === "switzerland") {
      renderSwitzerland();
    } else if (selectedCountry === "tajikistan") {
      renderSwitzerland();
    } else if (selectedCountry === "turkey") {
      renderTurkey();
    } else if (selectedCountry === "uk") {
      renderUk();
    } else if (selectedCountry === "ukraine") {
      renderUkraine();
    } else if (selectedCountry === "usa") {
      renderUsa();
    }
  });

  // Показать города Германии при загрузке страницы, если страна по умолчанию — Германия
  document.addEventListener("DOMContentLoaded", () => {
    const selectedCountry = countrySelect.value;
    if (selectedCountry === "poland") {
      renderPoland();
    }
  });
})();
