"use strict";
var panels = document.querySelectorAll(".panel");
function toggleOpen() {
    this.classList.toggle("open");
}
function toggleActive(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-action");
    }
}
panels.forEach(function (panel) { return panel.addEventListener("click", toggleOpen); });
panels.forEach(function (panel) {
    panel.addEventListener("transitionend", toggleActive);
});
