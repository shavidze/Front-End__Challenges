"use strict";
(function () {
  var player = document.querySelector(".player");
  var video = player.querySelector(".viewer");
  var progress = player.querySelector(".progress");
  var progressBar = player.querySelector(".progress__filled");
  var toggle = player.querySelector(".toggle");
  var skipButtons = player.querySelectorAll("[data-skip]");
  var ranges = player.querySelectorAll(".player__slider");
  function togglePlay() {
    var method = video.paused ? "play" : "pause";
    video[method]();
  }
  function updateButton() {
    var icon = this.paused ? "►" : "❚ ❚";
    console.log(icon);
    toggle.textContent = icon;
  }
  function skip() {
    var skip = this.dataset.skip;
    video.currentTime += parseFloat(skip);
  }
  function handleRangeUpdate() {
    var name = this.name;
    var key = name;
    video[key] = parseFloat(this.value);
  }
  function handleProgress() {
    var percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = percent + "%";
  }
  function scrub(e) {
    var scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
  }
  video.addEventListener("click", togglePlay);
  video.addEventListener("play", updateButton);
  video.addEventListener("pause", updateButton);
  video.addEventListener("timeupdate", handleProgress);
  toggle.addEventListener("click", togglePlay);
  skipButtons.forEach(function (button) {
    return button.addEventListener("click", skip);
  });
  ranges.forEach(function (range) {
    return range.addEventListener("change", handleRangeUpdate);
  });
  ranges.forEach(function (range) {
    return range.addEventListener("mousemove", handleRangeUpdate);
  });
  var mousedown = false;
  progress.addEventListener("click", scrub);
  progress.addEventListener("mousemove", function (e) {
    return mousedown && scrub(e);
  });
  progress.addEventListener("mousedown", function () {
    return (mousedown = true);
  });
  progress.addEventListener("mouseup", function () {
    return (mousedown = false);
  });
})();
