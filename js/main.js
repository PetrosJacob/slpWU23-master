let layer = document.querySelector(".fade-layer")
layer.addEventListener("click", showMenu)

let button = document.querySelector(".menu-button")
button.addEventListener("click", showMenu)


function showMenu() {
  let menu = document.querySelector(".menu")
  menu.classList.toggle("show")

  let funnyMenu = document.querySelector(".funnyMenu")
  funnyMenu.classList.toggle("show")


  let layer = document.querySelector(".fade-layer")
  layer.classList.toggle("visible")
}

let flipCards = document.querySelectorAll(".flip-card");
flipCards.forEach(flipCard => {
  flipCard.addEventListener("click", flipCardFunction);
});

function flipCardFunction() {
  let flipCardInner = this.querySelector(".flip-card-inner");
  flipCardInner.classList.toggle("flip-card-flipped");
}