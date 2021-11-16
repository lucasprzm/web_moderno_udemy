const escola = "Cod3r";

console.log(escola.charAt(4)); // Mostra a quinta letra da string, a contagem começa a partir do 0.
console.log(escola.charAt(5)); // Apesar de não ter letra, ele não retorna erro e mostra somente o vazio.
console.log(escola.charCodeAt(3)); // Código HTML Unicode.
console.log(escola.indexOf("C")); // Em qual posição está essa letra na string.

console.log(escola.substring(1)); // Mostra a string a partir da segunda letra.
console.log(escola.substring(0, 3)); // Parte do indíce 0, andando 3 casas.

console.log("Escola ".concat(escola).concat("!")); // Concatena strings, podemos usar o sinal de mais.
console.log(escola.replace(3, "e")); // Substituição.

console.log("Ana,Maria,Pedro".split(",")); // Transforma a string em array.

console.log(escola.length)