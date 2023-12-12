// Tipo Array

//  ele é difinido por colchetes[e, seus, valores, separados, por, virgula]
console.log([1, 2, 3, 4, 5]);

//  pode conter todos os tipos de dados num mesmo array
console.log(1, 2, 3, 1.2, "teste", true, undefined, null);

// sempre começar em zero so for definir números
console.log([0, 1, 2, 3])

// pode definir chave
ArrayA = [a =>"Giulia", b => "Wellington"];
console.log(ArrayA);

// note que => é para definir funções arrow

// MAS por padrão ele já define com númericos 0123
// console.log([1 => "Giulia", 2 => "Wellington"]); nao vai funciona

// verificar o tamanho do array
Array = [1, 2, 3, "a", "b"];
console.log(Array.length);