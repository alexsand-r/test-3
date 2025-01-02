"use strict";
console.log("rty");

const refundSearch = document.getElementById("refund-search"); // поле ввода
let balanceToRefund = document.getElementById("balance-to-refund"); // поле balance-to-refund
let fee = document.getElementById("fee"); // поле fee - 45 $
let fee1 = document.getElementById("fee-1"); // поле fee - 45 $
let percent = document.getElementById("percent"); // поле 5%
let refundToBankCard = document.getElementById("refund-to-bank-card"); // поле refund-to-bank-card считается автоматически
fee.textContent = `$45`; //! тут проставляем нужную сумму например 45 как сейчас(которая подставляется в код штмл)
fee1.textContent = fee.textContent;
let refundSum = document.getElementById("refund-sum"); // общая сумма которая будет на синей кнопке
const errorText = document.getElementById("error-text"); // ошибка если вводят текст
const errorNum = document.getElementById("error-num"); // ошибка если сумма больше 3000

function handleInputChange(e) {
  console.log(fee);
  let refundFee = 0; // тут сума fee.textContent = `$45` + ercent 5%
  let suma = 0;
  const sumaMoney = e.target.value;

  // Проверяем, является ли введенное значение числом
  if (isNaN(sumaMoney) || sumaMoney.trim() === "") {
    balanceToRefund.textContent = `$0`;
    errorText.classList.remove("hidden");
    console.log("Error: The input must be a valid number.");
    return;
  } else {
    errorText.classList.add("hidden");
  }

  // Преобразуем значение в число для проверки
  const numericValue = parseFloat(sumaMoney);

  if (numericValue > 3000) {
    errorNum.classList.remove("hidden");
    console.log("Error: The amount must not exceed $3000.");
    return;
  } else {
    errorNum.classList.add("hidden");
  }

  console.log("Valid input:", numericValue); // Выводит корректное значение
  // Обновляем текст в `balance-to-refund`
  balanceToRefund.textContent = `$${numericValue}`;

  // Рассчитываем процент
  const calculatedPercent = numericValue * 0.05;
  percent.textContent = `$${calculatedPercent.toFixed(2)}`;

  // Извлекаем числовые значения из fee и percent
  const feeValue = parseFloat(fee.textContent.replace("$", "")); // Убираем знак $ и преобразуем в число
  const percentValue = parseFloat(percent.textContent.replace("$", "")); // Убираем знак $ и преобразуем в число

  // Рассчитываем refundFee как сумму fee и percent
  refundFee = feeValue + percentValue;

  console.log(refundFee);
  suma = (numericValue - refundFee).toFixed(2);
  refundToBankCard.textContent = `$${suma}`;
  console.log(refundToBankCard);
  refundSum.textContent = `$${suma}`;
}

refundSearch.addEventListener("input", handleInputChange);
