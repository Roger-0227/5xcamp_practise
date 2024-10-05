// 程式碼寫這裡
const timer = document.querySelector(".timer");
let deferSec = 120;
let sec;
let running = false;
let timerID;
let paused;

function timesup() {
  updataTimer(0);
  running = false;
  clearInterval(timerID);
}

function updataTimer(sec) {
  let mins = String(Math.floor(sec / 60)).padStart(2, "0");
  let secs = String(sec % 60).padStart(2, "0");

  timer.textContent = `${mins}:${secs}`;

  if (sec === 0) {
    timer.classList.add("times-up");
  } else {
    timer.classList.remove("times-up");
  }
}

function initTimer() {
  running = true;
  sec = deferSec;
  updataTimer(sec);
  setupTimer();
}

function setupTimer() {
  timerID = setInterval(() => {
    if (sec >= 1) {
      sec--;
      updataTimer(sec);
    } else {
      timesup();
      playSound();
    }
  }, 1000);
}

function playSound() {
  const sound = new Audio("sounds/news.mp3");
  sound.play();
}

function pause() {
  clearInterval(timerID);
  paused = false;
}

function resume() {
  setupTimer();
  paused = true;
}

document.addEventListener("keyup", (e) => {
  console.log(e.key);
  console.log(paused);
  if (!running && e.key == "Enter") {
    paused = true;
    initTimer();
  } else if (running && e.key == "Escape") {
    timesup();
  } else if (running && e.key == " " && paused == true) {
    pause();
  } else if (running && e.key == " " && paused == false) {
    resume();
  }
});
// setInterval //每個一段時間做的事情
// setTimeout //時間到做完事情就結束
