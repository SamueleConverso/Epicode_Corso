/*
1) Quali sono i tipi primitivi principali in TypeScript?
string, number, boolean, null, undefined, any, never
*/

/*
2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
*/
let myName: string = "Samuele";
let myAge: number = 26;
let languageTS: boolean = true;

/*
3) Tipizza il parametro della seguente funzione:
*/
const greet = (name: string) => {
  return "Ciao " + name;
};

/*
4) Specifica il tipo di ritorno della seguente funzione:
*/
const sum = (a: number, b: number): number => {
  return a + b;
};

/*
5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
*/
function getTot(price: number, iva: number = 22): number {
  let temp: number = price * iva;
  let tot: number = temp + price;
  return tot;
}

/*
6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
*/
function concStr(str1: string, str2: string): number {
  let newStr: string = str1 + str2;
  let len: number = newStr.length;
  return len;
}

/*
7) Cos'è un Type Union e come si scrive? 
E' un'unione di tipo e si scrive così:
*/
type StrOrNum = string | number;
let myVar: StrOrNum = 100;
myVar = "CIAONE";

/*
8) Crea una variabile che possa contenere un numero, null o undefined.

9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

10) Tipizza il seguente array di numeri nei due modi possibili:

const numbers = [1, 2, 3]

11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

12) Qual è la differenza tra type e interface?

13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

17) Crea un oggetto che implementi l'interfaccia Auto.

18) Cosa sono i Generics in TypeScript?

19) È possibile avere più tipi generici in un'interfaccia?

20) Crea un'interfaccia generica per una risposta API.  
*/
