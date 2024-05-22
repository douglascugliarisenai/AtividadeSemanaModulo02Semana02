/* -------------- Exercício 1 -------------- */
const pegarNumerosPares = require("./m2s02-ex1");
const filtrarAdultos = require("./m2s02-ex2");
const agruparPorCategoria = require("./m2s02-ex3");
const contador = require("./m2s02-ex4");
const calcularProduto = require("./m2s02-ex5");
const transformarArray = require("./m2s02-ex6");

let pares = pegarNumerosPares([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]);
console.log(pares);

/* -------------- Exercício 2 -------------- */

let pessoas = [
    { nome: "Alice", idade: 17 },
    { nome: "Bob", idade: 22 },
    { nome: "Charlie", idade: 16 },
    { nome: "David", idade: 19 }
];

let adultos = filtrarAdultos(pessoas);
console.log(adultos);

/* -------------- Exercício 3 -------------- */

let produtos = [
    { categoria: "eletrônicos", preco: 99.99 },
    { categoria: "livros", preco: 19.99 },
    { categoria: "eletrônicos", preco: 199.99 },
    { categoria: "livros", preco: 29.99 },
    { categoria: "roupas", preco: 49.99 }
];

console.log(agruparPorCategoria(produtos));


/* -------------- Exercício 4 -------------- */

let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2



/* -------------- Exercício 5 -------------- */

let numeros = [1, 2, 3, 4, 5];
console.log(calcularProduto(numeros)); // 120



/* -------------- Exercício 6 -------------- */
function dobrar(numero) {
    return numero * 2;
}
console.log(transformarArray(numeros, dobrar)); // [2, 4, 6, 8, 10]