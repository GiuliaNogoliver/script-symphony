// Tipo Objeto

//  Para declarar se coloca entre {chaves}
objeto01 = {};
console.log(objeto01);

//  assim como em java ele pode ter atributos e metodos
objeto02 = {
    //  se declara o nome da propriedade dois pontos: e tipo de valor q recebe
    cor: String,
    tamanho: Number,
    peso: Number
}

console.log(objeto02);


//  Pode se também já declarar o valor dos atributos do objeto
objeto03 = {
    cor: "rosa",
    tamanho: 34,
    peso: 200
};
console.log(objeto03.cor, objeto03.tamanho, objeto03.peso);

// declarando um objeto dentro de outro objeto
objeto04 = {
    cor: String,
    objeto05 : {
        tipo: String,
        formato: String,
        grande: false
    }
};
console.log(objeto04 ,objeto04.objeto05);
