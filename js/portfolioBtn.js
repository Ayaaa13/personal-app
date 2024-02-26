const portButtons = document.querySelectorAll(".portfolio-button");
const contentContainers = document.querySelectorAll(".portfolio-content");
const usingLanguageContent = document.querySelector(".usingLanguageContent");
const usingReactContent = document.querySelector(".usingReactContent");
const usingFigmaContent = document.querySelector(".usingFigmaContent");

portButtons.forEach((portButton) => {
  portButton.addEventListener("click", function () {
    const valueBtn = portButton.dataset.content;

    portButtons.forEach((btn) => btn.classList.remove("defaultBtn"));
    portButton.classList.add("defaultBtn");

    if (valueBtn === "usingLanguageContent") {
      usingLanguageContent.classList.remove("portfolio");
      usingReactContent.classList.add("portfolio");
      usingFigmaContent.classList.add("portfolio");
    } else if (valueBtn === "usingReactContent") {
      usingLanguageContent.classList.add("portfolio");
      usingReactContent.classList.remove("portfolio");
      usingFigmaContent.classList.add("portfolio");
    } else {
      usingLanguageContent.classList.add("portfolio");
      usingReactContent.classList.add("portfolio");
      usingFigmaContent.classList.remove("portfolio");
    }
  });
});
