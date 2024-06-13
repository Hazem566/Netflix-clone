const heroData = [
  {
    image: "./assets/background.jpg",
    text1: "Unlimited movies, TV shows, and more",
    text2: "Starts at EGP 70. Cancel anytime.",
  },
  {
    image1: "./assets/background-2.webp",
    image2: "./assets/avatar-text.webp",
    text: "A young boy known as the Avatar must master the four elemental powers to save a world at war — and fight a ruthless enemy bent on stopping him.",
  },
  {
    image1: "./assets/background-3.webp",
    image2: "./assets/love-is-blind.webp",
    text: "Nick and Vanessa Lachey host this social experiment where single men and women look for love and get engaged, all before meeting in person.",
  },
];

const backgroundImg = document.querySelector(".background__img");
const detailsContainer = document.querySelector(".slider .details");
const heroSection = document.getElementById("hero");
const heroBackgroundElement = document.querySelector(".background__img");
const navigatorIcons = document.querySelectorAll(
  ".navigator .navigator__content .content .controls .navigate__icons span"
);

window.addEventListener("DOMContentLoaded", (_) => {
  homeContent3();
});

function homeContent1() {
  backgroundImg.src = heroData[0].image;
  detailsContainer.innerHTML = `
    <h1>${heroData[0].text1}</h1>
    <p>${heroData[0].text2}</p>
  `;
  navigatorIcons.forEach((icon) => icon.classList.remove("active"));
  navigatorIcons[0].classList.add("active");
}
function homeContent2() {
  backgroundImg.src = heroData[1].image1;
  heroBackgroundElement.style.filter = "blur(.6px)";
  heroSection.style.background =
    "linear-gradient(to top right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";
  detailsContainer.innerHTML = `
    <div class="dc details__content2">
      <div class="trend__box">
        <img src="./assets/trend.svg" alt="trend img" />
        <p>Trending now</p>
      </div>
      <img src="${heroData[1].image2}" alt="text" />
      <div class="catigory__box">
        <button type="button">2024</button>
        <button type="button">13+</button>
        <button type="button">Show</button>
        <button type="button">Action</button>
        <button type="button">Fantasy</button>
        <button type="button">Adventure</button>
      </div>
      <p>${heroData[1].text}</p>
    </div>
  `;
  navigatorIcons.forEach((icon) => icon.classList.remove("active"));
  navigatorIcons[1].classList.add("active");
}
function homeContent3() {
  backgroundImg.src = heroData[2].image1;
  heroSection.style.background =
    "linear-gradient(to top right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))";
  detailsContainer.innerHTML = `
      <div class="dc details__content3">
        <div class="trend__box">
          <img src="./assets/trend.svg" alt="trend image" />
          <p>Trending now</p>
        </div>
        <img
          src="${heroData[2].image2}"
          alt="love is blind text image"
        />
        <div class="catigory__box">
          <button type="button">2024</button>
          <button type="button">18+</button>
          <button type="button">Show</button>
          <button type="button">Reality Programming</button>
        </div>
        <p>${heroData[2].text}</p>
      </div>
  `;
  navigatorIcons.forEach((icon) => icon.classList.remove("active"));
  navigatorIcons[2].classList.add("active");
}
