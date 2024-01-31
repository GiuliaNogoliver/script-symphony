const pedidos = [
    {
        id: 420,
        nome: "Giulia",
        alimento: "Sanduiche Vegano",
        bebida: "Suco de uva",
        preco: 52
    },
    {
        id: 123,
        nome: "Wellington",
        alimento: "Sandubao de Bacon",
        bebida: "Agua",
        preco: 32
    },
    {
        id: 421,
        nome: "Giovanna",
        alimento: "Porçao de coxinha",
        bebida: "Coca cola",
        preco: 36
    },
    {
        id: 134,
        nome: "Arnaldo",
        alimento: "Sandubao de Carne",
        bebida: "Suco de laranja",
        preco: 41
    },
    {
        id: 92,
        nome: "Denner",
        alimento: "Porcao de batata frita",
        bebida: "Coca cola",
        preco: 25
    }
];

// O reduce pode manipular valores de um objeto dentro de um array

const totalPedidos = pedidos.reduce((total, element)=>{
    return total + element.preco;
}, 0);

console.log(totalPedidos);