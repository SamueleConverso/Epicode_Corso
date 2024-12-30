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
