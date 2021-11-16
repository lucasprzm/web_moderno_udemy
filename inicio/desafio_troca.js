let a = 7;
let b = 94;

let temp = a;
// Armazenou a variável a antes de mudar o valor dela para fazer a troca solicitada.
a = b;
b = temp;
// depois da troca... a = 94 e b = 7

// [a, b] = [b, a]; outra forma de trocar os valores.

console.log(a);
console.log(b);