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

// O find procura e retorna o primerio elemento que se encaixar na condicao declarada


const indexId = pedidos.findIndex((item) => {
    return item.id === 123;
});
console.log(indexId);

const findId = pedidos.find((element) => {
    return element.id === 123;
});
console.log(findId);


