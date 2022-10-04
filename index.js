"use strict";
const navBarLeft = document.querySelector(".nav-item-left");
const ddfFeatures = document.querySelectorAll(".ddf-features");
const ddfCompany = document.querySelectorAll(".ddf-company");

navBarLeft.addEventListener("click", function (e) {
  e.preventDefault();
  const element = e.target;
  const parentEl = element.closest(".nav-item");

  if (!parentEl) return;

  if (parentEl.classList.contains("nav-item-features")) {
    ddfCompany.forEach((ddf) => ddf.classList.add("hide"));
    ddfFeatures.forEach((ddf) => ddf.classList.toggle("hide"));
  }

  if (parentEl.classList.contains("nav-item-company")) {
    ddfFeatures.forEach((ddf) => ddf.classList.add("hide"));
    ddfCompany.forEach((ddf) => ddf.classList.toggle("hide"));
  }
});
