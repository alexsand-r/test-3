"use strict";
(function () {
  const forgotPassword = document.getElementById("forgot-password");

  forgotPassword.addEventListener("click", function () {
    const popupBg = document.getElementById("popup-bg");
    const popupResetPasw = document.getElementById("popup-reset-pasw");
    popupBg.classList.add("hidden");
    popupResetPasw.classList.remove("hidden");

 
  });
})();
