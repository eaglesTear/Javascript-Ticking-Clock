setInterval(setClock, 1000)

// TARGET EACH HAND ON THE CLOCK READY FOR MOVEMENT ACCORDING TO TIME

const HOUR_HAND = document.querySelector("[data-hour-hand]");
const MINUTE_HAND = document.querySelector("[data-minute-hand]");
const SECOND_HAND = document.querySelector("[data-second-hand]");

function setClock() {
    const CURRENT_DATE = new Date();
    const SECONDS_RATIO = CURRENT_DATE.getSeconds() / 60;
    const MINUTES_RATIO = (SECONDS_RATIO + CURRENT_DATE.getMinutes()) / 60;
    const HOURS_RATIO = (MINUTES_RATIO + CURRENT_DATE.getHours()) / 12;
    setRotation(SECOND_HAND, SECONDS_RATIO);
    setRotation(MINUTE_HAND, MINUTES_RATIO);
    setRotation(HOUR_HAND, HOURS_RATIO);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360);
}

setClock();