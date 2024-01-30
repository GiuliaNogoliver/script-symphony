const listaDeContatos = [
    {nome: 'Wellington'},
    {nome: 'Giovanna'},
    {nome: 'Victor'},
    {nome: 'Simone'},
    {nome: 'Alana'}
];

// For each

listaDeContatos.forEach((item, i) => {   // esse i é de index, mostra o indedx do array
    console.log(item.nome, i);
    if(item.nome == "Alana"){
        console.log("Achamos a Alana na lista de Contatos");
        return;

        // nesse for each nao conseguimos usar break ou continue
    };
});