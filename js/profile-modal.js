const profile = document.querySelector(".profile");
const profileOpen = document.querySelectorAll(".js-profile-info");
const profileClose = document.querySelector(".js-profile-button");

const profileToggle = () => {
  profile.classList.toggle("profile--active");
};

profileOpen.forEach((open) => {
  open.addEventListener("click", profileToggle);
});

profileClose.addEventListener("click", profileToggle);

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    profile.classList.remove("profile--active");
  }
});
