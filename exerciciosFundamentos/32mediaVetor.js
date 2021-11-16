function mediaAritmetica (vetor) {
    let soma = 0
    for (let i = 0; i < vetor.length; i++) {
        soma += vetor [i]
    }
    let media = soma / vetor.length
    console.log(`A média aritmética do vetor é ${media}.`)
}
vetor = [2,4,2,4,2,4,2,4]
mediaAritmetica(vetor)