// O nome da funcao pode comecar com maiusculo minusculo

// funcao construtora
function Name( name ) {
    this.name = name;
}

// objeto
const giulia = new Name( "Giulia" );

// imprimir o objeto feito com a funcao
console.log(giulia.name);

console.log(new Date());