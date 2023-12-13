// Operador Lógico

/* && (E)
 * || (Ou)
 *  ! (Negaçao)
 */

a = 5;
b = 6;
c = "5";

console.log(a === c && a == c);
console.log(a == b || a == c);
console.log(a === c && a == c);
console.log(!false);
console.log(!a == c);

// Operador Precedencia

// O javascript opera numa ordem ele nao seleciona oq opera apenas tudo q vier da direota para a esquerda
// oq muda é colocar entre parenteses as operacaos q vc deseja fazer primerio

a = false;
b = true;

(a && b) === false;

(15 * 20) / 20 == 20;