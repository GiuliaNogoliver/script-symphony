function soma(num1 , num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } else {
        console.log("Entradas inválidas");
    }
}
console.log(soma(2, 2));

// vc declara um valor inicial para a variavel
function subtracao(num1 = 0, num2 = NaN){       // se passar o nan
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 - num2;
    } else {
        console.log("Entradas inválidas");
    }     
}

function divisao() {
    return arguments;     //usar com cautela o arguments
}
console.log(subtracao(1, 2, 3, "Teste"));

// Arguments nao funciona com arrow functions

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof
// o typeof retorna uma string e no caso do tipo ele retorna o tipo dentro de uma string por isso é em minusculo