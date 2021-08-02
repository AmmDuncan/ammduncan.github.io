"use strict";

document.addEventListener("DOMContentLoaded", function () {
  const navOpener = document.querySelector(".nav__opener");
  const navBar = document.querySelector(".navbar");

  navOpener.addEventListener("click", function () {
    navBar.classList.toggle("open");
  });
});

window.__forceSmoothScrollPolyfill__ = true;
