const barsBtn = document.querySelector(".barsBtn");
const menuModal = document.querySelector(".menu-modal");
const overlay = document.querySelector(".overlay");

barsBtn.addEventListener("click", function () {
  menuModal.classList.add("visible");
  overlay.classList.add("visible");
});

overlay.addEventListener("click", function () {
  menuModal.classList.remove("visible");
  overlay.classList.remove("visible");
});

const contactBtn = document.querySelector(".contact-button");
const contactContent = document.querySelector(".contact-content");
const contactOverlay = document.querySelector(".contact-overlay");

contactBtn.addEventListener("click", function () {
  contactContent.classList.add("visible");
  contactOverlay.classList.add("visible")
});

contactOverlay.addEventListener("click", function() {
  contactContent.classList.remove("visible");
  contactOverlay.classList.remove("visible")
})

const email = document.querySelector("#email");
const message = document.querySelector("#message");
const sendmsgBtn = document.querySelector(".sendmsgBtn");

sendmsgBtn.addEventListener("click", function () {
  (function () {
    emailjs.init("zB26cDz-RIJS8OuJq");
  })();

  let params = {
    user_email: email.value,
    user_message: message.value,
  };

  const ServiceID = "service_ljppj9h";
  const TemplateID = "template_lu34r6p";
  emailjs
    .send(ServiceID, TemplateID, params)
    .then((res) => {
      alert("Email Sent");
    })
    .catch();
});
