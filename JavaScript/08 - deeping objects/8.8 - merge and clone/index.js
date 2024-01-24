// clonar

let Tenis = {
    tipo: "Casual",
    tamanho: 36,
    estoque: true,
    marcas: [{nome: 'Vert'}, {nome: 'Redley'}, {nome:'Vans'}],
    secret: 123
};

let cloneTenis = Tenis;
console.log(cloneTenis)

// Mesclar

let Cadarco = {
    material: {
        tipo: 'poliester',
        espessura: 3
    },
    tamanho: 50,
    cor: 'branco',
    hasPonta: true,
    materialPonta: 'ferro'
};

let tenisCadarcoMesclar = Object.assign(Tenis, Cadarco);
console.log(tenisCadarcoMesclar);


let tenisCadarcoMesclar2 = {Tenis, ...Cadarco};
console.log(tenisCadarcoMesclar2);

