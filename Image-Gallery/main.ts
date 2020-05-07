var panels = document.querySelectorAll(".panel") as NodeListOf<HTMLElement>;

function toggleOpen(this: HTMLElement): void {
  this.classList.toggle("open");
}

function toggleActive(this: HTMLElement, e: TransitionEvent): void {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => {
  panel.addEventListener("transitionend", toggleActive);
});
