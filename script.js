var nightModeToggleButton = document.querySelector(".nightModeButton");
var container = document.querySelector(".container");
var para = document.querySelector(".paragraph");
var header = document.querySelector(".header");
var maintext = document.querySelector("maintext");

nightModeToggleButton.onclick = function () {
  nightModeToggleButton.classList.toggle("night-mode");
  container.classList.toggle("night-mode");
  para.classList.toggle("night-mode");
  header.classList.toggle("night-mode");
  maintext.classList.toggle("night-mode");
};
