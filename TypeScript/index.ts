// TypeScript
// Executar (tsc --init) dentro na pasta raiz para gerar o tsconfig.json 
// Se executar (npm i -g ts-node) ele fica compilando para js e executando continuamente

console.log("Olá Mundo");

//{} isso é um objeto vazio
type pedido = {
    pratoPrincipal: String;
    sobremesa: String;
    quantidade: Number;
    bebida: String;
};

//isso nao faz sentido pois todas sao obrigatorias passar
/*
type suco = {
    uva : String;
    laranja : String;
    manga : string;
}
*/

//ele quer o pedido dentrodo pedido ele quer bebida, comida e sobremesa
const fazerPedidoWell = (pedido: pedido) => {
    return `Seu pedido é ${pedido.pratoPrincipal} com ${pedido.bebida} e de sobremesa ${pedido.sobremesa} para ${pedido.quantidade} pessoas`;
};

//() é normal e {} é para declarar o OBJETO
console.log(fazerPedidoWell({bebida: "suco" , pratoPrincipal: "strogonoff", sobremesa: "Bolo pote ninho nutela", quantidade: 2}));

const fazerPedido = (pedido: String) => {
    return `Deu certo meu pedido ${pedido}`;
};

console.log(fazerPedido("123"));
