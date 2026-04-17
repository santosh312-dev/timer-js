const timerBox=document.querySelector(".timer")
const startBtn = document.querySelector(".start")
const pauseBtn = document.querySelector(".pause")
const continueBtn = document.querySelector('.continue')
const resetBtn = document.querySelector('.reset')

let isRunning=false
let seconds=0
let minutes=0
let hours=0
let timeInterval;

function formatDisplay(h,m,s){
    return `${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`
}

function updateDisplay(){
    timerBox.textContent=formatDisplay(hours,minutes,seconds)
}

function startTimer(){
    if(!isRunning){
        isRunning=true
        timeInterval=setInterval(() => {
            seconds++
            if(seconds===60){
                seconds=0
                minutes++
            }
            if(minutes===60){
                minutes=0
                hours++
            }    
            updateDisplay()
        }, 1000);
    }
}

function pauseTimer(){
    isRunning=false
    clearInterval(timeInterval)
}

function continueTimer(){
    if(!isRunning){
        startTimer()
    }
}

function resetTimer(){
    isRunning=false
    clearInterval(timeInterval)
    seconds=0
    minutes=0
    hours=0
    updateDisplay()
}
startBtn.addEventListener('click',startTimer)
pauseBtn.addEventListener('click',pauseTimer)
continueBtn.addEventListener('click',continueTimer)
resetBtn.addEventListener('click',resetTimer)

updateDisplay()