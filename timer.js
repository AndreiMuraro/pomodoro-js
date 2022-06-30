const el = document.querySelector(".clock");
const bell = document.querySelector(".audio");

const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");

const startBtn = document.querySelector(".btn-start");

localStorage.setItem("btn", "focus");

let initial, totalsecs, perc, paused, mins, secs;

// INICIA O TIMER E OBTÉM O TEMPO INICIAL
startBtn.addEventListener("click", () =>{
    let btn = localStorage.getItem("btn");
    if(btn === "focus"){
        mins = +localStorage.getItem("focusTime");
        startBtn.innerHTML = "pause";
    } else {
        mins = +localStorage.getItem("breakTime");
        startBtn.innerHTML = "start";
    }

    secs = mins * 60;
    totalsecs = seconds * 60;
    setTimeout(decremenT(), 60);
})

// CONTAGEM REGRESSIVA
function decremenT(){
    minutes.textContent = Math.floor(secs / 60);
    seconds.textContent = secs % 60 > 9 ? secs % 60 : `0${secs % 60}`;

    if (secs > 0){
        secs--;
        initial = setTimeout(decremenT, 1000);
    } else {
        bell.play();
        mins = 0;
        secs = 0;
        bell.play();
        let btn = localStorage.getItem("btn");

        if (btn === "focus"){
            startBtn.textContent = "start break";
            startBtn.classList.add("break");
            localStorage.setItem("btn", "break");
            localStorage.setItem("btn", "focus");
        }
    }
}
