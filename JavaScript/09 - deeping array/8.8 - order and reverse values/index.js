const arrayNumeros = [32, 48, 93, 32634, 2332, 2, 4, 838];

// Ordena a ordem crescente se for b - a fica decrescente
console.log(arrayNumeros.sort((a, b) => a - b));
console.log(arrayNumeros.sort((a, b) => b - a));


const arrayPalavras = [{nome: 'Giulia'}, {nome: 'Wellington'}, {nome: 'Giovanna'}, {nome: 'Victor'}];

// para ordenar palavras por letra
console.log(arrayPalavras.sort((a, b) => a.nome.localeCompare(b.nome)));
console.log(arrayPalavras.sort((a, b) => a.nome.localeCompare(b.nome)).reverse());