"use strict";

// através do query selector conseguimos acessar os elementos do index html
// o focument é o index.html
// o h1 e o p sao TAGs do HTML que dá para acessar por elas
const h1 = document.querySelector("h1");
h1.style.background = "Purple";

// Acessando a o p
const p = document.querySelector("p");
p.style.background = "Yellow";

// Acessando pela classe usamos o .
const paragrafo2 = document.querySelector(".paragrafo-2");
paragrafo2.style.background = "Green";

// Acessando pelo id usamos o #
const paragrafo3 = document.querySelector("#paragrafo-3");
paragrafo3.style.background = "Pink";

/*console.log(h1);
console.log(paragrafo2)
O console nao vao funcionar pois estamos manipulando o DOM e este nao funciona node
pode usar estes no console da web
*/

// Acessando o titulo da aba
const title = document.querySelector("title");

// definindo um timer para aperecer na aba
let timer = 0;
setInterval(()=>{
    title.innerText = timer;
    timer++;
}, 1000);