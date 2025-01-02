console.log("Hello world");

let variable = "Samuele";
let variable2 = 50;
let variable3 = true;

let x: string;
let y: string = "EPICODE";

console.log(variable2 + 150); //200

let boh; //type any

const sumFunction = function (n1: number, n2?: number) {
  return n1 + (n2 || 50);
};

sumFunction(4, 5); //9

const stringArray: string[] = [];

const anotherArray: Array<string> = ["Ciao", "Hello"];

const noReturn = function () {
  console.log("ciao");
};

type CustomType = string | number; //union
let dontKnow: CustomType = 50;
dontKnow = "Yuuuu";

const person = {
  firstName: "Gianni",
  lastName: "Morandi",
  skills: [],
};

interface HumanBeing {
  firstName: string;
  lastName: string;
  skills?: string[];
}

const person2: HumanBeing = {
  firstName: "Sam",
  lastName: "Conv",
  skills: ["tennis"],
};

const person3: HumanBeing = {
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
  nome: string;
  cognome: string;

  constructor(_nome: string, _cognome: string) {
    this.nome = _nome;
    this.cognome = _cognome;
  }

  getStudente(): string {
    return `${this.nome} ${this.cognome}`;
  }

  #numeroRandom(): number {
    return Math.floor(Math.random() * 11);
  }

  somma(num1: number): number {
    return num1 + this.#numeroRandom();
  }
}

class Utente extends Studente {
  eta!: number;

  constructor(_nome: string, _cognome: string, _eta: number) {
    super(_nome, _cognome);
    this.eta = _eta;
  }

  getStudente(): string {
    return `${this.nome} ${this.cognome} di anni ${this.eta}`;
  }

  static proprieta2: number = 50;
}

let nuovoStudente = new Studente("Mario", "Rossi");
console.log(nuovoStudente.getStudente());
console.log(nuovoStudente.somma(15));

let nuovoUtente = new Utente("Aldo", "Bianchi", 30);
console.log(nuovoUtente.getStudente());
