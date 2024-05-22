const pegarNumerosPares = require("./m2s02-ex1");
const filtrarAdultos = require("./m2s02-ex2");

let pares = pegarNumerosPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
console.log(pares);



let pessoas = [
    { nome: 'Alice', idade: 17 },
    { nome: 'Bob', idade: 22 },
    { nome: 'Charlie', idade: 16 },
    { nome: 'David', idade: 19 }
    ];

let adultos = filtrarAdultos(pessoas);
console.log(adultos);