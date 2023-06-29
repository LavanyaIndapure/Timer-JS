let timer;
let timeRemaining = 0;

const daybox = document.getElementById('1');
const hourbox = document.getElementById('2');
const minbox = document.getElementById('3');
const secbox = document.getElementById('4');


daybox.innerHTML = `<div> 00 Days</div> `;
hourbox.innerHTML = `<div> 00 Hours</div>`;
minbox.innerHTML = `<div> 00 Minutes</div>`;
secbox.innerHTML = `<div> 00 Seconds</div>`;


function setTimer() {

    if (timeRemaining > 0)
        return;

    const daysInput = document.getElementById('days');
    const hoursInput = document.getElementById('hours');
    const minutesInput = document.getElementById('minutes');
    const secondsInput = document.getElementById('seconds');

    const days = parseInt(daysInput.value) || 0;
    const hours = parseInt(hoursInput.value) || 0;
    const minutes = parseInt(minutesInput.value) || 0;
    const seconds = parseInt(secondsInput.value) || 0;

if(days < 0 || hours < 0 || minutes < 0 || seconds <0 ) return;
    timeRemaining = ((days * 24 + hours) * 60 + minutes) * 60 + seconds;
    updateTimer();

    daysInput.value = '';
    hoursInput.value = '';
    minutesInput.value = '';
    secondsInput.value = '';

}

function updateTimer() {

    const timerBox = document.getElementById('timer-box');
    const days = Math.floor(timeRemaining / (24 * 60 * 60));
    const hours = Math.floor((timeRemaining % (24 * 60 * 60)) / (60 * 60));
    const minutes = Math.floor((timeRemaining % (60 * 60)) / 60);
    const seconds = timeRemaining % 60;

	
    if (days < 10)
        daybox.innerHTML = `<div> 0${days} Days</div> `;
    else
        daybox.innerHTML = `<div> ${days} Days</div> `;

    if (hours < 10)
        hourbox.innerHTML = `<div> 0${hours} Hours</div> `;
    else
        hourbox.innerHTML = `<div> ${hours} Hours</div> `;

    if (minutes < 10)
        minbox.innerHTML = `<div> 0${minutes} Minutes</div> `;
    else
        minbox.innerHTML = `<div> ${minutes} Minutes</div> `;

    if (seconds < 10)
        secbox.innerHTML = `<div> 0${seconds} Seconds</div> `;
    else
        secbox.innerHTML = `<div> ${seconds} Seconds</div> `;

}

function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => {
        if (timeRemaining > 0) {
            timeRemaining--;
            updateTimer();
        } else {
            clearInterval(timer);
        }
    }, 1000);
}

function pauseTimer() {
    clearInterval(timer);
}

function resetTimer() {
    clearInterval(timer);
    timeRemaining = 0;
    updateTimer();
}

function displayIns() {
    var Instructions = document.getElementsByClassName('instructions')[0];

    var btn = document.getElementsByClassName('insBtn')[0];

    if (btn.innerHTML == 'x') {
        btn.innerHTML = `Click here for instructions`;
        Instructions.style.display = 'none';
    }
    else {
        btn.innerHTML = `x`;
        Instructions.style.display = 'block';
    }
}