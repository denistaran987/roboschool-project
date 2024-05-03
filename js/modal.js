const modal = document.querySelector(".backdrop");
const modalOpenButton = document.querySelector(".modal-open-button");
const modalCloseButton = document.querySelector(".modal-close-button");

const modalToggle = () => {
  modal.classList.toggle("is-hidden");
  document.body.classList.toggle("stop-scroll");
};

modalOpenButton.addEventListener("click", modalToggle);
modalCloseButton.addEventListener("click", modalToggle);

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.classList.add("is-hidden");
    document.body.classList.remove("stop-scroll");
  }
});
