let tenis = {
    tipo: "Casual",
    cores: "Bege e branco",
    cadarco: true,
    // Objeto dentro de outro objeto
    tamanho: {
        espessuaraPalmilha: "media",
        canoAlto: false,
        tenis: 36,
        caixaDimensoes: {
            x: 45,
            y: 15,
            y: 15
        }, 
    },
    // objeto de array
    marcas: ["Vert", "Vans", "Redley"],

    // objeto de array que contem objetos dentro
    marcasEsportivas: [
        {
            nome: "Puma"
        }, 
        {
            nome: "Adidas"
        }, 
        {
            nome: "Fila"
        }
    ],

    // objeto de funcao
    getMarca: function(param){
        return this.marcaArrayObj[param];
    }

};

console.log(tenis)
console.log(tenis.marcasEsportivas)