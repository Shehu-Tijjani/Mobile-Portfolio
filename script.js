"use strict";

const nav = document.querySelector("nav");
const overlay = document.querySelector(".overlay");
const imagesSlides = document.querySelector(".images-slides");

const terminateNavList = function () {
  nav.querySelector(".nav-lists").classList.remove("show-nav-lists");

  nav.querySelector(".hamburger").classList.remove("hide-hamburger");

  nav.querySelector(".cancel").classList.remove("show-cancel");

  nav.querySelector(".overlay").classList.remove("show-overlay");
};

nav.addEventListener("click", (e) => {
  if (e.target.closest(".hamburger-menu")) {
    nav.querySelector(".nav-lists").classList.toggle("show-nav-lists");

    nav.querySelector(".hamburger").classList.toggle("hide-hamburger");

    nav.querySelector(".cancel").classList.toggle("show-cancel");

    nav.querySelector(".overlay").classList.toggle("show-overlay");
  }

  if (e.target.classList.contains("overlay")) {
    terminateNavList();
  }

  if (e.target.classList.contains("nav-link")) {
    terminateNavList();
  }
});
