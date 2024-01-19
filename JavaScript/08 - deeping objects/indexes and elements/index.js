function item( tipo, valor, estoque){
    return {
        tipo,
        valor,
        estoque
    };
};

console.log("Notebook", 'R$3500,00', true);

const itemTipo = "Monitor";
const itemValor = 'R$3900,89';
const itemEstoque = false;

function item2(){
    return {
        itemTipo,
        itemValor,
        itemEstoque
    };
};

const item3 = {
    itemTipo,
    itemValor,
    itemEstoque
}

const item4 = {
    getItemTipo(){
        return 'Mouse';
    }
}

console.log(item2());
console.log(item3);
console.log(item4.getItemTipo())