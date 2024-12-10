const pText = document.getElementById("pText");
const inputName = document.getElementById("inputName");
const btnAdd = document.getElementById("btnAdd");
const btnDel = document.getElementById("btnDel");

btnAdd.addEventListener("click", function () {
  let textName = inputName.value;
  if (textName !== "") {
    pText.innerText = `Ciao, ${textName}!`;
    localStorage.setItem("storedName", textName);
  }
  inputName.value = "";
});

btnDel.addEventListener("click", function () {
  let noText = "No data...";
  pText.innerText = `${noText}`;
  localStorage.removeItem("storedName");
  inputName.value = "";
});

//--------------------------------------------------------

const textCounter = document.getElementById("textCounter");

window.addEventListener("load", init());

function init() {
  let numCounter = 0;
  if (sessionStorage.getItem("counter") !== null) {
    numCounter = parseInt(sessionStorage.getItem("counter"));
    startCounter(numCounter);
  } else {
    numCounter = 0;
    startCounter(numCounter);
  }
}

function startCounter(count) {
  let num = count;
  setInterval(() => {
    num += 1;
    textCounter.innerText = `${num}`;
    sessionStorage.setItem("counter", num);
  }, 1000);
}
