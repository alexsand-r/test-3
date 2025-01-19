"use strict";
//* скрипт на график строками на странице аукциона
//* значения подставлять в ай ди в спанах в строках:
//* <div  class="text-base font-normal text-gray-500 leading-6"><span id="car-copart">10</span> Cars</div>
//* <div class="text-base font-normal text-gray-500 leading-6"><span id="car-iaai">25</span> Cars</div>
//* <div  class="text-base font-normal text-gray-500 leading-6"> <span id="car-iaai-ca">50</span> Cars</div>

document.addEventListener("DOMContentLoaded", function () {
  const carCopart = Number(document.getElementById("car-copart").textContent); // колличество машин копарт
  const carIaai = Number(document.getElementById("car-iaai").textContent); // колличество машин iaai
  const carIaaiCa = Number(document.getElementById("car-iaai-ca").textContent); // колличество машин iaai-ca

  //console.log(carCopart, carIaai, carIaaiCa);

  // перевести полученные колличества машин в проценты
  let totalNumberOfCars = carCopart + carIaai + carIaaiCa;
  //console.log(totalNumberOfCars);

  // процент авто с копарт
  let procentCopart = Number(
    ((carCopart / totalNumberOfCars) * 100).toFixed(0)
  );
  //console.log(procentCopart);

  // процент авто с Iaai
  let procentIaai = Number(((carIaai / totalNumberOfCars) * 100).toFixed(0));
  //console.log(procentIaai);

  // процент авто с iaai-ca
  let procentIaaiCa = Number(
    ((carIaaiCa / totalNumberOfCars) * 100).toFixed(0)
  );
  //console.log(procentIaaiCa);

  // получаю значения процентов в поля процентов
  let copartPercentage = document.getElementById("copart-percentage");
  let iaaiPercentage = document.getElementById("iaai-percentage");
  let iaaiCaPercentage = document.getElementById("iaai-ca-percentage");
  // вставляю проценты
  copartPercentage.textContent = procentCopart + " %";
  iaaiPercentage.textContent = procentIaai + " %";
  iaaiCaPercentage.textContent = procentIaaiCa + " %";

  // Функция для преобразования процента в ширину
  const percentageToWidth = (percentage) => parseInt(percentage, 10) + "%";

  // Установка ширины для графика
  document.getElementById("copart-bar").style.width =
    percentageToWidth(procentCopart);
  document.getElementById("iaai-bar").style.width =
    percentageToWidth(procentIaai);
  document.getElementById("iaai-ca-bar").style.width =
    percentageToWidth(procentIaaiCa);
});
