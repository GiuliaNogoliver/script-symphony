const listaDeContatos = [
    {nome: 'Wellington'},
    {nome: 'Giovanna'},
    {nome: 'Victor'},
    {nome: 'Simone'},
    {nome: 'Alana'}
];

// continue

for(let item of listaDeContatos){
    console.log(item.nome);
    if(item.nome == 'Wellington'){
        console.log("Bom dia amor");
        continue;
    };

    if(item.nome == 'Victor'){
        console.log("Bom diaaaaaaaaaaaaaaa");
        continue;
    };
};

// break

for(let item of listaDeContatos){
    if(item.nome == "Giovanna"){
        console.log("Cade você??");
        break;
    };
};

// tanto o break qnt o continue se usa qnd tem um laço