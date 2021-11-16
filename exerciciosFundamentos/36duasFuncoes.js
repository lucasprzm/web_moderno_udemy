function multiplicacaoVetor (vetor, numero) {
    let total = []
    for (let i = 0; i < vetor.length; i++) {
        total [i] = vetor [i] * numero
    }
    console.log(total)
}

function multiplicacaoVetor2 (vetor, numero) {
    let total = []
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i] > 5) {
        total [i] = vetor [i] * numero
        } else
        total [i] = 0
    }
    console.log(total)
}
vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
multiplicacaoVetor2(vetor, 5)
multiplicacaoVetor(vetor, 5)