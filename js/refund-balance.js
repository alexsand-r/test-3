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
  let balanceToRefund = document.getElementById("balance-to-refund"); // поле balance-to-refund
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
    refundSearch.value = "";
    refundSearch.placeholder = "Enter amount";
    balanceToRefund.textContent = `$0`;
    percent.textContent = `$0`;
    refundToBankCard.textContent = `$0`;
    errorText.classList.add("hidden");
    errorMax.classList.add("hidden");
    errorMin.classList.add("hidden");
  }

  function handleInputChange(e) {
    let refundFee = 0;
    let suma = 0;
    const sumaMoney = e.target.value;

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
    if (isNaN(sumaMoney)) {
      balanceToRefund.textContent = `$0`;
      errorText.classList.remove("hidden");
      return;
    } else {
      errorText.classList.add("hidden");
    }

    const numericValue = parseFloat(sumaMoney);

    if (numericValue > 3000) {
      errorMax.classList.remove("hidden");
      return;
    } else {
      errorMax.classList.add("hidden");
    }

    if (numericValue < 50) {
      errorMin.classList.remove("hidden");
      return;
    } else {
      errorMin.classList.add("hidden");
    }

    balanceToRefund.textContent = `$${numericValue}`;
    const calculatedPercent = numericValue * 0.05;
    percent.textContent = `$${calculatedPercent.toFixed(0)}`;
    const feeValue = parseFloat(fee.textContent.replace("$", ""));
    const percentValue = parseFloat(percent.textContent.replace("$", ""));
    refundFee = feeValue + percentValue;
    suma = (numericValue - refundFee).toFixed(0);
    refundToBankCard.textContent = `$${suma}`;
    refundSum.textContent = `$${suma}`;
  }

  refundSearch.addEventListener("input", handleInputChange);

  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("popup-close") ||
      (event.target.classList.contains("popups") &&
        !event.target.closest(".popup-content"))
    ) {
      resetRefund();
    }
  });
})();
