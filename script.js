// Overlay
const headerOverlay = document.querySelector(".header-overlay");
const messageSentOverlay = document.querySelector(".message-sent-overlay");

// BARS BUTTON JAVASCRIPT
const barsBtn = document.querySelector(".bars");
const navbarMenuModal = document.querySelector(".navbar-menu-dropdown");
const xBtn = document.querySelector(".x-btn");

function remove() {
  navbarMenuModal.classList.remove("visible");
  headerOverlay.classList.remove("visible");
}

function add() {
  navbarMenuModal.classList.add("visible");
  headerOverlay.classList.add("visible");
}

barsBtn.addEventListener("click", function () {
  add();
});

headerOverlay.addEventListener("click", function () {
  remove();
});

xBtn.addEventListener("click", function () {
  remove();
});
// NAVBAR BUTTONs SCROLL INTO VIEW
const buttons = document.querySelectorAll(".nav-btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = button.getAttribute("data-section");
    let section = document.getElementById(sectionId);

    buttons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let currentSectionId = null;

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();
    const isSectionInView = rect.top <= 100;

    if (isSectionInView) {
      currentSectionId = section.id;
    }
  });

  buttons.forEach((button) => {
    const sectionId = button.getAttribute("data-section");
    if (sectionId === currentSectionId) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
});

// const aboutMeDescription = document.querySelector(".about-me-description");
// const aboutMeAuthorName = document.querySelector(".about-me-author-name");
// const aboutMeEmail = document.querySelector(".about-me-email");
// const aboutMeAddress = document.querySelector(".about-me-address");
// const aboutMePhone = document.querySelector(".about-me-phone");

// Author Information
const author = {
  image: {
    src: "/images/myself/myself.jpeg",
  },
  firstName: "Jeremiah",
  lastName: "Nava",
  fullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  introduction:
    "Welcome to my corner of the internet. I'm in my exciting journey to become a web designer and web developer, and this is where Ishowcase my passion for creating beautiful and functional websites.",
  socialMedia: {
    facebookhref: "https://www.facebook.com/jjjjnava",
    githubhref: "https://github.com/Ayaaa13",
    linkedinhref: "https://www.linkedin.com/in/jeremiah-nava-777985225/",
  },
  aboutMe: {
    description:
      "Hey there! I'm Jeremiah G. Nava, a Computer Engineering graduate from Bataan Heroes College. I love creating awesome websites – it's my thing! Explore with me as I turn ideas into captivating online experiences. 🚀",
    email: "aiahnava5@gmail.com",
    address: "#087 Townsite Proper Mariveles, Bataan",
    phone: "+63 9155434721",
  },
};

const introduceMyself = document.querySelector("#introduce-myself");
const howToFindMe = document.querySelector(".how-to-find-me");
const getToKnowMe = document.querySelector(".get-to-know-me");

const displayGetToKnowMe = function (fullName, introduction) {
  const html = ` 
    <h2 class="greetings">
    <span>Hello</span>, I am <i class="ph ph-hand-waving"></i>
    </h2>
    <h1 class="author-name">${fullName}</h1>
    <p class="introduction">${introduction}</p>
    `;

  getToKnowMe.insertAdjacentHTML("afterbegin", html);
};

const displayHowToFindMe = function (socFacebook, socGithub, socLinkedIn) {
  const html = `
        <h3>Find Me on:</h3>
        <div class="social-medias">
          <a class="facebook" target="_blank" href=""
            ><i class="ph-fill ph-facebook-logo"></i></a
          ><a class="github" target="_blank" href=""
            ><i class="ph-fill ph-github-logo"></i></a
          ><a class="linkedin" target="_blank" href=""
            ><i class="ph-fill ph-linkedin-logo"></i
          ></a>
        </div>   
    `;
  howToFindMe.insertAdjacentHTML("afterbegin", html);

  // Social Media
  const facebook = document.querySelector(".facebook");
  const github = document.querySelector(".github");
  const linkedin = document.querySelector(".linkedin");

  facebook.href = socFacebook;
  github.href = socGithub;
  linkedin.href = socLinkedIn;
};

const displayAuthorImage = function (image) {
  const html = `
    <img src="" alt="Jeremiah Nava" class="author-image" />
  `;

  introduceMyself.insertAdjacentHTML("beforeend", html);

  // Author Image
  const authorImage = document.querySelector(".author-image");
  authorImage.src = image.src;
};

displayGetToKnowMe(author.fullName(), author.introduction);
displayHowToFindMe(
  author.socialMedia.facebookhref,
  author.socialMedia.githubhref,
  author.socialMedia.linkedinhref
);
displayAuthorImage(author.image);
// authorImage.setAttribute("src", author.image.src);
// authorName.textContent = author.fullName();
// authorIntro.textContent = author.introduction;

// aboutMeDescription.textContent = author.aboutMe.description;
// aboutMeAuthorName.textContent = author.fullName();
// aboutMeEmail.textContent = author.aboutMe.email;
// aboutMeAddress.textContent = author.aboutMe.address;
// aboutMePhone.textContent = author.aboutMe.phone;

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
const invalidEmail = document.querySelector(".invalid-email");

function sendEmail() {
  Email.send({
    // Password: ac142091-9f07-4b89-bad3-2a501a0f925a
    SecureToken: "ac142091-9f07-4b89-bad3-2a501a0f925a",
    To: "jeremiahnava@jnava.dev",
    From: "aiahnava5@gmail.com",
    Subject: "Message",
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

    function isValidEmail(email) {
      // Regular expression for a basic email validation
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      // Test the email against the pattern
      return emailPattern.test(email);
    }

    const emailToCheck = email.value;

    if (isValidEmail(emailToCheck)) {
      isValidEmail = true;
      invalidEmail.classList.remove("visible");
    } else {
      invalidEmail.classList.add("visible");
    }

    // If no errors, proceed with sending email and reset values
    if (email.value !== "" && message.value !== "" && isValidEmail === true) {
      sendEmail();
      email.value = "";
      message.value = "";
    }
  }
});
