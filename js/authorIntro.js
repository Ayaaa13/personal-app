// Selecting Author Information
const aboutMeDescription = document.querySelector(".about-me-description");

// Author Information
const author = {
  image: {
    src: "/images/myself/myself.jpeg",
  },
  firstName: "Jeremiah",
  lastName: "Nava",
  fullName: function () {
    const [first, last] = `${this.firstName}, ${this.lastName}`.split(",");
    const name = [first + last].join(" ");
    return name;
  },
  introduction:
    "Welcome to my corner of the internet. I'm in my exciting journey to become a web designer and web developer, and this is where I showcase my passion for creating beautiful and functional websites.",
  socialMedia: {
    facebookhref: "https://www.facebook.com/jjjjnava",
    githubhref: "https://github.com/Ayaaa13",
    linkedinhref: "https://www.linkedin.com/in/jeremiah-nava-777985225/",
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

// Displaying Author Information
displayGetToKnowMe(author.fullName(), author.introduction);
displayHowToFindMe(
  author.socialMedia.facebookhref,
  author.socialMedia.githubhref,
  author.socialMedia.linkedinhref
);
displayAuthorImage(author.image);
