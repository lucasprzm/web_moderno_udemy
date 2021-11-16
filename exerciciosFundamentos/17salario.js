function aumentoDeSalario (salario, plano) {
    switch (plano) {
        case "A" :
            console.log(salario + (salario * 0.1))
            break
        case "B" :
            console.log(salario + (salario * 0.15))
            break
        case "C" :
            console.log(salario + (salario * 0.2))
            break
        default:
            console.log("Plano inválido!")
    }
}
aumentoDeSalario(1000,"A")
aumentoDeSalario(2000,"B")
aumentoDeSalario(3000,"C")
aumentoDeSalario(4000,"D")