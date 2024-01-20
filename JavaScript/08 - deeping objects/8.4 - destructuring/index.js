const Tenis = {
    tamanho: 36,
    //marca: [{nome: "Vert"},{nome: "Redley"}],
    estoque: true,
    secret: 123
}

// Como em marca tiramos podemos definir um valor para CASO nao venha
const { tamanho, marca = "Nao informado", estoque } = Tenis;

console.log(Tenis);
console.log(tamanho, marca , estoque);

const { secret: randomNumber } = Tenis;

//console.log(secret);
console.log("------------");
console.log(Tenis.secret);
console.log(randomNumber);