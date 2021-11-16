var nome = "Caneta";
var quantidade = 10;
var preco = 6.4;
var imposto = 1.5;
var precoFinal = preco + imposto;
// "let" também é uma forma de criar variáveis também, existem diferenças entre elas. "let" é a forma mais moderna.
console.log(nome);
console.log(quantidade); 
console.log(preco);
console.log(imposto);
console.log(preco + imposto);
// A variável será alterada somente aqui e será impressa duas vezes porém com valores diferentes.
nome = "Caneta BIC";
console.log(nome);
// Criação de variável sem utilizar o comando "var", pode ter implicações, será explicado no futuro.
blabla = 123;
console.log(nome);