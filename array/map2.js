const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45}',
    '{ "nome": "Caderno", "preco": 13.90}',
    '{ "nome": "Kit de Lapis", "preco": 41.22}',
    '{ "nome": "Caneta", "preco": 7.50}'
]
console.log(carrinho)
// Retornar um array apenas com os preços.

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const resultado1 = carrinho.map(paraObjeto)
console.log(resultado1)
const resultado2 = resultado1.map(apenasPreco)
console.log(resultado2)