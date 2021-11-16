function trocaDeVetores(vetorA, vetorB) {
    if (vetorA.length == vetorB.length) {
        for (let i = 0; i < vetorA.length; i++) {
            [vetorA[i], vetorB[i]] = [vetorB[i], vetorA[i]]
        }
        console.log(`Novo vetor A: ${vetorA}`)
        console.log(`Novo vetor B: ${vetorB}`)
    } else {
        console.log(`Os vetores são de tamanhos diferentes.`)
    }
}
vetorA = [6, 7, 8, 9, 10, 11]
vetorB = [1, 2, 3, 4, 5]
trocaDeVetores(vetorA, vetorB)