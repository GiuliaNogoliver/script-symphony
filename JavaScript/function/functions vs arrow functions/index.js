//  1. Nome da função/como declara

function nomeFuncao(){
    return "Giulia";
}
console.log(nomeFuncao());

const nomeFuncArrow = () => {
    return "Giulia"
};
console.log(nomeFuncArrow());


//    2. Retorno

const nomeFuncArrowReturn = () => "Giulia"; //ja declaro o retorno nao preciso escrever return
console.log(nomeFuncArrowReturn());

//  3. Não tem Hoisting

//console.log(nomeFuncArrowHoisting()); //nao funciona
const nomeFuncArrowHoisting = () => {
    return "Arrow não tem hoisting"
}

function nomeFuncHoisting(){
    return "Function normal tem hoisting"
}
console.log(nomeFuncHoisting());

//  4. Arguments

const nomeFuncArrowArguments = () => {
    return arguments;
}
//console.log(nomeFuncArrowArguments()); //nao funciona

function nomeFuncArguments(){
    return arguments;
}
console.log(nomeFuncArguments());

const nomeFuncArrowParams = param => param; //da para deixar param sem parenteses

//   5. Não pode ser invocada com new


/* 
    6. Contexto
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
    no momento da chamada.

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
    como o contexto global, que no caso dos navegadores é window
*/

/*
    7. Constructor
    Arrow functions não podem ser constructores, então não é possivel usar o operador
    new com a mesma.
*/