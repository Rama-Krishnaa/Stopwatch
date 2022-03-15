let tens = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;

const appendHours = document.getElementById('hours');
const appendMinutes = document.getElementById('minutes');
const appendSeconds = document.getElementById('seconds');
const appendTens = document.getElementById('tens');

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');


let Interval ;

startBtn.addEventListener('click', function(){
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10)
});

stopBtn.addEventListener('click', function(){
    clearInterval(Interval);
});

resetBtn.addEventListener('click', function(){
    clearInterval(Interval);
    tens = "00";
    seconds = "00";
    minutes = "00";
    hours = "00";
    appendSeconds.innerHTML = seconds;
    appendMinutes.innerHTML = minutes;
    appendHours.innerHTML = hours;    
    appendTens.innerHTML = tens;    
});




function startTimer () {
    tens ++;
    // tens
    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }
    if(tens > 9){
        appendTens.innerHTML = tens;
    }
    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML =  "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }
    // seconds
    if(seconds <= 9 && seconds > 0){
        appendSeconds.innerHTML = "0" + seconds;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    // minutes
    if(minutes <= 9 && minutes > 0){
        appendMinutes.innerHTML = "0" + minutes;
    }
    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }
    if(minutes > 59){
        minutes++;
        appendHours.innerHTML = "0" + hours;
        minutes = 0;
        appendMinutes.innerHTML = "0" + 0;
    }
    // hours
    if(hours <= 9 && hours > 0){
        appendHours.innerHTML = "0" + hours;
    }
    if(hours > 9){
        appendHours.innerHTML = hours;
    }

}



