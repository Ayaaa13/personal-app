const barsBtn = document.querySelector(".barsBtn");
const navbarMenuModal = document.querySelector(".navbar-menu-modal");

barsBtn.addEventListener("click", function () {
  navbarMenuModal.classList.toggle("visible");
});

// overlay.addEventListener("click", function () {
//   menuModal.classList.remove("visible");
//   overlay.classList.remove("visible");
// });

const contactBtn = document.querySelector(".contact-button");
const contactContent = document.querySelector(".contact-content");
const contactOverlay = document.querySelector(".contact-overlay");

contactBtn.addEventListener("click", function () {
  contactContent.classList.add("visible");
  contactOverlay.classList.add("visible");
  console.log("clicked");
});

contactOverlay.addEventListener("click", function () {
  contactContent.classList.remove("visible");
  contactOverlay.classList.remove("visible");
});
