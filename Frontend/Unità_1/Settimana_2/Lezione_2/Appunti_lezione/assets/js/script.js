document.write("Ciao");

document.getElementById("saluto").innerText = "Hello World!";

let myName = "Samuele";

console.log(typeof myName);

let a = 5;
console.log(!a);

const book = {
  title: "Il nome della rosa",
  author: "Umberto Eco",
  year: 1978,
  editor: "Mondadori",
  published: true,
};

console.log(book);

document.getElementById("myObject").innerText = book.title;

let price = 75;

if (price <= 50) {
  console.log("Conveniente");
} else if (price <= 75) {
  console.log("Prezzo in linea");
} else {
  console.log("Prezzo alto");
}
