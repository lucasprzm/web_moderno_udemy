function Pa (primeiroTermo, numeroDeTermos, razao) {
    let termosPa = []
    let soma = 0
    for (let n = 1; n <= numeroDeTermos; n++) {
        let a1 = primeiroTermo + ((n - 1) * razao) 
        termosPa.push(a1)
    }
    for (let i = 0; i < termosPa.length; i++) {
        soma += termosPa [i]
    }
    console.log(`A progressão aritmética ficou assim: ${termosPa}`)
    console.log(`A soma dos termos da progressão aritmética é: ${soma}.`)
}

function Pg (primeiroTermo, numeroDeTermos, razao) {
    let termosPg = []
    let soma = 0
    for (let n = 1; n <= numeroDeTermos; n++) {
        let a1 = primeiroTermo * (razao ** (n - 1)) 
        termosPg.push(a1)
    }
    for (let i = 0; i < termosPg.length; i++) {
        soma += termosPg [i]
    }
    console.log("------------------------------------------------------")
    console.log(`A progressão geométrica ficou assim: ${termosPg}`)
    console.log(`A soma dos termos da progressão geométrica é: ${soma}.`)
}

Pa(10,5,2)
Pg(10,5,2)