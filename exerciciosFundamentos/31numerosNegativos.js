function numerosNegativos (vetorNumeros) {
    let contadorNegativos = 0
    for (let i = 0; i < vetorNumeros.length; i++) {
        if (vetorNumeros [i] < 0) {
            contadorNegativos++
        }
    }
    console.log(`Temos ${contadorNegativos} números negativos nesse vetor.`)
}
vetor = [-17,-3,26,-38,91]
numerosNegativos (vetor)