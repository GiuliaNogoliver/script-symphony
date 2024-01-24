let Tenis = {
    tamanho: 45,
    estoque: true,
};

let link = { link: {a: "a", b: {c: "c"}}};

// JSON.stringfy converte para string o objeto
let clone1 = JSON.stringify(Tenis);
clone1 = JSON.parse(clone1);

clone1.estoque = false;

console.log(typeof clone1);
console.log(clone1);

/*console.log(1, clone1);
console.log(2, Tenis);

let mesclar1 = Object.assign(Tenis, link);
let mesclar2 = {...Tenis, ...link};

clone1.estoque = false;
mesclar1.link.a = "ABC";

console.log(1, clone1);
console.log(2, Tenis);
console.log(3, mesclar1);
console.log(4, mesclar2);
*/