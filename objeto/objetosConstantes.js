// pessoa -> 123 -> {...}
const pessoa = { nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = {nome: 'Ana'} // Só pode atribuir, sinal "=", para uma constante uma única vez.

Object.freeze(pessoa) // Torna o objeto constante, não tem como alterar de forma nenhuma.

pessoa.nome = 'Maria'
pessoa.end = "Rua ABC"
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)