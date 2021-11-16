let contador = 1
while (contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}

for (let i = 1; i <= 10; i++) {
    console.log(`contador = ${i}.`)
} // 2 formas de representar o mesmo laço de repetição. O for é mais enxuto.

const notas = [ 6.7, 7.4, 9.8, 8.1, 7.7]
for (let i = 0; i < notas.length; i++) { // Boa prática de colocar o let na expressão do for que no final não terei acesso a variável.
    console.log(`notas = ${notas[i]}.`) // Percorrendo array.
}