let Tenis = {
    tipo: "Casual",
    tamanho: 36,
    estoque: true,
    marcas: [{nome: 'Vert'}, {nome: 'Redley'}, {nome:'Vans'}],
    secret: 123
};

delete Tenis.estoque;
console.log(Tenis);

Tenis.estoqueSaoPaulo = true;
console.log(Tenis);