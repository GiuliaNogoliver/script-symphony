// Fazer um codigo que diz quando letras repetidas aparecem em uma palavra

// exemplo Abacate = {a: 3, b: 1, c: 1, t: 1, e: 1}

const word = "Wellington e Giulia".toLowerCase().replaceAll(" ", ""); //se deixar apenas replace o segundo espaço ele desconsidera 
let letters = {};

for(i = 0;i < palavra.length; i++){ // laço normal
    if(letters[word[i]]){         // aqui se existir a letra, lembra do truth
        letters[word[i]]++;       // ent acrescenta a letra
    } else {
        letters[word[i]] = 1;     // Se nao apenas 1
    }
}

console.log(letters);