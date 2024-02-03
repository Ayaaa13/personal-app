// Overlay
const headerOverlay = document.querySelector(".header-overlay");
const messageSentOverlay = document.querySelector(".message-sent-overlay");

// BARS BUTTON JAVASCRIPT
const barsBtn = document.querySelector(".bars");
const navbarMenuModal = document.querySelector(".navbar-menu-dropdown");

barsBtn.addEventListener("click", function () {
  navbarMenuModal.classList.add("visible");
  headerOverlay.classList.add("visible");
});

// NAVBAR BUTTONs SCROLL INTO VIEW
const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = button.getAttribute("data-section");
    let section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// CONTACT JAVASCRIPT
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const submitBtn = document.querySelector(".sendmsgBtn");
const contactForm = document.querySelector(".contact-form");
const messageSent = document.querySelector(".message-sent");

const backBtn = document.querySelector(".back-btn");
const errorMessage = document.querySelector(".error-message");
const errorEmail = document.querySelector(".error-email");
const errorTextarea = document.querySelector(".error-textarea");

function sendEmail() {
  Email.send({
    // Password: ac142091-9f07-4b89-bad3-2a501a0f925a
    SecureToken: "ac142091-9f07-4b89-bad3-2a501a0f925a",
    To: "jeremiahnava@jnava.dev",
    From: "aiahnava5@gmail.com",
    Subject: "jnava.dev contact",
    Body: `
      Email: ${email.value}
      Message: ${message.value}`,
  }).then(() => {
    messageSent.classList.add("visible");
    messageSentOverlay.classList.add("visible");
  });
}

function back() {
  messageSent.classList.remove("visible");
  messageSentOverlay.classList.remove("visible");
}

backBtn.addEventListener("click", function () {
  back();
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  if (email.value === "" && message.value === "") {
    errorEmail.classList.add("visible");
    errorTextarea.classList.add("visible");
  } else {
    // Remove error messages if they were previously shown
    errorEmail.classList.remove("visible");
    errorTextarea.classList.remove("visible");

    if (email.value === "") {
      errorEmail.classList.add("visible");
    } else {
      errorEmail.classList.remove("visible");
    }

    if (message.value === "") {
      errorTextarea.classList.add("visible");
    } else {
      errorTextarea.classList.remove("visible");
    }

    // If no errors, proceed with sending email and reset values
    if (email.value !== "" && message.value !== "") {
      sendEmail();
      email.value = "";
      message.value = "";
    }
  }
});
