const mainSwiper = new Swiper(".swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
  },

  navigation: {
    nextEl: ".carousel-button--next",
    prevEl: ".carousel-button--prev",
  },

  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

const scrollbar = document.querySelector(".swiper-scrollbar");
scrollbar.classList.remove("swiper-scrollbar-horizontal");

const scrollbarDragElements = document.querySelectorAll(".swiper-scrollbar-drag");

scrollbarDragElements.forEach(function (element) {
  element.style.backgroundColor = "#141024";
});
