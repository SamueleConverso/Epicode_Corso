class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.age = _age;
    this.location = _location;
  }

  getAge() {
    return this.age;
  }

  compareAge(user2) {
    if (this.getAge() > user2.getAge()) {
      return `${this.firstName} è più grande di ${user2.firstName}.`;
    } else if (this.getAge() < user2.getAge()) {
      return `${user2.firstName} è più grande di ${this.firstName}.`;
    } else {
      return `${this.firstName} e ${user2.firstName} hanno la stessa età.`;
    }
  }
}

const user1 = new User("Mario", "Rossi", 55, "Genova");
const user2 = new User("Giovanni", "Verde", 55, "Milano");

console.log(user1.compareAge(user2));

//------------------------------------------

const inputPet = document.getElementById("inputPet");
const inputOwner = document.getElementById("inputOwner");
const inputSpecies = document.getElementById("inputSpecies");
const inputBreed = document.getElementById("inputBreed");
const btnAdd = document.getElementById("btnAdd");
const list = document.getElementById("list");
const redP = document.getElementById("redP");
let pets = [];
let owners = [];

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName;
    this.ownerName = _ownerName;
    this.species = _species;
    this.breed = _breed;
  }
}

btnAdd.addEventListener("click", (e) => {
  e.preventDefault;
  list.innerHTML = "";
  redP.innerText = "";
  let newPetName = inputPet.value;
  let newOwnerName = inputOwner.value;
  let newSpecies = inputSpecies.value;
  let newBreed = inputBreed.value;
  const newPet = new Pet(newPetName, newOwnerName, newSpecies, newBreed);
  pets.push(newPet);
  owners.push(newPet.ownerName);
  let owner1 = newPet.ownerName;
  console.log(pets);
  console.log(owners);
  for (let i = 0; i < pets.length; i++) {
    const newLi = document.createElement("li");
    newLi.innerText = `Nome pet: ${pets[i].petName}. Nome proprietario: ${pets[i].ownerName}.`;
    list.appendChild(newLi);
  }
  for (let b = 0; b < owners.length - 1; b++) {
    let owner2 = owners[b];
    if (owner1 === owner2) {
      redP.innerText = `${owners[b]} ha anche un altro pet!`;
      redP.style.color = "red";
      break;
    }
  }
});
