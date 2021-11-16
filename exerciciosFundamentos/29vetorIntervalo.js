function intervaloEntreDezEVinte (vetorNumeros) {
    let numerosDentroDoIntervalo = 0
    let numerosForaDoIntervalo = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros [i] >= 10 && vetorNumeros [i] <= 20) {
            numerosDentroDoIntervalo++
        } else {
            numerosForaDoIntervalo++
        }
    }
    console.log (`Temos ${numerosDentroDoIntervalo} números dentro do intervalo de 10 a 20 e ${numerosForaDoIntervalo} números fora do intervalo.`)
}
vetor = [21, 14, 15, 16, 5, 6, 7, 8, 9, 10, 11, 12, 13, 33, 4, 44]
intervaloEntreDezEVinte(vetor)

