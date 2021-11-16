function stringsIguais (stringUm, stringDois) {
    let contador = 0
    let stringMaiusculaUm = stringUm.toUpperCase()
    let stringMaiusculaDois = stringDois.toUpperCase()
    console.log(stringMaiusculaUm)
    console.log(stringMaiusculaDois)
    for (let i = 0; i < stringUm.length; i++) {
        if (stringMaiusculaDois.indexOf(stringMaiusculaUm.charAt(i)) >= 0) {
            contador++
        }
    }
    if (contador == stringUm.length) {
        console.log(true)
    } else {
        console.log(false)
    }
}
stringUm = "MLCTS"
stringDois = "Matos Lucas"
stringsIguais(stringUm,stringDois)