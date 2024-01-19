// A closure é quando as funcoes nao podem ser acessadas fora do seu escopo

function QualSeuNome(nomeParam){
    const frase = 'Seu nome é';

    function seuNome(){
        return `${frase} ${nomeParam}`;
    }

    // note aqui eu estou devolvendo a funcao no retorno logo ela sera acessada pelo console log
    return seuNome();
};


console.log(QualSeuNome("Giulia"));

function Calculadora( num1 , num2 ){
    const frase =  'o resultado:';
    
    const soma = () => {
        return `${frase} ${num1 + num2}`;
    };

    const subtracao = () => {
        return `${frase} ${num1 - num2}`;
    };

    const multiplicacao = () => {
        return `${frase} ${num1 * num2}`;
    };

    const divisao = () => {
        return `${frase} ${num1 / num2}`;
    };

    // Novamente retorno todas as funcoes exeto divisao, ela nao pode ser acessada
    return {
        Soma: soma(),
        Subtracao: subtracao(),
        Multiplicacao: multiplicacao()
    }
};


console.log(Calculadora( 25, 58 ))
console.log(Calculadora( 25, 58 ).Soma)
console.log(Calculadora( 25, 58 ).Divisao)