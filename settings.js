const focusTimeInput = document.querySelector("#focusTime");
const breakTimeInput = document.querySelector("#breakTime");
const pauseBtn = document.querySelector(".btn-pause");

focusTimeInput.value = localStorage.getItem("focusTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
    e.preventDefault();
    localStorage.setItem("focusTime", focusTimeInput.value);
    localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".btn-reset").addEventListener("click", () => {
    startBtn.style.transform = "scale(1)";
    clearTimeout(initial);
    setProgress(0);
    minutes.textContent = "0";
    seconds.textContent = "00";
});

pauseBtn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    pauseBtn.textContent = "pause";
    pauseBtn.classList.remove("resume");
  } else {
    clearTimeout(initial);
    pauseBtn.textContent = "resume";
    pauseBtn.classList.add("resume");
    paused = true;
  }
});