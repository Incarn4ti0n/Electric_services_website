const menuBtn = document.querySelector(".menuBtn");
const sideNav = document.querySelector(".sideNav");
const menu = document.querySelector(".menu");

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

const btnKontaktScroll = document.querySelector('.kontakt');
const sectionOMnie = document.querySelector('#omnie');

btnKontaktScroll.addEventListener('click', function() {

    sectionOMnie.scrollIntoView({ behavior: 'smooth' });

})