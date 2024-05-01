const menuBurger = document.querySelector(".header__nav");
const buttonOpen = document.querySelector(".js-button-open");
const buttonClose = document.querySelector(".js-button-close");

const toggleMenu = () => {
  menuBurger.classList.toggle("header__nav--active");
  document.body.classList.toggle("stop-scroll");
};

buttonOpen.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", toggleMenu);
