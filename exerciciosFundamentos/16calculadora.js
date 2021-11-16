function calculadora (x, operador, y) {
    switch (operador) {
        case "+" :
            console.log(x + y)
            break
        case "-" :
            console.log(x - y)
            break
        case "*" :
            console.log(x * y)
            break
        case "/" :
            console.log(x / y)
            break
        default :
        console.log("Operador inválido!")
    }
}
calculadora(10,"+",5)
calculadora(10,"-",5)
calculadora(15,"*",4)
calculadora(15,"/",3)
calculadora(10,";",8)