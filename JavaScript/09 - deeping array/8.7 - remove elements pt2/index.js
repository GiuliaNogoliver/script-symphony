let arr = [
    { nome: "Giulia", tel: 11949294733 },
    { nome: "Well",   tel: 11999999999 },
    { nome: "Vitu",   tel: 11988888888 },
    { nome: "Giovanna", tel: 1197777777 },
    { nome: "Sabrina", tel: 1196666666 }
];

console.table(arr);

// o slice faz uma copia dos elementos (fatia)
const arr2 = arr.slice(0, 3);
console.table(arr2);

// Remove o elemento (inicio, qnts elementos)  e retorna (emendar)
console.table(arr.splice(3, 1));