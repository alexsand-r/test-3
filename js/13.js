// Функция закрытия формы при клике вне ее области
document.addEventListener("click", function (event) {
  if (form2) {
    if (
      !form2.contains(event.target) &&
      !form1.contains(event.target) &&
      !form3.contains(event.target) &&
      !form4.contains(event.target)
    ) {
      form1.classList.remove("hidden");
      form2.classList.add("hidden");
      console.log("кликнул за формой");
    }
  }
});
