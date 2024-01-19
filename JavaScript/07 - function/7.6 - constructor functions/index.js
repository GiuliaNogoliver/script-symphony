// O nome da funcao pode comecar com maiusculo minusculo

// funcao construtora
function Nome( nome, sobrenome ) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    // criando uma funcao dentro de uma funcao construtora
    this.nomeCompleto = () => {
        const nomeCompleto = `${nome} ${sobrenome}`;
        return nomeCompleto;
    }
}

// objeto
const giulia = new Nome( "Giulia", "Nogueira de Oliveira" );

// imprimir o objeto feito com a funcao
console.log(giulia.nome);
// como nome completo é uma funcao tem q colocar os parametros()
console.log(giulia.nomeCompleto());

console.log(new Date());


// Desafio calculadora com 4 operacoes

function Calculadora( num1, num2 ){
    this.soma = ( num1, num2 ) => {
        // tem q usar essa estrutura ${} pois estamos pegando um parametro e passando para dentrod e outra funcao
        return `${num1 + num2}`;
    };
    this.subtracao = ( num1, num2 ) =>{
        return `${num1 - num2}`;
    };
    this.multiplicacao = ( num1, num2 ) =>{
        // se ficar assim `${num1} * ${num2}` vai imprimir 2 x 3
        // se deixar assim `${num1 * num2}` ele entrega o valor pois esta sendo multiplicado dentro da chave da variavel
        return `${num1} * ${num2}`;
    };
};

const calculadora = new Calculadora(2, 3);

console.log(calculadora.soma());
console.log(calculadora.subtracao());
console.log(calculadora.multiplicacao());

console.log(calculadora.soma(3, 3));
console.log(calculadora.subtracao(4, 4));
console.log(calculadora.multiplicacao(5, 5));