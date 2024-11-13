const btnPrintHello = document.getElementById("printHello");
const list = document.getElementById("list");

const myArray = ["Mario", "Aldo", "Giovanna", "Maria"];

document.addEventListener("load", init());

function init() {
  printList();
}

function printList() {
  for (let i = 0; i < myArray.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = myArray[i];
    list.appendChild(newLi);
  }
}

btnPrintHello.addEventListener("click", function () {
  let newName = "Dario";
  newLi = document.createElement("li");
  newLi.innerText = newName;
  list.appendChild(newLi);
});

// oppure

/*btnPrintHello.onclick = function () {
  let newName = "Dario";
  newLi = document.createElement("li");
  newLi.innerText = newName;
  list.appendChild(newLi);
};*/

// oppure

/*function addList() {
  let newName = "Dario";
  newLi = document.createElement("li");
  newLi.innerText = newName;
  list.appendChild(newLi);
}*/
