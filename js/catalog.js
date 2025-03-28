"use strict";

// --------------- слайдер цена ----------------------------
const range = document.getElementById("range");

if (range) {
  // Получаем ссылки на элементы
  const slider = document.getElementById("slider");
  const minValue = document.getElementById("min-value");
  const maxValue = document.getElementById("max-value");

  // Создаем слайдер с помощью noUiSlider
  noUiSlider.create(slider, {
    start: [1996, 2024], // Значения по умолчанию
    connect: true, // Связываем оба ползунка
    range: {
      min: 1996,
      max: 2023,
    },
    format: {
      to: (value) => Math.round(value), // Форматируем значения до целых чисел
      from: (value) => parseInt(value),
    },
  });

  // Обновляем значения текстовых полей при изменении слайдера
  slider.noUiSlider.on("update", (values, handle) => {
    if (handle === 0) {
      minValue.value = values[handle];
    } else if (handle === 1) {
      maxValue.value = values[handle];
    }
  });

  // Обновляем слайдер при изменении значений в текстовых полях
  minValue.addEventListener("change", () => {
    slider.noUiSlider.set([minValue.value, null]);
  });

  maxValue.addEventListener("change", () => {
    slider.noUiSlider.set([null, maxValue.value]);
  });

  // Функция для проверки текущей ширины экрана и переключения видимости элементов
  function toggleElements() {
    const dropdownMobile = document.getElementById("dropdownMobile");
    const dropdownDesktop = document.getElementById("dropdownDesktop");

    if (dropdownMobile && dropdownDesktop) {
      // Проверяем существование обоих элементов
      if (window.innerWidth < 768) {
        dropdownMobile.classList.remove("hidden");
        dropdownDesktop.classList.add("hidden");
      } else {
        dropdownMobile.classList.add("hidden");
        dropdownDesktop.classList.remove("hidden");
      }
    }
  }
}
//выводит в консоль ползунки и год

slider.noUiSlider.on("end", (values, handle) => {
  if (handle === 0) {
    const startYear = parseInt(values[0]);
  } else if (handle === 1) {
    const endYear = parseInt(values[1]);
  }
});

//------------- на странице каталога смена крестика на крыжик блок Select make & model и весь функционал блока выпадашка и так даллее  ------------------------------------
(function () {
  const blockSearch = document.querySelectorAll(".box-search"); // блок с поисками
  const input = document.querySelectorAll(".inp-search"); // поле инпут
  const buttonBtn = document.querySelector(".button-btn"); // галка крыжик
  const btnCross = document.querySelector(".button-btn-cross"); // крестик закрыть

  // Функция для показа блоков поиска и скрытия кнопок
  function showSearchBlocks() {
    blockSearch.forEach((blockElement) => {
      blockElement.classList.remove("hidden");
    });
    buttonBtn.classList.add("hidden");
    btnCross.classList.remove("hidden");
  }

  // Функция для скрытия блоков поиска и показа кнопок
  function hideSearchBlocks() {
    blockSearch.forEach((blockElement) => {
      blockElement.classList.add("hidden");
    });
    buttonBtn.classList.remove("hidden");
    btnCross.classList.add("hidden");
  }

  // Добавляем обработчик клика к input
  input.forEach((inputElement) => {
    inputElement.addEventListener("click", (e) => {
      e.stopPropagation(); // Отменяем всплытие события
      showSearchBlocks();
    });
  });

  // Добавляем обработчик клика к кнопке закрыть
  btnCross.addEventListener("click", (e) => {
    e.stopPropagation(); // Отменяем всплытие события
    hideSearchBlocks();
    input.forEach((inputElement) => {
      inputElement.value = ""; // Очищаем значение поля ввода
      inputElement.blur(); // Убираем фокус с поля ввода
    });
  });

  // Добавляем обработчик клика к документу для скрытия блоков поиска
  document.addEventListener("click", () => {
    hideSearchBlocks();
    input.forEach((inputElement) => {
      inputElement.value = ""; // Очищаем значение поля ввода
      inputElement.blur(); // Убираем фокус с поля ввода
    });
  });

  // Добавляем обработчик клика к блокам поиска, чтобы предотвратить всплытие события
  blockSearch.forEach((blockElement) => {
    blockElement.addEventListener("click", (e) => {
      e.stopPropagation(); // Отменяем всплытие события
    });
  });
})();

//---------------------------- код на выпадашку внутри make -----------------------------------------------
(function () {
  const inpMakeDiv = document.querySelectorAll(".inp-make-div");
  const inpMake = document.querySelectorAll(".inp-make");
  const checkMake = document.querySelectorAll(".check-make");
  const checkLabel = document.querySelectorAll(".check-label");

  inpMake.forEach((inputElement, index) => {
    inputElement.addEventListener("click", () => {
      // Используйте toggle, чтобы класс "hidden" добавлялся и убирался при каждом клике
      checkMake[index].classList.toggle("hidden");
    });
  });

  inpMakeDiv.forEach((inputElement, index) => {
    inputElement.addEventListener("click", () => {
      // Используйте toggle, чтобы класс "hidden" добавлялся и убирался при каждом клике
      checkMake[index].classList.toggle("hidden");
    });
  });

  checkLabel.forEach((item) => {
    item.addEventListener("click", () => {
      let parent = item.previousElementSibling;
      while (parent && !parent.classList.contains("chec-flag")) {
        parent = parent.previousElementSibling;
      }

      if (parent && parent.classList.contains("chec-flag")) {
        // Вы можете обращаться к prevTot здесь
        console.log("Найден элемент с классом 'chec-flag':", prevTot);
      } else {
        console.log("Элемент с классом 'chec-flag' не найден.");
      }
    });
  });
})();

//========================================================================================================
//--------------------------- код на кнопки all  live  sold ----------------------------------------------

// (function () {
//   const tabuBtn = document.querySelectorAll(".tabu-body__item");

//   tabuBtn.forEach((item) => {
//     item.addEventListener("click", function () {
//       tabuBtn.forEach(function (element) {
//         element.classList.remove("_activ");
//       });
//       item.classList.add("_activ");
//     });
//   });
// })();

//================ код на блок где хлебные крошки иконка домика > Catalog ========
function setupDropdown(dataDropdownSelector, dropdownId) {
  const dataDropdown = document.querySelector(dataDropdownSelector);
  const noneBreadcrumb = document.getElementById(dropdownId);

  dataDropdown.addEventListener("click", (event) => {
    event.stopPropagation();
    noneBreadcrumb.classList.toggle("none-breadcrumb");
  });

  document.addEventListener("click", (event) => {
    if (
      !noneBreadcrumb.contains(event.target) &&
      event.target !== dataDropdown
    ) {
      noneBreadcrumb.classList.add("none-breadcrumb");
    }
  });
}

setupDropdown("[data-dropdow-1]", "item-1");
setupDropdown("[data-dropdow-2]", "item-2");
//=========================================================================
// спойлер страница каталог (condition Damage Fuel type)=======================================
(function () {
  const spollerTitle = document.querySelectorAll("[data-name]");

  spollerTitle.forEach((item) => {
    item.addEventListener("click", function () {
      this.nextElementSibling.classList.toggle("hidden");
    });
  });
})();
//========================== код для сохраненное состояние в sessionStorage ================================
//----- для кнопок all  live  sold ------------------------
// При изменении состояния кнопки сохраняем выбранную кнопку в sessionStorage
// удалил из кода штмл активный класс _activ (потому что при перезагрузке страницы был мигание кнопки олл)
(function () {
  const tabuBtn = document.querySelectorAll(".tabu-body__item");

  // Восстановление состояния при загрузке страницы
  window.addEventListener("DOMContentLoaded", function () {
    const selectedButton = sessionStorage.getItem("selectedButton");
    if (selectedButton) {
      // Убираем класс _activ с всех кнопок, чтобы не было нескольких активных
      tabuBtn.forEach(function (element) {
        element.classList.remove("_activ");
      });

      // Найти элемент, который должен быть активным
      const activeItem = document.querySelector(
        `.tabu-body__item input[value="${selectedButton}"]`
      );
      if (activeItem) {
        // Восстановить активное состояние для выбранной кнопки
        activeItem.parentElement.classList.add("_activ");
      }
    } else {
      // Если нет сохраненного выбора, активировать кнопку "Live" по умолчанию
      const defaultItem = document.querySelector(
        ".tabu-body__item input[value='Live']"
      );
      if (defaultItem) {
        defaultItem.parentElement.classList.add("_activ");
      }
    }
  });

  // Обработчик кликов для записи выбора в sessionStorage
  tabuBtn.forEach((item) => {
    item.addEventListener("click", function () {
      tabuBtn.forEach(function (element) {
        element.classList.remove("_activ");
      });
      item.classList.add("_activ");

      // Сохраняем выбранное значение в sessionStorage
      const selectedValue = item.querySelector("input").value;
      sessionStorage.setItem("selectedButton", selectedValue);
    });
  });
})();
