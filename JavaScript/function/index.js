// A function é um conjunto de comandos qie executa uma terefa ou calcula algo

// Function declaraçao
function funcaoDeclaracao() {
    return 2 * 2;
};
console.log(funcaoDeclaracao());

// Function expression
const funcaoExpression = function () {
    return 2 * 2;
};
console.log(funcaoExpression());

// Arrow function 
const funcaoArrow = () => {
    return 2 * 2;
}
// a a rrow function sempre é declarada como const
console.log(funcaoArrow());