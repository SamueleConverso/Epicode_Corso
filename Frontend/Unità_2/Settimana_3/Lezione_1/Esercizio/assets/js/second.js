let petsStr = localStorage.getItem("storedPets");
let petsObj = JSON.parse(petsStr);
console.log(petsObj);
const list2 = document.getElementById("list2");

window.addEventListener("load", function () {
  printList();
});

function printList() {
  for (let i = 0; i < petsObj.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = `Nome pet: ${petsObj[i].petName}. Nome proprietario: ${petsObj[i].ownerName}.`;
    list2.appendChild(newLi);
  }
}
