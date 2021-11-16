function maiorEMenor (vetorNumeros) {
    let maximo = vetorNumeros[0]
    let minimo = vetorNumeros[0]
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros [i] > maximo) {
            maximo = vetorNumeros [i]
        }
    }
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros [i] < minimo) {
            minimo = vetorNumeros [i]
        }
    }
    console.log(`${maximo} é o maior número e ${minimo} é o menor número.`)
}
vetor = [92,33,43,2,14,82]
maiorEMenor (vetor)
