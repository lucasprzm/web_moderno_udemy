const valores = [7.7, 8.9, 6.3, 9.2];
console.log(valores[0], valores[3]); // Índice do array;
console.log(valores[4]); // Retorna undefined;

valores[4] = 10;
console.log(valores);
console.log(valores.length);

valores.push({id: 3}, false, null, 'teste');
console.log(valores);

console.log(valores.pop()); // Retira o último valor adicionado.
delete valores[0]; // Deleta um item específico da array.
console.log(valores);

console.log(typeof valores); // Um array é um objeto.
