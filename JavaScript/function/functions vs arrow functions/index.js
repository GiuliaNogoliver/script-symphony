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

function novaFunc(){
    return 123;
}

new novaFunc();

const novaFuncArrow = () => {
    return console.log(123);
};

// new novaFuncArrow(); da erro


/* 
    6. Contexto
    Arrow functions possuem this léxico enquanto o modelo normal possui this dinâmico.

    Isso significa que arrow functions herdam o contexto local de onde foi declarado,
    enquanto o modelo normal possui o contexto associado ao objeto que ele está vinculado
    no momento da chamada.

    Se ele não estiver associado a ninguém na chamada, ele assumirá this automaticamente
    como o contexto global, que no caso dos navegadores é window
*/

const lanches = {
    cardapio: [
        { nome: "x-veg", preco:"R$30" },
        { nome: "x-well", preco:"R$32" }
    ],

    meuPedidoFunc: function(select){
        return console.log(this.cardapio[select]);   // esse this vai pegar o cardapiuo do contexto
    },

    meuPedidoFuncTimeOut: function (){
        setTimeout(function(){
            console.log(this.cardapio);
            console.log(this);
        }.bind(this), 1000); //quero q pegue o this do global e passe para meu contexto
    },

    meuPedidoArrowFunc: (select) => {
        this.cardapio = [
            { nome: "x-veg", preco:"R$30" },
            { nome: "x-well", preco:"R$32" }
        ];

        return console.log(this.cardapio[select]);
    }
};

lanches.meuPedidoFunc(1);
lanches.meuPedidoArrowFunc(2);
lanches.meuPedidoFuncTimeOut();


/*
    7. Constructor
    Arrow functions não podem ser constructores, então não é possivel usar o operador
    new com a mesma.
*/

class newFunc {
    constructor(nome){
        this.nome = nome;
    }
}

const a = new newFunc("Giulia Nogueira");

console.log(a.nome);
// no caso o construtor funciona pois ele nao é uma arrow function