const mainDiv = document.getElementById("mainDiv");
const btnExtract = document.getElementById("btnExtract");

function drawCells() {
  for (let i = 0; i < 90; i++) {
    const newCell = document.createElement("div");
    mainDiv.appendChild(newCell);
    newCell.innerText = i + 1;
  }
}
drawCells();

const extractedNum = [];
let alreadyExtracted = false;
let ranNum = 0;

const allCells = document.querySelectorAll("#mainDiv div");

btnExtract.addEventListener("click", function () {
  genRanNum();
  alert("Il numero estratto è " + ranNum);

  if (!check()) {
    extractedNum.push(ranNum);
    for (let i = 0; i < allCells.length; i++) {
      if (parseInt(allCells[i].innerText) === ranNum) {
        allCells[i].classList.add("extracted");
      }
    }
  }
  console.log(extractedNum);
});

function genRanNum() {
  ranNum = Math.floor(Math.random() * 90);
  return ranNum;
}

function check() {
  if (extractedNum.includes(ranNum)) {
    return true;
  } else {
    return false;
  }
}
