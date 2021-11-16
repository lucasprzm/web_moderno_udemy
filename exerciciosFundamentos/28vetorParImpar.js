function vetor (valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8, valor9, valor10) {
    let valores = []
    let contadorPar = 0
    let contadorImpar = 0
    valores.push (valor1)
    valores.push (valor2)
    valores.push (valor3)
    valores.push (valor4)
    valores.push (valor5)
    valores.push (valor6)
    valores.push (valor7)
    valores.push (valor8)
    valores.push (valor9)
    valores.push (valor10)
    for (let i = 0; i < valores.length; i++) {
        if (valores [i] % 2 === 0) {
            contadorPar++
        } else {
            contadorImpar++
        }
    }
    console.log(`Temos ${contadorPar} número(s) par(es) e ${contadorImpar} número(s) ímpar(es).`)
}
vetor (11,13,15,17,19,21,23,25,19,20)