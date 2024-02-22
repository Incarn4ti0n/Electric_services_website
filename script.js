"use strict";

const menuBtn = document.querySelector(".menuBtn");
const sideNav = document.querySelector(".sideNav");
const menu = document.querySelector(".menu");
const btnKontaktScroll = document.querySelector(".kontakt");
const sectionOMnie = document.querySelector(".omnie");
console.log(sectionOMnie);

//////////////////////////////////////////////////////

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "img/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "img/menu.png";
  }
};

// BTN KONTAKT SCROLL
btnKontaktScroll.addEventListener("click", function (e) {
  e.preventDefault();
  const sectionOMniecoords = sectionOMnie.getBoundingClientRect();

  sectionOMnie.scrollIntoView({ behavior: "smooth" });
});
