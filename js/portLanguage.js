const usingLanguagePortfolios = [
  {
    image: "/images/portfolio/Calculator.png",
    subTitle: "Calculator",
    subSubcription:
      "Calculator, welcome to my simple online calculator, designed to help you perform basic arithmetic operations effortlessly with just a few clicks.",
    githubHref: "https://github.com/Ayaaa13/calculator",
    liveHref: "https://calculator.jnava.dev/",
  },

  {
    image: "/images/portfolio/Agame.png",
    subTitle: "AGame",
    subSubcription:
      "Welcome to AGAME, your go-to destination for engaging arithmetic challenges! Immerse yourself in a world of fun and learning as you play and solve arithmetic operations on our interactive platform.",
    githubHref: "https://github.com/Ayaaa13/game-app",
    liveHref: "https://agame.jnava.dev/",
  },
];

const displayLanguagePortfolios = function (ports) {
  const usingLanguageCards = document.querySelector(".usingLanguage");
  ports.map((port) => {
    const htmlLanguagePortfolios = `
        <div class="portfolio-card">
            <div class="card-image">
                <img src=${port.image} alt="Eat N' Run" />
            </div>
                    
            <div class="content">
                <h2 class="sub-title"><span>~</span> ${port.subTitle}</h2>
                <p class="sub-description">
                    ${port.subSubcription}
                </p>
                <div class="buttons">
                      
                <a
                  href=${port.liveHref}
                  class="portfolio-btn primary-btn"
                  target="_blank"
                  ><i class="ph ph-hand-pointing"></i> Live Demo</a
                >
            </div>
        </div>
                `;
    usingLanguageCards.insertAdjacentHTML("afterbegin", htmlLanguagePortfolios);
  });
};

displayLanguagePortfolios(usingLanguagePortfolios);
