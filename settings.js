const focusTimeInput = document.querySelector('#focusTime');
const breakTimeInput = document.querySelector('#breakTime');

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    localStorage.setItem("focusTime", focusTimeInput.value);
    localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".btn-reset").addEventListener('click', () => {
    startBtn.innerHTML = "start";
    clearTimeout(initial);
    setProgress(0);
    minutes.textContent = "00";
    seconds.textContent = "00";
});

pauseBtn.addEventListener('click', () => {
    if (paused === undefined){
        return;
    } if (paused){
        pauseBtn.innerHTML = "pause";
    } else {
        clearTimeout(initial);
        pause = true;
    }

});