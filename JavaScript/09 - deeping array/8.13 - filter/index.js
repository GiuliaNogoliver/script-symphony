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

// O filter faz exatamente o trabalho de filtrar de acordo com a condicao que vc colocar

const bebidasFilter = pedidos.filter((element, index) => {  // armazenando os dados filtrados numa nova const
    return element.bebida == "Coca cola";
});
console.log(bebidasFilter);
