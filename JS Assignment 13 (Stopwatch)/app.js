let timer;
let isRunning = false;
let hours = -1, minutes = -1, seconds = 0, centiseconds = 0;

function startStop() {

    if (document.getElementById("timer").style.display == '') {
        if (isRunningTimer) {
            clearInterval(stopwatch);
            document.getElementById("start").innerHTML = "START"
            isRunningTimer = false;
        } else {
            stopwatch = setInterval(calculationsTimer, 1000);
            document.getElementById("start").innerHTML = "STOP"
            isRunningTimer = true;
        }
    } else {
        if (isRunning) {
            clearInterval(timer);
            document.getElementById("start").innerHTML = "START"
            isRunning = false;
        } else {
            timer = setInterval(updateDisplay, 10);
            document.getElementById("start").innerHTML = "STOP"
            isRunning = true;
        }

    }

}

function reset() {
    if (document.getElementById("timer").style.display == '') {
        clearInterval(stopwatch);
        isRunningTimer = false;
        secondsTimer = 0;
        minutesTimer = 5;
        updateDisplayTimer();
    } else {
        clearInterval(timer);
        isRunning = false;
        seconds = 0;
        hours = minutes = centiseconds = -1;
        updateDisplay();
    }
}

function updateDisplay() {
    centiseconds++;
    if (centiseconds === 100) {
        centiseconds = 0;
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes < 0 ? minutes += 2 : minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours < 0 ? hours += 2 : hours++;
            }
        }
    }


    if (hours >= 0) {
        document.getElementById("hour").innerHTML = hours;
        document.getElementById("h").innerHTML = "h";
    } else if (hours < 0) {
        document.getElementById("hour").innerHTML = "";
        document.getElementById("h").innerHTML = "";
    }
    if (minutes >= 0) {
        document.getElementById("min").innerHTML = minutes;
        document.getElementById("m").innerHTML = "m";
    } else if (hours < 0) {
        document.getElementById("min").innerHTML = "";
        document.getElementById("m").innerHTML = "";
    }
    document.getElementById("sec").innerHTML = seconds;
    centiseconds = centiseconds < 10 ? `0${centiseconds}` : centiseconds;
    document.getElementById("csec").innerHTML = centiseconds;
}

document.getElementById("sound").style.display = "none";
document.getElementById("timer").style.display = "none";
document.getElementById("stopwatchimg").style.filter = "invert(45%) sepia(59%) saturate(6184%) hue-rotate(203deg) brightness(94%) contrast(93%)";
document.getElementById("stopwatchp").style.color = "#4285f4";

function selectTimer() {
    document.getElementById("selectTimer").style.borderBottom = "2px solid #4285f4";
    document.getElementById("selectStopwatch").style.borderBottom = " 1px solid #dadce0";
    document.getElementById("stopwatch").style.display = "none";
    document.getElementById("timer").style.display = "";
    document.getElementById("sound").style.display = "";
    document.getElementById("timerimg").style.filter = "invert(45%) sepia(59%) saturate(6184%) hue-rotate(203deg) brightness(94%) contrast(93%)";
    document.getElementById("timerp").style.color = "#4285f4";
    document.getElementById("stopwatchimg").style.filter = "invert(67%) sepia(10%) saturate(8%) hue-rotate(342deg) brightness(87%) contrast(87%)";
    document.getElementById("stopwatchp").style.color = "#949494"
}

function selectStopwatch() {
    document.getElementById("selectTimer").style.borderBottom = "1px solid #dadce0";
    document.getElementById("selectStopwatch").style.borderBottom = "2px solid #4285f4";
    document.getElementById("stopwatch").style.display = "";
    document.getElementById("timer").style.display = "none";
    document.getElementById("sound").style.display = "none";
    document.getElementById("stopwatchimg").style.filter = "invert(45%) sepia(59%) saturate(6184%) hue-rotate(203deg) brightness(94%) contrast(93%)";
    document.getElementById("stopwatchp").style.color = "#4285f4";
    document.getElementById("timerimg").style.filter = "invert(67%) sepia(10%) saturate(8%) hue-rotate(342deg) brightness(87%) contrast(87%)";
    document.getElementById("timerp").style.color = "#949494";
}


let stopwatch;
let isRunningTimer = false;
let hoursTimer = 0, minutesTimer = 5, secondsTimer = 0;


var totalSeconds = hoursTimer * 3600 + minutesTimer * 60 + secondsTimer;
function calculationsTimer() {
    if (totalSeconds > 0) {
        totalSeconds--;
        hoursTimer = Math.floor(totalSeconds / 3600);
        minutesTimer = Math.floor((totalSeconds % 3600) / 60);
        secondsTimer = totalSeconds % 60;
        updateDisplayTimer();
    } else {
        alert('Timer expired!');
        startStop();
    }

}
function updateDisplayTimer() {


    if (hoursTimer > 0) {
        document.getElementById("timerh").innerHTML = hoursTimer;
        document.getElementById("th").innerHTML = "h";
    }
    //  else if (hours < 0) {
    //     document.getElementById("hour").innerHTML = "";
    //     document.getElementById("h").innerHTML = "";
    // }
    // if (minutes > 0) {
    //     document.getElementById("min").innerHTML = minutes;
    //     document.getElementById("m").innerHTML = "m";
    // } else if (minutes < 0) {
    //     document.getElementById("min").innerHTML = "";
    //     document.getElementById("m").innerHTML = "";
    // }


    document.getElementById("timerm").innerHTML = minutesTimer;
    secondsTimer = secondsTimer < 10 ? `0${secondsTimer}` : secondsTimer;
    document.getElementById("timers").innerHTML = secondsTimer;
}


