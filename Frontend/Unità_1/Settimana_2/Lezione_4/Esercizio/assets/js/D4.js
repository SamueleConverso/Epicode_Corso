/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(base, altezza) {
  let area = base * altezza;
  return area;
}
console.log("Area: " + area(5, 5));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/
function crazySum(num1, num2) {
  if (num1 === num2) {
    return (num1 + num2) * 3;
  } else {
    return num1 + num2;
  }
}
console.log("Crazy sum: " + crazySum(5, 6));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
function crazyDiff(num) {
  if (num > 19) {
    return Math.abs(num - 19) * 3;
  } else {
    return Math.abs(num - 19);
  }
}
console.log("Crazy diff: " + crazyDiff(21));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/
function boundary(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  } else {
    return false;
  }
}
console.log("Boundary: " + boundary(401));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(str) {
  let newStr;
  let splStr = str.split(" ");
  if (splStr[0] === "EPICODE") {
    return splStr.join(" ");
  } else {
    newStr = "EPICODE " + str;
    return newStr;
  }
}

console.log("Epify: " + epify("ciao a tutti"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/
function check3and7(num) {
  if (num % 7 === 0) {
    return console.log("Il numero " + num + " è un multiplo di 7.");
  } else if (num % 3 === 0) {
    return console.log("Il numero " + num + " è un multiplo di 3.");
  } else {
    return console.log(
      "Il numero inserito non è né un multiplo di 7 né un multiplo di 3."
    );
  }
}

check3and7(28);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
function reverseString(str) {
  let arrStr = str.split("");
  let revStr = arrStr.reverse();
  return revStr.join("");
}

console.log(reverseString("Ciao a tutti al contrario"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/
function upperFirst(str) {
  let splStr = str.split(" ");
  for (let i = 0; i < splStr.length; i++) {
    splStr[i] = splStr[i].charAt(0).toUpperCase() + splStr[i].slice(1);
  }
  return splStr.join(" ");
}

console.log(upperFirst("prime lettere maiuscole."));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/
function cutString(str) {
  let paramStr = str;
  let newStr;
  let slcStr = paramStr.slice(1);
  //console.log(slcStr);
  let lunStr = slcStr.length;
  // console.log(lunStr);
  let splStr = slcStr.split("");
  // console.log(splStr);
  let revStr = splStr.reverse();
  // console.log(revStr);
  let slcStr2 = revStr.slice(1);
  //  console.log(slcStr2);
  let revStr2 = slcStr2.reverse();
  // console.log(revStr2);
  newStr = revStr2.join("");
  return newStr;
}

console.log(cutString("Primo e ultimo carattere tagliati"));
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/
function giveMeRandom(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr[i] = Math.floor(Math.random() * 11);
  }
  return arr;
}

console.log(giveMeRandom(20));
/* SCRIVI QUI LA TUA RISPOSTA */
