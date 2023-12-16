// Exercicio IMC
// O IMC é (Kg) dividido pela altura (cm) ao quadrado

let kg = 50;
let m = 1.60;

var imc = Math.round(50 / Math.pow(m, 2));
console.log("Seu IMC é igual a " + imc);

if (imc < 17) {
    console.log("Muito abaixo do peso!");
} else if (imc >= 17 && imc <= 18.49) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc <= 24.99) {
    console.log("Peso normal");
} else if (imc >= 25 && imc <= 29.99) {
    console.log("Peso acima do normal");
} else if (imc >= 30 && imc <= 34.99) {
    console.log("Obesidade I");
} else if (imc >= 35 && imc <= 39.99) {
    console.log("Obesidade II");
} else {
    console.log("IMC inválido");
}
