const carousel = document.querySelector(".carousel");
const track = carousel.querySelector(".slide-track");
const slides = carousel.querySelectorAll(".slide");
const prev = carousel.querySelector(".prev-btn");
const next = carousel.querySelector(".next-btn");

const navigator = carousel.querySelector(".navigator");
const indicators = carousel.querySelectorAll(".indicator");
let currentIndex = 0;

function moveSlide(index) {
  const w = track.clientWidth; //取得元素寬度
  track.style.transform = `translateX(-${index * w}px)`;
  updetBtn(index);
  updataIndicator(index);
}

function setupSlides() {
  const w = track.clientWidth; //取得元素寬度

  slides.forEach((slide, i) => {
    slide.style.left = `${i * w}px`;
  });

  next.addEventListener("click", () => {
    currentIndex++;
    updetBtn(currentIndex);
    const w = track.clientWidth;
    const l = slides.length;
    console.log(currentIndex);

    moveSlide(currentIndex);
  });

  prev.addEventListener("click", () => {
    currentIndex--;
    updetBtn(currentIndex);
    const w = track.clientWidth;
    const l = slides.length;
    console.log(currentIndex);

    moveSlide(currentIndex);
  });
}

navigator.addEventListener("click", (e) => {
  if (e.target.matches("button")) {
    const dot = Number(e.target.dataset.index);
    console.log(dot);
    moveSlide(dot);
  }
});

setupSlides();

function updetBtn(index) {
  if (index === 0) {
    prev.classList.add("hide");
    next.classList.remove("hide");
  } else if (index === slides.length - 1) {
    prev.classList.remove("hide");
    next.classList.add("hide");
  } else {
    prev.classList.remove("hide");
    next.classList.remove("hide");
  }
}

function updataIndicator(index) {
  indicators.forEach((indicator) => {
    if (Number(indicator.dataset.index) === index) {
      indicator.classList.add("active");
    } else {
      indicator.classList.remove("active");
    }
  });
}
