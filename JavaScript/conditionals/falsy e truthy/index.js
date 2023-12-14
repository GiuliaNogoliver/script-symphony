// Condicional Falsy
// false, "", NaN, undefined e null

// Condicional Truthy
// tudo q for diferente de falsy

if (NaN){               // -> tudo q for truthy VAI CAIR NO IF
    console.log("Truthy");
} else {               //-> tudo q for falsy VAI CAIR NO ELSE 
    console.log("Falsy");
}

// Se vc quiser forçar o falase no IF
// SO USAR O not (!)
if(!null){
    console.log("Falsy or false");
}