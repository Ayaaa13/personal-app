const aboutMeAuthorName = document.querySelector(".about-me-author-name");
const aboutMeEmail = document.querySelector(".about-me-email");
const aboutMeAddress = document.querySelector(".about-me-address");
const aboutMePhone = document.querySelector(".about-me-phone");

const aboutMe = {
  firstName: "Jeremiah",
  lastName: "Nava",
  fullName: function () {
    const [first, last] = `${this.firstName}, ${this.lastName}`.split(",");
    const name = [first + last].join(" ");
    return name;
  },
  description:
    "Hey there! I'm Jeremiah G. Nava, a Computer Engineering graduate from Bataan Heroes College. I love creating awesome websites – it's my thing! Explore with me as I turn ideas into captivating online experiences. 🚀",
  email: "aiahnava5@gmail.com",
  address: "#087 Townsite Proper Mariveles, Bataan",
  phone: "+63 9696451534",
};

aboutMeDescription.textContent = aboutMe.description;
aboutMeAuthorName.textContent = aboutMe.fullName();
aboutMeEmail.textContent = aboutMe.email;
aboutMeAddress.textContent = aboutMe.address;
aboutMePhone.textContent = aboutMe.phone;

const myInterests = [
  {
    image: "/images/interests/console.png",
    interest: "Games",
  },
  {
    image: "/images/interests/basketball.png",
    interest: "Sports",
  },
  {
    image: "/images/interests/motorcycle.png",
    interest: "Travel",
  },
  {
    image: "/images/interests/coffee-cup.png",
    interest: "Coffee",
  },
];

const displayMyInterests = function (interests) {
  const myInterest = document.querySelector(".interests");

  interests.map((interest) => {
    const html = `
        <li>
            <div class="interest-card">
            <img src=${interest.image} alt=${interest.image} class="interest-image">
            <p class="interest-title">${interest.interest}</p>
            </div>
        </li>
        `;
    myInterest.insertAdjacentHTML("afterbegin", html);
  });
};

displayMyInterests(myInterests);
