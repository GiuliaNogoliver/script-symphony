// Mostrar a tabuada no console usando laço

for(let i = 1; i <= 10; i++){
    for(let n = 1; n <= 10; n++){
        //console.log(i + "x" + n + "=" + n*i );
        console.log(`${n} x ${1} = ` + i*n);
    }
    console.log("----------------------------");
}

// para imprimir variveis no console no meio de um texto, usar `` e colocar ${nomeVariavel}