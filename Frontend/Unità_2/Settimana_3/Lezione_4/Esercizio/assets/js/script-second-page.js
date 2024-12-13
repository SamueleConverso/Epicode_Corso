const url = new URLSearchParams(window.location.search);
console.log(url);
const photoId = url.get("photoId");
console.log(photoId);
const urlImg = `https://api.pexels.com/v1/photos/${photoId}`;
let dataImg;
const image = document.getElementById("image");
const linkArtist = document.getElementById("linkArtist");

async function getPhoto() {
  try {
    let response = await fetch(urlImg, {
      headers: {
        Authorization:
          "u50VDq1ZjwLEZtdTnhJN9DyOoQqocwzYPSgMeETmVxgCsQIUrAamzHsL",
      },
    });
    dataImg = await response.json();
    console.log(dataImg);
    printImage();
  } catch (error) {
    console.log(error);
  }
}

getPhoto();

function printImage() {
  image.setAttribute("src", dataImg.src.original);
  linkArtist.setAttribute("href", dataImg.photographer_url);
  linkArtist.innerText = dataImg.photographer;
}
