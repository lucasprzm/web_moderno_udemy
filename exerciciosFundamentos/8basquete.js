function jogosBasquete (stringPontos) {
    let pontosPorJogo = stringPontos.split(" ")
    let qtdQuebraDeRecords = 0
    let piorJogo = 0
    let maiorPontuacao = pontosPorJogo[0]
    let menorPontuacao = pontosPorJogo[0]
    console.log(`Pontos por jogo: ${pontosPorJogo}`)

    for (let i = 1; i < pontosPorJogo.length; i++) {
        if (pontosPorJogo[i] > maiorPontuacao) {
            qtdQuebraDeRecords++
            maiorPontuacao = pontosPorJogo[i]
        } else if (pontosPorJogo[i] < menorPontuacao) {
            menorPontuacao = pontosPorJogo[i]
            piorJogo = i+1;
        }
    }
    console.log(`Número de Quebra de Recordes: ${qtdQuebraDeRecords} e quantos jogos ele foi pior: ${piorJogo}`)
    
}
// Não ficou certo, enunciado um pouco confuso, vou tentar seguir em frente.
jogosBasquete("30 40 20 4 51 25 42 38 56 7")
