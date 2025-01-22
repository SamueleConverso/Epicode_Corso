"use strict";
/*
1) Quali sono i tipi primitivi principali in TypeScript?
string, number, boolean, null, undefined, any, never
*/
/*
2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.
*/
let myName = "Samuele";
let myAge = 26;
let languageTS = true;
/*
3) Tipizza il parametro della seguente funzione:
*/
const greet = (name) => {
    return "Ciao " + name;
};
/*
4) Specifica il tipo di ritorno della seguente funzione:
*/
const sum = (a, b) => {
    return a + b;
};
/*
5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.
*/
function getTot(price, iva = 22) {
    let temp = price * iva;
    let tot = temp + price;
    return tot;
}
/*
6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.
*/
function concStr(str1, str2) {
    let newStr = str1 + str2;
    let len = newStr.length;
    return len;
}
let myVar = 100;
myVar = "CIAONE";
let myVar2 = 10;
let day;
day = "Monday";
/*
10) Tipizza il seguente array di numeri nei due modi possibili:
*/
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];
/*
11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.
*/
let tup = [
    "Ciao",
    "come",
    "stai",
    0,
    1,
];
const studenti = [
    {
        nome: "Samuele",
        voto: 10,
    },
    {
        nome: "Gianny",
        voto: 10,
    },
];
/*
17) Crea un oggetto che implementi l'interfaccia Auto.
*/
let myAuto = {
    nome: "macchina",
    ruote: 4,
    cilindrata: 999,
    porte: 5,
};
let myResp = {
    nome: "Sam",
    cognome: "Conv",
    età: 26,
};
