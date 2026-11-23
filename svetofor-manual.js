var redLamp = document.getElementById("redLamp");
var yellowLamp = document.getElementById("yellowLamp");
var greenLamp = document.getElementById("greenLamp");
var statusText = document.getElementById("signalStatus");

function setSignal(color) {
    redLamp.classList.remove("on");
    yellowLamp.classList.remove("on");
    greenLamp.classList.remove("on");

    if (color == "red") {
        redLamp.classList.add("on");
        statusText.textContent = "Красный — стой!";
    }

    if (color == "red-yellow") {
        redLamp.classList.add("on");
        yellowLamp.classList.add("on");
        statusText.textContent = "Жди! Скоро зелёный.";
    }

    if (color == "green") {
        greenLamp.classList.add("on");
        statusText.textContent = "Зелёный — иди!";
    }

    if (color == "yellow") {
        yellowLamp.classList.add("on");
        statusText.textContent = "Жёлтый — приготовься!";
    }
}

setSignal("red");
