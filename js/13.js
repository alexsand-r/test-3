function closePopup() {
  backExit.addEventListener("click", function () {
    if (!form2 && !form3 && !form4) {
      popupRegistrationForm.classList.add("hidden");
      document.body.style.overflow = "auto"; // Включаем прокрутку
      console.log("закрываю попап");
    }
    if (form2) {
      form1.classList.remove("hidden");
      form2.classList.add("hidden");
      console.log("закрываю форму 2 и перехожу на форму 1");
    }
    if (form3) {
      form2.classList.remove("hidden");
      form3.classList.add("hidden");
      console.log("закрываю форму 3 и перехожу на форму 2");
    }
    if (form4) {
      form3.classList.remove("hidden");
      form4.classList.add("hidden");
      console.log("закрываю форму 4 и перехожу на форму 3");
    }
  });
}
