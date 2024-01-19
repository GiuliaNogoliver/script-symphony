// Operador Ternário

// ele se baseia em possuir uma condiçao, caso seja verdadeiro (?) ent colocar o retorno caso seja falso (:) retorno
const speed = 75;
const warn = 50;

const condition = speed > warn
    ? console.log("Levou uma multa!")
    : console.log("Esta no limite de velocidade");

// Um tipo diferente de If e Else