let isAlternate = false;

function toggleState() {
  const button = document.querySelector(".two-state-button");
  if (isAlternate) {
    button.classList.remove("alternate");
    button.textContent = "s'abonner";
  } else {
    button.classList.add("alternate");
    button.textContent = "abonné";
  }
  isAlternate = !isAlternate;
}


