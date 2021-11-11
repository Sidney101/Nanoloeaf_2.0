// JavaScript Document


var hamburgerButton = document.querySelector("header button:first-of-type");
hamburgerButton.addEventListener("click", menuOpenen);



function menuOpenen() {
var hetMenu = document.querySelector(".hamburger");
hetMenu.classList.toggle("toonMenu");
}