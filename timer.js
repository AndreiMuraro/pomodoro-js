const el = document.querySelector(".clock");
const bell = document.querySelector(".audio");

const minutes = document.querySelector(".mins");
const seconds = document.querySelector(".secs");

const startBtn = document.querySelector(".btn-start");

localStorage.setItem("btn", "focus");

startBtn.addEventListener("click", () =>{
    if(localStorage.getItem("btn") === "focus"){
        localStorage.setItem("btn", "blur");
        startBtn.classList.remove("focus");
        startBtn.classList.add("blur");
        startBtn.innerHTML = "Pause";
        startTimer();
    }else{
        localStorage.setItem("btn", "focus");
        startBtn.classList.remove("blur");
        startBtn.classList.add("focus");
        startBtn.innerHTML = "Start";
        clearInterval(timer);
    }

})