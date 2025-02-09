"use strict";
/*
Документация к коду
Этот скрипт реализует функционал расчета возврата средств с проверкой ввода, расчетом комиссий и обновлением DOM-элементов в
режиме реального времени.
Основные функции
Проверка ввода:
Убедиться, что введенное значение — число.
Проверить диапазон: от 50 до 3000.
Расчет возврата:
Фиксированная комиссия $45.
Процент: 5% от введенной суммы.
Итоговый возврат: введенная сумма минус общая комиссия.
Ошибки:
Показывает сообщение при неверном формате ввода.
Отображает ошибку, если сумма выходит за пределы допустимого диапазона.
*/
/*
Основные функции
Проверка ввода:
Убедиться, что введенное значение — число.
Проверить диапазон: от 50 до 3000.
Расчет возврата:
Фиксированная комиссия $45.
Процент: 5% от введенной суммы.
Итоговый возврат: введенная сумма минус общая комиссия.
Ошибки:
Показывает сообщение при неверном формате ввода.
Отображает ошибку, если сумма выходит за пределы допустимого диапазона.
Логика работы
Основная функция: handleInputChange(e)
Проверяет корректность ввода (число, диапазон).
Расчитывает процент и общую комиссию.
Обновляет элементы:
balance-to-refund: введенная сумма.
percent: рассчитанный процент.
refund-to-bank-card и refund-sum: итоговый возврат.
Событие: refundSearch.addEventListener("input", handleInputChange);
Реагирует на изменения в поле ввода.
*/
(function () {
  let refundSearch = document.getElementById("refund-search"); // поле ввода
  const maxBalance = refundSearch.dataset.max;
  const refundSubmitBtn = document.getElementById("refund-btn"); //
  let balanceToRefund = document.getElementById("balance-to-refund"); // поле balance-to-refund
  let balanceAfterRefund = document.getElementById("balance-after-refund"); // поле balance-after-refund
  let fee = document.getElementById("fee"); // поле fee - 45 $
  let fee1 = document.getElementById("fee-1"); // поле fee - 45 $
  let percent = document.getElementById("percent"); // поле 5%
  let refundToBankCard = document.getElementById("refund-to-bank-card"); // поле refund-to-bank-card считается автоматически
  fee.textContent = `$45`; //! тут проставляем нужную сумму например 45 как сейчас (которая подставляется в код штмл)
  fee1.textContent = fee.textContent;
  let refundSum = document.getElementById("refund-sum"); // общая сумма которая будет на синей кнопке
  const errorText = document.getElementById("error-text"); // ошибка если вводят текст
  const errorMax = document.getElementById("error-max"); // ошибка если сумма больше 3000
  const errorMin = document.getElementById("error-min"); // ошибка если сумма меньше 50
  function resetRefund() {
    refundSearch.value = ""; // Сбрасываем значение поля ввода
    refundSearch.placeholder = "Enter amount"; // Устанавливаем плейсхолдер
    balanceToRefund.textContent = `$0`;
    percent.textContent = `$0`;
    refundToBankCard.textContent = `$0`;
    errorText.classList.add("hidden");
    errorMax.classList.add("hidden");
    errorMin.classList.add("hidden");
  }
  function handleInputChange(e) {
    let refundFee = 0; // тут сума fee.textContent = `$45` + percent 5%
    let suma = 0;
    const sumaMoney = e.target.value;
    const numericValue = parseFloat(sumaMoney);
    // Если поле пустое, скрываем все ошибки
    if (sumaMoney.trim() === "") {
      balanceToRefund.textContent = `$0`;
      percent.textContent = `$0`;
      refundToBankCard.textContent = `$0`;
      refundSum.textContent = `$0`;
      errorText.classList.add("hidden");
      errorMax.classList.add("hidden");
      errorMin.classList.add("hidden");
      return;
    }
    // Проверяем, является ли введенное значение числом
    if (isNaN(sumaMoney) || sumaMoney.trim() === "") {
      balanceToRefund.textContent = `$0`;
      errorText.classList.remove("hidden");
      console.log("Error: The input must be a valid number.");
      refundBtnFalse();
      return;
    }
    // Преобразуем значение в число для проверки
    if (numericValue > maxBalance) {
      errorMax.classList.remove("hidden");
      console.log("Error: The amount must not exceed $3000.");
      refundBtnFalse();
      return;
    }
    if (numericValue < 50) {
      errorMin.classList.remove("hidden");
      console.log("Error: Please enter a value greater than 50$");
      refundBtnFalse();
      return;
    } else {
      errorMin.classList.add("hidden");
      refundBtnTrue();
    }
    //console.log("Valid input:", numericValue); // Выводит корректное значение
    // Обновляем текст в `balance-to-refund`
    // balanceToRefund.textContent = `$${numericValue}`;
    // Рассчитываем процент
    const calculatedPercent = numericValue * 0.05;
    percent.textContent = `$${calculatedPercent.toFixed(0)}`;
    // Извлекаем числовые значения из fee и percent
    const feeValue = parseFloat(fee.textContent.replace("$", "")); // Убираем знак $ и преобразуем в число
    const percentValue = parseFloat(percent.textContent.replace("$", "")); // Убираем знак $ и преобразуем в число
    // Рассчитываем refundFee как сумму fee и percent
    refundFee = feeValue + percentValue;
    //console.log(refundFee);
    suma = (numericValue - refundFee).toFixed(0);
    refundToBankCard.textContent = `$${suma}`;
    //console.log(refundToBankCard);
    //refundSum.textContent = `$${suma}`;
    refundSum.textContent = numericValue;

    balanceAfterRefund.textContent = maxBalance - numericValue;

    function refundBtnTrue() {
      refundSubmitBtn.disable = true;
      refundSubmitBtn.classList.remove("bg-primary-200");
      refundSubmitBtn.classList.add("bg-primary-600");
    }
    function refundBtnFalse() {
      refundSubmitBtn.disable = false;
      refundSubmitBtn.classList.remove("bg-primary-600");
      refundSubmitBtn.classList.add("bg-primary-200");
    }
  }
  // Привязка сброса формы к закрытию попапа
  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("popup-close") || // Клик на крестик
      (event.target.classList.contains("popups") &&
        !event.target.closest(".popup-content")) // Клик на фон
    ) {
      if (!refundSearch.classList.contains("hidden")) {
        resetRefund();
      }
    }
  });
  refundSearch.addEventListener("input", handleInputChange);
})();
