const arrayNumeros = [32, 48, 93, 32634, 2332, 2, 4, 838];

// For each igual em java
console.log("For each...");
for(let i = 0; i < arrayNumeros.length; i++){
    console.log(arrayNumeros[i]);
};

// For in
console.log("For in...");
for(let item in arrayNumeros){
    console.log(item);
};

// For of
console.log("For of...");
for(let item of arrayNumeros){
    console.log(item);
};


// a diferenca de for in e for of é a sintaxe dos objetos