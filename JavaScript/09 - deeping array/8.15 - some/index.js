const pedidos = [
    {
        id: 420,
        nome: "Giulia",
        alimento: "Sanduiche Vegano",
        bebida: "Suco de uva"
    },
    {
        id: 123,
        nome: "Wellington",
        alimento: "Sandubao de Bacon",
        bebida: "Agua"
    },
    {
        id: 421,
        nome: "Giovanna",
        alimento: "Porçao de coxinha",
        bebida: "Coca cola"
    },
    {
        id: 134,
        nome: "Arnaldo",
        alimento: "Sandubao de Carne",
        bebida: "Suco de laranja"
    },
    {
        id: 92,
        nome: "Denner",
        alimento: "Porcao de batata frita",
        bebida: "Coca cola"
    }
];

// O some é ALGUM ele retorna true e false

const hasSucodeUva = pedidos.some((element)=>{    // a callback function é diferente da arrow function
    return element.bebida == "Suco de uva";
});

console.log(hasSucodeUva);

// CALLBACK function é quando é passado um metódo como paramentro para uma funcao
// No caso a funçao, some, find, filter, every sao funcoes e dentro do parametro delas estamos passando arrow functions

// a diferença de arrow function e function eu consigo identificar no modo como é declarado "function(){ this };" e arrow "()=>{};"