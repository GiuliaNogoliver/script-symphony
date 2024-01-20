// hasOwnProperty

const Tenis = {
    tipo: "Casual",
    tamanho: 36,
    estoque: true,
    marcas: [{nome: 'Vert'}, {nome: 'Redley'}, {nome:'Vans'}],
    secret: 123
};

console.log(Tenis.hasOwnProperty("tamanho"));

if(Tenis.hasOwnProperty("estoque")){
    console.log("O produto está disponível em estoque");
} else {
    console.log("O produto nao está disponível");
}

// Outra forma de validar o dado dentro do objeto 
console.log("tipo" in Tenis);