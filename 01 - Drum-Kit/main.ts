(function () {
  function removeTransition(e: TransitionEvent) {
    if (e.propertyName !== "transform") {
      return;
    }
    console.log("transition event = ", e);
    const target = e.target as HTMLElement;
    target.classList.remove("playing");
    return;
  }

  function playsound(e: KeyboardEvent) {
    const audio = document.querySelector(
      `audio[data-key="${e.keyCode}"]`
    ) as HTMLAudioElement;

    const key = document.querySelector(
      `div[data-key="${e.keyCode}"]`
    ) as HTMLInputElement;

    if (!audio) {
      return;
    }

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.play();
  }

  const keys = Array.from(document.querySelectorAll(".key"));
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );
  window.addEventListener("keydown", playsound);
})();
