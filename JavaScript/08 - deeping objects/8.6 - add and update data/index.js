let Tenis = {
    tipo: "Casual",
    tamanho: 36,
    estoque: true,
    preco: 'R$100',
    marcas: [{nome: 'Vert'}, {nome: 'Redley'}, {nome:'Vans'}],
    secret: 123
};

Tenis.tamanho = 37;
Tenis.estoque = false;
Tenis['tipo'] = "Esportivo";

console.log(Tenis.tamanho);
console.log(Tenis['preco']);
console.log(Tenis['tipo']);
console.log(Tenis);
