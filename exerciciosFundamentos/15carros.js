function concessionaria (modeloDeCarro) {
    switch (modeloDeCarro) {
        case "hatch" :
            console.log("Compra efetuada com sucesso")
            break
        case "sedan" : case "motocicleta" : case "caminhonete" :
            console.log("Tem certeza que não prefere outro modelo?")
            break
        default :
            console.log("Não trabalhamos com esse tipo de automóvel aqui.")
    }
}
concessionaria("hatch")
concessionaria("sedan")
concessionaria("motocicleta")
concessionaria("caminhonete")
concessionaria("caminhão")