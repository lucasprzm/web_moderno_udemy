console.log(typeof Array, typeof new Array, typeof []) // Boas práticas: colocar dados homogêneos de um mesmo tipo.

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia','Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Abia')
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() // altera o array, ordena
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento 2') // Exclui 2 elementos do índice 1 para frente, ou seja, indíce 1 e 2.
console.log(aprovados)
aprovados.splice(1, 0, 'Elemento1', 'Elemento 2') // Não exclui nada e adiciona os elementos a partir do índice 1, ou seja, coloca um elemento no índice 1 e outro no 2.
console.log(aprovados)
