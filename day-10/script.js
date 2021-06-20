const backFace = document.querySelectorAll(".back-face");
const cards = document.querySelectorAll(".card");

let cardsSelected = [];
let cardsId = [];
let cardsWon = [];

function flipCard() {
  this.classList.add("flip");
  cardsSelected.push(this.getAttribute("data-name"));
  cardsId.push(this.getAttribute("data-id"));
  // console.log(cardsSelected);
  // console.log(cardsId);
  if (cardsSelected.length === 2) {
    setTimeout(checkForMatch, 500);
  }
}

function checkForMatch() {
  let firstCard = cards[cardsId[0] - 1];
  let secondCard = cards[cardsId[1] - 1];

  if (cardsId[0] == cardsId[1]) {
    // console.log("clicked same img");
    cardsId.pop();
    cardsSelected.pop();
  } else if (cardsSelected[0] === cardsSelected[1]) {
    // console.log("WON");
    firstCard.classList.add("hide");
    secondCard.classList.add("hide");
    cardsWon.push(cardsSelected);
  } else {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  }

  cardsSelected = [];
  cardsId = [];
}

cards.forEach((card) => card.addEventListener("click", flipCard));
