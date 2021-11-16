const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'] // conteúdo pode ser mudado.
pilotos.pop() // Massa quebrou o carro! Retira o último elemento.
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove o primeiro elemento do array
console.log(pilotos)

pilotos.unshift('Hamilton')
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1) // Massa quebrou de novo!
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // gera um novo array a partir do índice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) // gera um novo array a partir do índice 1 até o 3, o índice 4 não conta.
console.log(algunsPilotos2)
