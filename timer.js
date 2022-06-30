const el = document.querySelector(".clock");
const bell = document.querySelector("audio");

const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");

const startBtn = document.querySelector(".btn-start");
localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, secs;

// INICIA O TIMER E OBTÉM O TEMPO INICIAL
startBtn.addEventListener("click", () => {
  let btn = localStorage.getItem("btn");

  if (btn === "focus") {
    mins = +localStorage.getItem("focusTime") || 1;
  } else {
    mins = +localStorage.getItem("breakTime") || 1;
  }

  secs = mins * 60;
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  startBtn.style.transform = "scale(0)";
  paused = false;
});
// CONTAGEM REGRESSIVA
function decremenT() {
  minutes.textContent = Math.floor(secs / 60);
  seconds.textContent = secs % 60 > 9 ? secs % 60 : `0${secs % 60}`;
  if (circle.classList.contains("end-time")) {
    circle.classList.remove("end-time");
  }

  if (secs > 0) {
    perc = Math.ceil(((totalsecs - secs) / totalsecs) * 100);
    setProgress(perc);
    secs--;
    initial = window.setTimeout("decremenT()", 1000);
    if (secs < 10) {
      circle.classList.add("end-time");
    }
  } else {
    mins = 0;
    secs = 0;
    bell.play();
    let btn = localStorage.getItem("btn");

    if (btn === "focus") {
      startBtn.textContent = "iniciar pausa";
      startBtn.classList.add("break");
      localStorage.setItem("btn", "break");
    } else {
      startBtn.classList.remove("break");
      startBtn.textContent = "iniciar";
      localStorage.setItem("btn", "focus");
    }
    startBtn.style.transform = "scale(1)";
  }
}


