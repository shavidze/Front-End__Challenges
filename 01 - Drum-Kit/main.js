"use strict";
(function () {
    function removeTransition(e) {
        if (e.propertyName !== "transform") {
            return;
        }
        console.log("transition event = ", e);
        const target = e.target;
        target.classList.remove("playing");
        return;
    }
    function playsound(e) {
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
        if (!audio) {
            return;
        }
        key.classList.add("playing");
        audio.currentTime = 0;
        audio.play();
    }
    const keys = Array.from(document.querySelectorAll(".key"));
    keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
    window.addEventListener("keydown", playsound);
})();
