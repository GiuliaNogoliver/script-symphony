// Escopo global

// Se vc cria a o const e o let num escopo nao consegue acessar por fora
{
    const a = 1;
    console.log(a);
}
//console.log(a); Nao funciona pois b foi declarado dentro do escopo


// Se vc cria a o let e o let num escopo nao consegue acessar por fora
{
    let b = 2;
    console.log(b);
}
//console.log(b); Nao funciona pois b foi declarado dentro do escopo

// Agora se vc cria o vapode ser acessado dentro e fora do escopo!!
{
    var c = 3;
    console.log(c);
}
console.log(c); // Este pode ser acessado