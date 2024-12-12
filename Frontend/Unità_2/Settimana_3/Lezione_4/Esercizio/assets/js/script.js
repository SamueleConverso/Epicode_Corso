const apiKey = "u50VDq1ZjwLEZtdTnhJN9DyOoQqocwzYPSgMeETmVxgCsQIUrAamzHsL";
const cards = document.querySelectorAll(".card");
const btnLoad = document.querySelector(".btn-primary");
const btnLoad2 = document.querySelector(".btnLoad2");
const allCols = document.querySelectorAll(".col-md-4");
const small = document.querySelectorAll("small");
const inputSearch = document.getElementById("inputSearch");
const btnSearch = document.getElementById("btnSearch");
let data;
let photos;
let url = "https://api.pexels.com/v1/search?query=mountain&per_page=9";
let query;

async function getPhotos(newQuery) {
  query = newQuery;
  try {
    let response = await fetch(createUrl(), {
      headers: {
        Authorization:
          "u50VDq1ZjwLEZtdTnhJN9DyOoQqocwzYPSgMeETmVxgCsQIUrAamzHsL",
      },
    });
    data = await response.json();
    photos = data.photos;
    printImage();
  } catch (error) {
    console.log(error);
  }
}

//getPhotos();

// async function callGetPhotos(newQuery) {
//     query = newQuery;
//     try {
//         getPhotos();
//     } catch (error) {
//         console.log(error);
//     }
// }

btnLoad.addEventListener("click", (e) => {
  e.preventDefault();
  getPhotos("mountain");
  //callGetPhotos("mountain");
  allCols.forEach((col) => {
    col.style.display = "block";
  });
});

btnLoad2.addEventListener("click", (e) => {
  e.preventDefault();
  getPhotos("sunset");
  //callGetPhotos("sunset");
  allCols.forEach((col) => {
    col.style.display = "block";
  });
});

function printImage() {
  for (let i = 0; i < cards.length; i++) {
    let image = cards[i].querySelector(".card-img-top");
    //let image = document.querySelector(`${cards[i]} .card-img-top`);
    image.setAttribute("src", photos[i].src.original);
    console.log(photos[i].id);

    let btn = cards[i].querySelector(".btn-outline-secondary:last-of-type");
    btn.innerText = "Hide";
    let col = document.querySelector(`.col-md-4:nth-of-type(${i + 1})`);

    col.id = photos[i].id;

    small[i].innerText = photos[i].id;

    btn.addEventListener("click", (e) => {
      e.preventDefault();
      deleteCard(col.id);
    });
    console.log(cards[i]);
    console.log(col);
  }
}

function createUrl() {
  if (!query) {
    return "https://api.pexels.com/v1/search?query=mountain&per_page=9";
  } else {
    url = `https://api.pexels.com/v1/search?query=${query}&per_page=9`;
    return url;
  }
}

function deleteCard(newId) {
  let id = newId.toString();
  let col = document.getElementById(id);
  col.style.display = "none";
}

btnSearch.addEventListener("click", (e) => {
  e.preventDefault();
  getPhotos(inputSearch.value);
  allCols.forEach((col) => {
    col.style.display = "block";
  });
});

//
