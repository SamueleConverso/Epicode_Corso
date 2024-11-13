// Intercetti i div principali
const mainBox = document.getElementById("mainBox");
const inputBox = document.getElementById("inputBox");
const listBox = document.getElementById("listBox");

// Intercetto gli altri elementi
const inpTask = document.getElementById("inpTask");
const btnAddTask = document.getElementById("btnAddTask");
const mainList = document.getElementById("mainList");

// Variabili globali utili
let inpValue = ""; // Variabile che salva l'input della nuova task
const arrTasks = [];
const arrLi = [];

btnAddTask.addEventListener("click", function (e) {
  e.preventDefault();
  addNewTask();
  printAllTasks();
});

function addNewTask() {
  arrTasks.push(inpTask.value);
}

function printAllTasks() {
  mainList.innerHTML = "";
  for (let i = 0; i < arrTasks.length; i++) {
    let newLi = document.createElement("li");
    mainList.appendChild(newLi);
    arrLi.push(newLi);
    newLi.addEventListener("click", delLi(i));

    inpValue = inpTask.value;
    //  console.log(inpValue);
    newLi.innerText = arrTasks[i];
    newLi.style.color = "white";
    newLi.style.marginTop = "5px";
    newLi.style.listStyle = "none";
    inpTask.value = "";

    const newDelBtn = document.createElement("button");
    newLi.appendChild(newDelBtn);
    newDelBtn.innerText = "🗑️";
    newDelBtn.setAttribute("type", "button");
    newDelBtn.setAttribute("onclick", `deleteTask(${i})`);
    newDelBtn.style.marginLeft = "100px";
  }
}

function deleteTask(index) {
  arrTasks.splice(index, 1);
  printAllTasks();
}

function delLi(index) {
  arrLi[index];
}
