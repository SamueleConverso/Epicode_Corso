/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
function scriviListaDatatype() {
  console.log(
    "In JavaScript esistono i seguenti datatype: stringhe, numeri, boolean."
  );
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/
const myName = "Samuele";

function scriviNome() {
  console.log("Il mio nome è: " + myName);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/
let numero1 = 12;
let numero2 = 20;

function sommaNumeri() {
  console.log("La somma tra i due numeri è:", numero1 + numero2);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/
let x = 12;

function scriviX() {
  console.log("La x è:", x);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/
function provaCambiamentoValore() {
  try {
    myName = "Converso";
  } catch (error) {
    console.error("Errore durante la riassegnazione di myName:", error.message);
  }
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/
function sottrazioneNumeri() {
  console.log("La sottrazione tra i due numeri è:", 4 - x);
}
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/
const name1 = "john";
const name2 = "John";

function verificaDisuguaglianza() {
  if (name1 !== name2) {
    console.log("I nomi sono diversi!");
  } else if (name1 === name2) {
    console.log("I nomi sono uguali!");
  }
}
/* SCRIVI QUI LA TUA RISPOSTA */
