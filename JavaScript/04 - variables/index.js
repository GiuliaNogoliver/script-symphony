/*
var -> Ultilizado globalmente 
let -> é gerado dentro de um escopo
const -> é gerado dentro de um escopo porém só podemos armazenar dados 1x
*/

// pode se armazenar todos os tipos de dados dentro das variaveis

var kg = 22;
var cachorro = "Kiara";
console.log(cachorro, kg);

// pode ser alterada

cachorro = "Teca";
console.log(cachorro);

cachorro = 2019;
console.log(cachorro);

let valor = 25.60;
let lanche = "Bolovo";
console.log(lanche, valor);

// o let funciona muito semelhante ao var pois vc consegue mudar depois o dado mesmo q este seja de tipos diferentes.
valor =  23.60;
console.log(valor);

const idade = 21;
const nome = "Giulia";
console.log(nome, idade);

// note que quando se muda a const da erro, pois esta é imutavel depois de uma vez definido um valor
/*idade = 22;
console.log(idade);*/