const pedidos = [
    {
        id: 420,
        nome: "Giulia",
        alimento: "Sanduiche Vegano",
        bebida: "Suco de Uva"
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
    }
];

// Map

pedidos.map((element, index) => {
    console.log(index, element);
    if(element.id == 420){              // o == compara
        element.alimento = "Porcao de Batata frita"; // o = atribui
        console.log(index, element);
    };
});

// O map serve para percorrer o array e iterar os elementos do array