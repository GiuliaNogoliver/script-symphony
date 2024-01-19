// O Arguments é tudo aquilo que é passado como parâmetro dentro da funçao

// voce pode usar return Arguments, onde ele vai criar um objeto passando as informacoes que voce passou separando por virgula.

/*function soma(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    } else {
        console.log("Entradas inválidas");
    }
}
console.log(soma(2, 2));*/

// vc declara um valor inicial para a variavel
/*function subtracao(num1 = 0, num2 = NaN) {       // se passar o nan
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 - num2;
    } else {
        console.log("Entradas inválidas");
    }
}*/

function divisao(num1 = NaN, num2 = NaN) {      // NaN = Not a Number
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 / num2;
    } else {
        let argumentos = "";
        for (i = 0; i < arguments.length; i++) {
            argumentos += arguments[i] + (i < arguments.length - 1 ? ', ' : '');
        }
        return "Entrada inválida, revise seus dados: " + argumentos;
    }
}
console.log(divisao("vel", "giulia", "giovanna"));
console.log(divisao(4, 2));

/*
function divisao(num1 = NaN, num2 = NaN) {      // NaN = Not a Number
    if (typeof num1 === 'number' && typeof num2 === 'number') num1 / num2;

    return console.log("Revise os dados inseridos") && arguments;     //usar com cautela o arguments
}
console.log(divisao(4, 2)); */

// Arguments nao funciona com arrow functions

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// o typeof retorna uma string e no caso do tipo ele retorna o tipo dentro de uma string por isso é em minusculo