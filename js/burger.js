const menuBurger = document.querySelector(".header__nav");
const buttonOpen = document.querySelector(".js-button-open");
const buttonClose = document.querySelector(".js-button-close");
const headerList = document.querySelectorAll(".js-header__nav-list");

const toggleMenu = () => {
  menuBurger.classList.toggle("header__nav--active");
  document.body.classList.add("stop-scroll");
};

buttonOpen.addEventListener("click", toggleMenu);
buttonClose.addEventListener("click", function () {
  menuBurger.classList.toggle("header__nav--active");
  document.body.classList.remove("stop-scroll");
});

headerList.forEach((open) => {
  open.addEventListener("click", function () {
    menuBurger.classList.toggle("header__nav--active");
    document.body.classList.remove("stop-scroll");
  });
});
