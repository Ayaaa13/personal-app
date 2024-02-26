const usingReactPortfolios = [
  {
    image: "/images/portfolio/Eatnrun.png",
    subTitle: "Eat N’ Run",
    subSubcription:
      "Eat N' Run, my passion project, is an enticing online restaurant where food enthusiasts can effortlessly order their favorite dishes for a delicious dining experience delivered right to their doorstep.",
    githubHref: "https://github.com/Ayaaa13/e-commerce-app",
    liveHref: "https://eatnrun.jnava.dev/",
  },
];

const displayReactPortfolios = function (ports) {
  const usingReactCards = document.querySelector(".usingReact");
  ports.map((port) => {
    const htmlReactPortfolios = `
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
    usingReactCards.insertAdjacentHTML("afterbegin", htmlReactPortfolios);
  });
};

displayReactPortfolios(usingReactPortfolios);
