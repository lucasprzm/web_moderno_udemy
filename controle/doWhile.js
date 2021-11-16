function getInteiroAleatorioEntre (min,max) {
    const valor = Math.random () * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

do { // Estrutura parecida com while, não é muito utilizado por essa semelhança. A variável pode ser iniciada sem valor.
    opcao = getInteiroAleatorioEntre (-1,10)
    console.log(`Opção escolhida foi ${opcao}.`)
} while (opcao != -1)

console.log('Até a próxima!')