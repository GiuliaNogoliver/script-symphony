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

// O every retorna true e false, ele quer saber se CADA

const temRefri = pedidos.every((element) => {
    return element.bebida == "Coca cola";
});

console.log(temRefri);

// aqui vai dar false, mas pq se tem Coca cola?
// Ele valida se existe só refrigerante, no caso bebida tem outros valores nos outros objetos

// No exemplo abaixo ele vai dar true pois faz essa validacao

const pedidosGiulia = [
    {
        id: 420,
        nome: "Giulia",
        alimento: "Sanduiche Vegano",
        bebida: "Suco de uva"
    },
    {
        id: 65,
        nome: "Giulia",
        alimento: "Batata Frita",
        bebida: "Suco de uva"
    }
];

const exemplo = pedidosGiulia.every((element) => {
    return element.bebida == "Suco de uva";
});

console.log(exemplo);