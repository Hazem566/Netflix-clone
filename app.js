/**************** Data Array ****************/
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

/************* Document Elements *************/
const backgroundImg = document.querySelector(".background__img");
const detailsContainer = document.querySelector(".slider .details");
const heroSection = document.getElementById("hero");
const heroBackgroundElement = document.querySelector(".background__img");
const navigatorIcons = document.querySelectorAll(
  ".navigator .navigator__content .content .controls .navigate__icons span"
);
const slideLeftBtn = document.querySelector(".slide__left");
const slideRightBtn = document.querySelector(".slide__right");
const slideLeftIcon = document.querySelector(".left");
const slideRightIcon = document.querySelector(".right");
const playPuseBtn = document.querySelector(".play__stop");
const playPuseImg = document.querySelector(".play__stop img");
// vars
let selectedICon = null;
let currentDisplay = 1;
let currentIcon = 1;
let runContent = false;

/************* Event Listeners *************/
window.addEventListener("DOMContentLoaded", () => {
  homeContent1();
});
slideRightBtn.addEventListener("click", slideRight);
slideRightIcon.addEventListener("click", slideRight);
slideLeftBtn.addEventListener("click", slideLeft);
slideLeftIcon.addEventListener("click", slideLeft);

navigatorIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    selectedICon = e.target.dataset.id;
    switchContentWithIcons(selectedICon);
  });
});
playPuseBtn.addEventListener("click", playAndStopRunningContent);
/**************** Functions ****************/
function homeContent1() {
  heroSection.style.background =
    "linear-gradient(to top right, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.7))";
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
    "linear-gradient(to top right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4))";
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

async function runContent12() {
  await new Promise((resolve) => {
    homeContent1();
    backgroundImg.style.animation = "backgroundSlide1 550ms ease";
    detailsContainer.style.animation = "slideDetailsContainer1 350ms ease";
    resolve();
  }).then(() => {
    setTimeout(() => {
      backgroundImg.style.animation = "backgroundSlide2 550ms ease";
      detailsContainer.style.animation = "slideDetailsContainer2 550ms ease";
      homeContent2();
    }, 200);
  });
  currentDisplay = 2;
  currentIcon = 2;
}
async function runContent23() {
  await new Promise((resolve) => {
    homeContent2();
    backgroundImg.style.animation = "backgroundSlide1 550ms ease";
    detailsContainer.style.animation = "slideDetailsContainer1 350ms ease";
    resolve();
  }).then(() => {
    setTimeout(() => {
      backgroundImg.style.animation = "backgroundSlide2 550ms ease";
      detailsContainer.style.animation = "slideDetailsContainer2 550ms ease";
      homeContent3();
    }, 200);
  });
  currentDisplay = 3;
  currentIcon = 3;
}
async function runContent31() {
  await new Promise((resolve) => {
    homeContent3();
    backgroundImg.style.animation = "backgroundSlide1 550ms ease";
    detailsContainer.style.animation = "slideDetailsContainer1 350ms ease";
    resolve();
  }).then(() => {
    setTimeout(() => {
      backgroundImg.style.animation = "backgroundSlide2 550ms ease";
      detailsContainer.style.animation = "slideDetailsContainer2 550ms ease";
      homeContent1();
    }, 200);
  });
  currentDisplay = 1;
  currentIcon = 1;
}
async function runContent13() {
  await new Promise((resolve) => {
    homeContent1();
    backgroundImg.style.animation = "backgroundSlide1 550ms ease";
    detailsContainer.style.animation = "slideDetailsContainer1 350ms ease";
    resolve();
  }).then(() => {
    setTimeout(() => {
      backgroundImg.style.animation = "backgroundSlide2 550ms ease";
      detailsContainer.style.animation = "slideDetailsContainer2 550ms ease";
      homeContent3();
    }, 200);
  });
  currentDisplay = 3;
  currentIcon = 3;
}
async function runContent32() {
  await new Promise((resolve) => {
    homeContent3();
    backgroundImg.style.animation = "backgroundSlide1 550ms ease";
    detailsContainer.style.animation = "slideDetailsContainer1 350ms ease";
    resolve();
  }).then(() => {
    setTimeout(() => {
      backgroundImg.style.animation = "backgroundSlide2 550ms ease";
      detailsContainer.style.animation = "slideDetailsContainer2 550ms ease";
      homeContent2();
    }, 200);
  });
  currentDisplay = 2;
  currentIcon = 2;
}
async function runContent21() {
  await new Promise((resolve) => {
    homeContent2();
    backgroundImg.style.animation = "backgroundSlide1 550ms ease";
    detailsContainer.style.animation = "slideDetailsContainer1 350ms ease";
    resolve();
  }).then(() => {
    setTimeout(() => {
      backgroundImg.style.animation = "backgroundSlide2 550ms ease";
      detailsContainer.style.animation = "slideDetailsContainer2 550ms ease";
      homeContent1();
    }, 200);
  });
  currentDisplay = 1;
  currentIcon = 1;
}

function slideRight() {
  if (currentDisplay === 1) runContent12();
  else if (currentDisplay === 2) runContent23();
  else if (currentDisplay === 3) runContent31();
}
function slideLeft() {
  if (currentDisplay === 1) runContent13();
  else if (currentDisplay === 2) runContent21();
  else if (currentDisplay === 3) runContent32();
}

function switchContentWithIcons(iconId) {
  if (iconId === "1") {
    if (currentIcon === 2) runContent21();
    else if (currentIcon === 3) runContent31();
  } else if (iconId === "2") {
    if (currentIcon === 1) runContent12();
    else if (currentIcon === 3) runContent32();
  } else if (iconId === "3") {
    if (currentIcon === 2) runContent23();
    else if (currentIcon === 1) runContent13();
  }
}

function sleep() {
  return new Promise((resolve) => {
    setTimeout(resolve, 3000);
  });
}
function playAndStopRunningContent() {
  if (!runContent) {
    runContent = true;
    playPuseImg.src = "./assets/stop.svg";
    co8_u(currentIcon);
    async function co8_u(currentIcon) {
      if (currentIcon === 4) currentIcon = 1;
      const icon = Array.from(navigatorIcons).filter(
        (item) => item.dataset.id == currentIcon
      )[0];
      icon.classList.add("run");
      await sleep();
      icon.classList.remove("run");
      setTimeout(() => {
        if (runContent === false) return;
        if (currentIcon === 1) runContent12();
        else if (currentIcon === 2) runContent23();
        else if (currentIcon === 3) runContent31();
      });
      if (runContent === false) return;
      else return co8_u(currentIcon + 1);
    }
  } else {
    const icon = Array.from(navigatorIcons).filter(
      (item) => item.dataset.id == currentIcon
    )[0];
    runContent = false;
    playPuseImg.src = "./assets/play.svg";
    icon.classList.remove("run");
  }
}
