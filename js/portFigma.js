const usingFigmaPortfolios = [
  {
    image: "/images/portfolio/Eatnrun.png",
    subTitle: "Eat N’ Run",
    subSubcription:
      "Eat N' Run, my passion project, is an enticing online restaurant where food enthusiasts can effortlessly order their favorite dishes for a delicious dining experience delivered right to their doorstep.",
    liveHref:
      "https://www.figma.com/proto/bfS4OwJCJXrayDwrsGVPto/Eat-'N-Run?node-id=17-4&starting-point-node-id=17%3A4",
  },
];

const displayFigmaPortfolios = function (ports) {
  const usingFigmaCards = document.querySelector(".usingFigma");
  ports.map((port) => {
    const htmldisplayFigmaPortfolios = `
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
                ><i class="ph ph-hand-pointing"></i> View Live Prototype</a
              >
          </div>
      </div>
      `;

    usingFigmaCards.insertAdjacentHTML(
      "afterbegin",
      htmldisplayFigmaPortfolios
    );
  });
};

displayFigmaPortfolios(usingFigmaPortfolios);
