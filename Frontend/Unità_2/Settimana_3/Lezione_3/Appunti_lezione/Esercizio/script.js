const cards = document.querySelectorAll(".card");

const url = "https://striveschool-api.herokuapp.com/books";
let myMovies;

function getData() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      myMovies = data;
      console.log(myMovies);
      printMovies();
    })
    .catch((error) => {
      console.log("Errore: ", error);
    });
}

document.addEventListener("load", init());

function init() {
  getData();
}

function printMovies() {
  for (let i = 0; i < cards.length; i++) {
    let image = cards[i].querySelector("img");
    image.setAttribute("src", myMovies[i].img);

    let price = cards[i].querySelector(".card-text:nth-of-type(2)");
    price.innerText = `${myMovies[i].price}€`;
  }
}

const btnClose = document.querySelectorAll(".btn-close-white");
let arrBtnClose = Array.from(btnClose);

//const cards = document.querySelectorAll(".card");
let arrCards = Array.from(cards);

cards.forEach((card) => {
  card.addEventListener("mouseenter", function () {
    let btn = card.querySelector(".btn-close-white");
    btn.addEventListener("click", function () {
      card.style.display = "none";
    });
  });
});
