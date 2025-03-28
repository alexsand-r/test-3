"use strict";
//! код новый на попап возврата средств для php 13.01.2024
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
  //let balanceToRefund = document.getElementById("balance-to-refund"); // поле balance-to-refund
  let fee = document.getElementById("fee"); // поле fee - 45 $
  let fee1 = document.getElementById("fee-1"); // поле fee - 45 $
  let percent = document.getElementById("percent"); // поле 5%
  let refundToBankCard = document.getElementById("refund-to-bank-card"); // поле refund-to-bank-card считается автоматически
  fee.textContent = `$45`; //! тут проставляем нужную сумму например 45 как сейчас (которая подставляется в код штмл)
  fee1.textContent = fee.textContent;
  let refundSum = document.getElementById("refund-sum"); // общая сумма которая будет на синей кнопке
  let refundError = document.getElementById("refund_error"); // блок для ошибок
  const refundSubmitBtn = document.getElementById("refund-btn");
  let overallBalance = 3000; // общий баланс аккаунта
  let balanceAfterRefund = document.getElementById("balance-after-refund"); // тут должен показать баланс с учетом возврата денег

  function resetErr() {
    refundError.innerHTML = "";
  }
  function resetRefund() {
    refundSearch.value = "";
    refundSearch.placeholder = "Enter amount";
    //balanceToRefund.textContent = `$0`;
    percent.textContent = `$0`;
    refundToBankCard.textContent = `$0`;
    refundSum.textContent = `$0`;
    balanceAfterRefund.textContent = `$0`;
    resetErr();
  }
  // активная
  function refundBtnTrue() {
    refundSubmitBtn.disable = true;
    refundSubmitBtn.classList.remove("pointer-events-none", "bg-primary-200");
    refundSubmitBtn.classList.add("bg-primary-600");
  }

  // неактивная
  function refundBtnFalse() {
    refundSubmitBtn.disable = false;
    refundSubmitBtn.classList.add("pointer-events-none", "bg-primary-200"); // Блокируем все взаимодействия и задаем нужный цвет
    refundSubmitBtn.classList.remove("bg-primary-600", "hover:bg-primary-800"); // Убираем ховер-эффекты
  }
  refundBtnFalse();

  function handleInputChange(e) {
    let refundFee = 0;
    let suma = 0;
    const sumaMoney = e.target.value; // тут вводится значение
    const numericValue = parseFloat(sumaMoney); // тут перевожу строку в число

    // Если поле пустое, скрываем все ошибки
    if (sumaMoney.trim() === "") {
      //balanceToRefund.textContent = `$0`;
      percent.textContent = `$0`;
      refundToBankCard.textContent = `$0`;
      refundSum.textContent = `$0`;
      balanceAfterRefund.textContent = `$0`;
      resetErr();
      refundBtnFalse(); // если поле пустое то кнопка неактивная
      return;
    } else {
      refundBtnTrue();
    }

    const calculatedPercent = numericValue * 0.02; // тут умножаю введенное число в инпуте на 2%
    percent.textContent = `$${calculatedPercent.toFixed(0)}`; // вывожу на страничку 2 процента

    const feeValue = parseFloat(fee.textContent.replace("$", "")); // вывожу на страничку 45 бак
    const percentValue = parseFloat(percent.textContent.replace("$", "")); // 2 процента первожу строку в число
    refundFee = feeValue + percentValue; // тут 45 прибавляю 2 процента
    suma = (numericValue - refundFee).toFixed(0); //введенное число минус (45 + 2%)

    refundToBankCard.textContent = `$${suma}`;
    refundSum.textContent = `$${suma}`;
    let numRefundSum = parseFloat(refundSum.textContent); //! это сумма к возврату ЧИСЛО на кнопке

    // расчет остатка денег на аккаунте
    balanceAfterRefund.textContent = `$${overallBalance - suma - refundFee}`;
    let numBalanceAfterRefund = parseFloat(balanceAfterRefund.textContent); // !это сумма к возврату ЧИСЛО остаток на балансе
    //console.log(typeof numBalanceAfterRefund);
  }

  refundSearch.addEventListener("input", handleInputChange);
  document.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("popups") &&
      !event.target.closest(".popup-content")
    ) {
      resetRefund();
      resetErr();
      refundBtnFalse();
    }
    if (event.target.closest(".popup-close")) {
      resetRefund();
      resetErr();
      refundBtnFalse();
      // console.log("Клик на крестик закрыть попап");
    }
  });
})();
