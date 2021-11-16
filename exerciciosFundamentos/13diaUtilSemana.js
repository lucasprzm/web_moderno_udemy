function diaDaSemana (dia) {
    switch (dia) {
        case 1:
            console.log("Domingo: final de semana.")
            break
        case 2:
            console.log("Segunda-feira: dia útil.")
            break
        case 3:
            console.log("Terça-feira: dia útil.")
            break
        case 4:
            console.log("Quarta-feira: dia útil.")
            break
        case 5:
            console.log("Quinta-feira: dia útil.")
            break
        case 6:
            console.log("Sexta-feira: dia útil.")
            break
        case 7:
            console.log("Sábado: final de semana.")
            break
        default:
            console.log("Dia inválido!")
    }
}

diaDaSemana(10)