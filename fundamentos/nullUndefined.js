let valor // não inicializada, evitar colocar undefined, deixar que ela apareça por si só.

console.log(valor);

valor = null; // ausência de valor.
console.log(valor);
// console.log(valor.toString()) // Erro!

const produto = {};
console.log(produto.preco);
console.log(produto)

produto.preco = 3.50;
console.log(produto);

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco);
// delete produto.preco, melhor forma de zerar a constante.
console.log(produto);

produto.preco = null // sem preço.
console.log(!!produto.preco);
console.log(produto);