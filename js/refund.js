let refundSearch = document.getElementById("refund-search"); // поле ввода
const closeBtn = document.querySelector(".popup-close");
const fee = 45;
const idFee = document.getElementById("fee");
const percentfield = document.getElementById("percent"); // поле 5%
const refundToBankCard = document.getElementById("refund-to-bank-card");
const balanceAfterRefund = document.getElementById("balance-after-refund");
const maxBalance = 3000; // refundSearch.dataset.max; тут наверное сума тянется с баланса аккаунта
const refundSubmitBtn = document.getElementById("refund-btn");
const refundError = document.getElementById("refund_error");
const refundSum = document.getElementById("refund-sum");
const fee1 = document.getElementById("fee-1");
idFee.textContent = `$${fee}`; // вставляю 45 в поле формы
fee1.textContent = fee; // вставляю 45 в поле формы

let percent = 0;
let refundCat = 0;
let balance = 0;

refundSearch.addEventListener("input", function () {
  let refund = parseFloat(refundSearch.value); //!веденное число в инпут

  if (refund >= 50) {
    percent = refund * 0.02; // это процент 2
    console.log(percent);

    refundCat = (refund - (fee + percent)).toFixed(0); // введенное число в инпуте - 45 + процент

    balance = (maxBalance - refund).toFixed(0);
    console.log(balance);

    percentfield.textContent = percent;
    refundToBankCard.textContent = refundCat;
    // balanceAfterRefund.textContent = balance;
    console.log(balanceAfterRefund.textContent);

    refundSum.textContent = refundCat;

    balanceAfterRefund.textContent = `${
      maxBalance - refundCat - (fee + percent)
    }`;

    refundSubmitBtn.removeAttribute("disabled");
    refundSubmitBtn.classList.remove("bg-primary-200");
    refundSubmitBtn.classList.add("bg-primary-600");
  }
});
closeBtn.addEventListener("click", function () {
  clearRefund();
});

function clearRefund() {
  refundSearch.value = "";
  refundError.innerHTML = "";
  percentfield.textContent = 0;
  refundToBankCard.textContent = 0;
  balanceAfterRefund.textContent = 0;
  refundSum.textContent = 0;

  refundSubmitBtn.setAttribute("disabled", "disabled");
  refundSubmitBtn.classList.remove("bg-primary-600");
  refundSubmitBtn.classList.add("bg-primary-200");
}
document.addEventListener("click", (event) => {
  if (
    event.target.classList.contains("popups") &&
    !event.target.closest(".popup-content")
  ) {
    clearRefund();
  }
});
