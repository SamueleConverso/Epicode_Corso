"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log("Hello world");
let variable = "Samuele";
let variable2 = 50;
let variable3 = true;
let x;
let y = "EPICODE";
console.log(variable2 + 150); //200
let boh; //type any
const sumFunction = function (n1, n2) {
    return n1 + (n2 || 50);
};
sumFunction(4, 5); //9
const stringArray = [];
const anotherArray = ["Ciao", "Hello"];
const noReturn = function () {
    console.log("ciao");
};
let dontKnow = 50;
dontKnow = "Yuuuu";
const person = {
    firstName: "Gianni",
    lastName: "Morandi",
    skills: [],
};
const person2 = {
    firstName: "Sam",
    lastName: "Conv",
    skills: ["tennis"],
};
const person3 = {
    firstName: "Gian",
    lastName: "Rossi",
};
function myFunc() {
    let a = 90;
    let b = "ciao";
    let c = a + b;
    return c;
}
console.log(myFunc());
//Giorno 2
class Studente {
    nome;
    cognome;
    constructor(_nome, _cognome) {
        this.nome = _nome;
        this.cognome = _cognome;
    }
    getStudente() {
        return `${this.nome} ${this.cognome}`;
    }
    #numeroRandom() {
        return Math.floor(Math.random() * 11);
    }
    somma(num1) {
        return num1 + this.#numeroRandom();
    }
}
class Utente extends Studente {
    eta;
    constructor(_nome, _cognome, _eta) {
        super(_nome, _cognome);
        this.eta = _eta;
    }
    getStudente() {
        return `${this.nome} ${this.cognome} di anni ${this.eta}`;
    }
    static proprieta2 = 50;
}
let nuovoStudente = new Studente("Mario", "Rossi");
console.log(nuovoStudente.getStudente());
console.log(nuovoStudente.somma(15));
let nuovoUtente = new Utente("Aldo", "Bianchi", 30);
console.log(nuovoUtente.getStudente());
//Giorno 3
class Phone {
    numero;
    constructor(_numero) {
        this.numero = _numero;
    }
}
class UtenteConNumeri {
    nome;
    cognome;
    numeri;
    constructor(_nome, _cognome, _numeri) {
        this.nome = _nome;
        this.cognome = _cognome;
        this.numeri = _numeri;
    }
}
let newUtenteConNumeri = new UtenteConNumeri("Mario", "Rossi", [45435435, 234234234, 234234234]);
console.log(newUtenteConNumeri);
class Discente {
    studente;
    eta;
    tecnologia;
    constructor(_studente, _eta, _tecnologia) {
        this.studente = _studente;
        this.eta = _eta;
        this.tecnologia = _tecnologia;
    }
    get getStudente() {
        return `${this.studente} di anni ${this.eta}`;
    }
    get getCorso() {
        return ` sta frequentando il corso di ${this.tecnologia}`;
    }
    completo() {
        return this.getStudente + this.getCorso;
    }
}
let newDiscente = new Discente("Mario Rossi", 25, "TypeScript");
console.log(newDiscente.completo());
let user = [2, "ciao"];
let arr = [true];
user.pop();
arr.push(false);
console.log(user);
