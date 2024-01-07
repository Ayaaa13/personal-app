const barsBtn = document.querySelector(".barsBtn");
const navbarMenuModal = document.querySelector(".navbar-menu-modal");

barsBtn.addEventListener("click", function () {
  navbarMenuModal.classList.toggle("visible");
});

const contactBtn = document.querySelector(".contact-button");
const contactContent = document.querySelector(".contact-content");
const contactOverlay = document.querySelector(".contact-overlay");
const hireMeBtn = document.querySelector(".hire-me");
const xButton = document.querySelector(".x-button");
const hireBtn = document.querySelector(".hire-me-button");

function contactAdd() {
  contactContent.classList.add("visible");
  contactOverlay.classList.add("visible");
}

function contactRemove() {
  contactContent.classList.remove("visible");
  contactOverlay.classList.remove("visible");
}

contactBtn.addEventListener("click", function () {
  contactAdd();
});

hireBtn.addEventListener("click", function () {
  contactAdd();
});

contactOverlay.addEventListener("click", function () {
  contactRemove();
});

xButton.addEventListener("click", function () {
  contactRemove();
});

const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submitBtn = document.querySelector(".sendmsgBtn");
const contactForm = document.querySelector(".contact-form");

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

function scrollToSection(sectionId) {
  let section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
