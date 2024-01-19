/*
    O strict mode elimina alguns erros silenciosos
    que passariam batido do javascript e os faz emitir erros.

    Além disso, essa forma corrige alguns erros que torman o Javascript
    difícil de ser otimizado, entao algumas vezes os códigos no mod estrito
    rodam mais otimizados e velozes do que os códigos no "modo normal".

    link: https://www.geeksforgeeks,org/scrict-moded-javascript/
 */

"use strict";

//var arguments;

(() => {
    teste = "teste";
})();

console.log(teste);