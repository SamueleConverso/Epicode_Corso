// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

function giveMeRandom(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
  return arr;
}

function checkArray(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > 5) {
      console.log(arr[i] + " è maggiore di 5!");
    } else {
      console.log(arr[i] + " NON è maggiore di 5.");
    }
  }
}

checkArray(giveMeRandom(10));
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/
const shoppingCart = [
  {
    price: 50,
    name: "Oggetto1",
    id: 756,
    quantity: 3,
  },
  {
    price: 25,
    name: "Oggetto2",
    id: 48,
    quantity: 2,
  },
  {
    price: 12,
    name: "Oggetto3",
    id: 5912,
    quantity: 5,
  },
];

function shoppingCartTotal() {
  let finalPrice = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    finalPrice = finalPrice + shoppingCart[i].price * shoppingCart[i].quantity;
  }
  return finalPrice;
}

console.log(shoppingCartTotal());

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
function addToShoppingCart(itemPrice, itemName, itemId, itemQuantity) {
  let newItemPrice = itemPrice;
  let newItemName = itemName;
  let newItemId = itemId;
  let newItemQuantity = itemQuantity;
  let newItem = {};
  newItem.price = newItemPrice;
  newItem.name = newItemName;
  newItem.id = newItemId;
  newItem.quantity = newItemQuantity;
  shoppingCart.push(newItem);
  console.log("Nuova quantità oggetti nel carrello: " + shoppingCart.length);
}

addToShoppingCart(70, "NuovoOggetto", 7878, 4);
addToShoppingCart(40, "AltroOggetto", 688, 1);
/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/
function maxShoppingCart() {
  let prices = [];
  let prevPrice = 0;
  let maxPrice;
  let maxName;
  for (let a = 0; a < shoppingCart.length; a++) {
    for (let b = 0; b < shoppingCart.length; b++) {
      //   prices.push(shoppingCart[i].price);
      if (shoppingCart[b].price > shoppingCart[a].price) {
        maxPrice = shoppingCart[b].price;
        maxName = shoppingCart[b].name;
      }
    }
  }
  // maxPrice = Math.max(...prices);
  return console.log(
    "Prezzo più alto: " + maxPrice + " per l'oggetto: " + maxName
  );
}

maxShoppingCart();

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
