const mySkills = [
  {
    icon: `<ion-icon name="logo-figma" class="language-icon"></ion-icon>`,
    subTitle: "Figma",
  },

  {
    icon: ` <svg
            width="60"
            height="59"
            viewBox="0 0 60 59"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <rect
              x="0.834961"
              y="0.452393"
              width="58.33"
              height="58.33"
              fill="url(#pattern0)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0_309_2" transform="scale(0.0111111)" />
              </pattern>
              <image
                id="image0_309_2"
                width="90"
                height="90"
                xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC/UlEQVR4nO2cPWsUURSGJ42KYCGRuWc2URtBsVcbO4PYWImN4Ad7z6wKRrES/BMWFjZKsAiBe2ZFLfwJ8aMxNvoT7ARJqgiOXElkszv7FZw5dzLvA6fKzeyZJ2fe3IHlRhEAAAAAAAAAAAAAiI7fXDoQp+4BsXwklg1iyfdobZB1H4yV+ycW3+2v9E8/x915YvclAAl5teXW/L1XNsnNlCz/ZFcy2VtxkTe5DLvF0kVvZXLe6LLuffmirayr3yhri5b18kVr3ySHURDNEJ1rTyEmmvXFITpYXyoymiFafeIIEy3qkhAdrC8QGc1hFV5YGKJz7SnERLO+OEQH60tFRjNEq08cYaJFXRKig/UFBp/RxsrL0b+Zz5g73Thpy0WyskTW/Sq8DsvXgs98Ovxz3bP+9ca6b2X0VhPROzEdOUcs38MQPVlvtRTtobR7hqxshiZ6WG/BiiZ2NwzLI7LykKy75B/RgTVWnmuI3k1vwYo21n3asc7Km/4bittyQUP0bnqrj2iW3Odf75qks3wkCNET9FYr0ZRmV3rXnL7q9oUielxvNRLtfrfa7mTvmtatlaPjRCedtweP3V0+XFT+Z/9H9Pje6iHaymbM8rh/TWzdtXGip2Vq0RP2FrLos3GaLSQdd751/dXs4NXyGWJZVRI9dW/Bih6H8dur/usUiPaPtJdSVEknO1XGPrqot9qJnm2/PmSsPPG5OInoKl9YRvUWrOjtxzNOswVjs8sJS0rsXhgrP4Zep7pdx9S9hSx6cAvFo0t1ezdFRWUD0QLR22CiGdExMYgO0Y2OplUE0QLRFMAkYqJZXx6ig/XFIqMZotWnjjDRoi4K0cH6EpHRHE7hhYUhOteeQkw064tDdLC+VGQ0Q7T6xBEmWtQlITpYX2A4GY3j2HJi+VnFCwsOGLQVHDDoT53VfmxJuYx190oX7Q9A9QehNleyfPZfUI8qPNZ4rYmS52+7uahK/GT7U2d9Xu3pf5D2772t+riobJIBAAAAAAAAAAAAorD5A8UxfSiIrW0wAAAAAElFTkSuQmCC"
              />
            </defs>
          </svg>`,
    subTitle: "PHP",
  },

  {
    icon: `<ion-icon name="logo-react" class="language-icon"></ion-icon>`,
    subTitle: "React",
  },

  {
    icon: `<ion-icon name="logo-javascript" class="language-icon"></ion-icon>`,
    subTitle: "JavaScript",
  },

  {
    icon: `<ion-icon name="logo-css3" class="language-icon"></ion-icon>`,
    subTitle: "CSS",
  },

  {
    icon: `<ion-icon name="logo-html5" class="language-icon"></ion-icon>`,
    subTitle: "HTML",
  },
];

const displayMySkills = function (skills) {
  const languagesCards = document.querySelector(".languages-cards");

  skills.map((skill) => {
    const html = `
      <div class="language-card">
          ${skill.icon}
          <div class="sub-title">${skill.subTitle}</div>
      </div>
    `;

    languagesCards.insertAdjacentHTML("afterbegin", html);
  });
};

displayMySkills(mySkills);
