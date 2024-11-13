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
  if (inpTask.value === "") {
    return;
  }
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
    newLi.addEventListener("click", function () {
      newLi.classList.toggle("barraTesto");
    });

    inpValue = inpTask.value;

    newLi.innerText = arrTasks[i];
    newLi.style.color = "white";
    newLi.style.marginBottom = "10px";
    newLi.style.listStyle = "none";
    newLi.style.width = "100%";
    inpTask.value = "";

    const newDelBtn = document.createElement("button");
    newLi.appendChild(newDelBtn);
    newDelBtn.innerText = "🗑️";
    newDelBtn.setAttribute("type", "button");
    newDelBtn.setAttribute("onclick", `deleteTask(${i})`);
    newDelBtn.style.float = "right";
    newDelBtn.style.marginRight = "10px";
  }
}

function deleteTask(index) {
  arrTasks.splice(index, 1);
  printAllTasks();
}
