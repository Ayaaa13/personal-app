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
const hireMeBtn = document.querySelector(".hire-me");

contactBtn.addEventListener("click", function () {
  contactContent.classList.add("visible");
  contactOverlay.classList.add("visible");
});

hireMeBtn.addEventListener("click", function () {
  contactContent.classList.add("visible");
  contactOverlay.classList.add("visible");
});

contactOverlay.addEventListener("click", function () {
  contactContent.classList.remove("visible");
  contactOverlay.classList.remove("visible");
});

const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submitBtn = document.querySelector(".sendmsgBtn");
const contactForm = document.querySelector(".contact-form")[0];

function sendEmail() {
  // let body = {};

  Email.send({
    // Password: ac142091-9f07-4b89-bad3-2a501a0f925a
    SecureToken: "ac142091-9f07-4b89-bad3-2a501a0f925a",
    To: "jeremiahnava@jnava.dev",
    From: "aiahnava5@gmail.com",
    Subject: "jnava.dev contact",
    Body: `
      Email: ${email.value} 
      Message: ${message.value}`,
  }).then((message) => alert(message));
}

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  sendEmail();
});
