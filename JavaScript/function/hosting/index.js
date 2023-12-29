// Hosting é sobre a ordem de como vc declara as funcoes e como o javascripts interpreta

console.log(soma()); // veja que este ele é capaz de interpretar e inprimir o 2
console.log(x); // ja quando vc declara a var lá em baixo ele nao compreende

function soma(){
    return 1 + 1;
}

var x = 10;

// Ele basicamente vai "organizar" seu codigo assim para compilar

function soma(){
    return 1 + 1;
}
console.log(soma());

var x;
console.log(x);
x = 10;