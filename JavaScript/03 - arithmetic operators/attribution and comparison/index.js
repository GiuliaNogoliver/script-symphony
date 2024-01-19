// Atribuição

/*  =, +=, -=, *=, /=, %=
 *  let e var -> trabalha por excopo, pode ser alterado
 *  const -> é constante, nao pode ser alterado
 */

let a = 6;
console.log(a);

let b = 2;
console.log(b);

a += b;
console.log(a);

//  o valor esta sendo alterado e manipulado linha por linha, naoi reseta o valor da variavel antes de cada operacao

a -= b;
console.log(a);

a *= b;
console.log(a);

a /= b;
console.log(a);

a %= b;
console.log(a);


//  Comparação

/*
*   operadores - retornam boolean
*   == compara somente o valor da variavel
*   === compara tipo e o valor da variavel
*   != compara somente o valor da variavel
*   !== compara tipo e o valor da variavel
*   >, <, <=, >=
*/

a = 5;
b ="5";
console.log(a == b);
console.log(a === b);

console.log(a != b);
console.log(a !== b);

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);