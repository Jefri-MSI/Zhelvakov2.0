
var redLamp = document.getElementById("redLamp");
var yellowLamp = document.getElementById("yellowLamp");
var greenLamp = document.getElementById("greenLamp");
var statusText = document.getElementById("signalStatus");
var timerText = document.getElementById("timerText");
var pauseButton = document.getElementById("pauseButton");
var restartButton = document.getElementById("restartButton");

var color = 0;
var seconds = 5;
var paused = false;

function showLight() {
    redLamp.classList.remove("on");
    yellowLamp.classList.remove("on");
    greenLamp.classList.remove("on");

    if (color == 0) {
        redLamp.classList.add("on");
        statusText.textContent = "Красный — стой!";
    }

    if (color == 1) {
        redLamp.classList.add("on");
        yellowLamp.classList.add("on");
        statusText.textContent = "Жди! Скоро зелёный.";
    }

    if (color == 2) {
        greenLamp.classList.add("on");
        statusText.textContent = "Зелёный — иди!";
    }

    if (color == 3) {
        yellowLamp.classList.add("on");
        statusText.textContent = "Жёлтый — приготовься!";
    }


    if (color == 2 && seconds <= 3 && paused == false) {
        greenLamp.classList.add("blink");
    } else {
        greenLamp.classList.remove("blink");
    }

    timerText.textContent = "Осталось " + seconds + " секунд";
}

function nextColor() {
    color = color + 1;

    if (color == 4) {
        color = 0;
    }

    if (color == 0 || color == 2) {
        seconds = 5;
    } else {
        seconds = 2;
    }
}

pauseButton.onclick = function () {
    paused = !paused;

    if (paused == true) {
        pauseButton.textContent = "Продолжить";
        greenLamp.classList.remove("blink");
        timerText.textContent = "Пауза";
    } else {
        pauseButton.textContent = "Пауза";
        showLight();
    }
};

restartButton.onclick = function () {
    color = 0;
    seconds = 5;
    paused = false;
    pauseButton.textContent = "Пауза";
    showLight();
};

setInterval(function () {
    if (paused == false) {
        seconds = seconds - 1;

        if (seconds == 0) {
            nextColor();
        }

        showLight();
    }
}, 1000);

showLight();
