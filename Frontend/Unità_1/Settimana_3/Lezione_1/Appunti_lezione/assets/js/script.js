function sum(num1, num2) {
  let mySum = num1 + num2;
  return mySum;
}

console.log(sum(4, 8));

function sum2(...numbers) {
  let mySum = 0;
  for (let i = 0; i < numbers.length; i++) {
    mySum += numbers[i];
  }
  return mySum;
}

console.log(sum2(5, 5, 5));

const myPerson = {
  name: "Mario",
  surname: "Rossi",
  age: 30,
};

const { name, surname, age } = myPerson; //destructuring operator

console.log(name);
console.log(surname);
console.log(age);

const myArray = ["Direttore: Pippo", "HR: Paperino", "AD: Gastone"];
const [direttore, hr, ad] = myArray;
console.log(direttore);
console.log(hr);
console.log(ad);

console.log(`Riga1
Riga2
Riga3`);

let myString = `Stringa qui con ${direttore}, ${hr} e ${ad}`;
console.log(myString);
