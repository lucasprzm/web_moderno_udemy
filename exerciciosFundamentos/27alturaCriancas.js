function crescimento(altura1, altura2, taxa1, taxa2) {
    if (altura1 == altura2) {
        if (taxa1 > taxa2) {
            console.log(`A criança 1 ultrapassará a criança 2 em 1 ano.`)
        } else if (taxa1 < taxa2) {
            console.log(`A criança 2 ultrapassará a criança 1 em 1 ano.`)
        } else {
            console.log(`As crianças têm altura e crescimento iguais.`)
        }
    } else {
        if (altura1 > altura2) {
            if (taxa1 >= taxa2) {
                console.log(`A criança 2 não ultrapassará a criança 1.`)
            } else {
                console.log(`A criança 2 ultrapassará a criança 1 em ${calcularTempo(altura2, taxa2, altura1, taxa1)} ano(s).`)
            }
        } else {
            if (taxa2 >= taxa1) {
                console.log(`A criança 1 não ultrapassará a criança 2.`)
            } else {
                console.log(`A criança 1 ultrapassará a criança 2 em ${calcularTempo(altura1, taxa1, altura2, taxa2)} ano(s).`)
            }
        }
    }
}

function calcularTempo(alturaMenor, taxaAlturaMenor, alturaMaior, taxaAlturaMaior) {
    let ano = 0
    while (alturaMenor <= alturaMaior) {
        alturaMenor += taxaAlturaMenor
        alturaMaior += taxaAlturaMaior
        ano++
    }
    return ano
}

// Lembrar de utilizar mais de uma função, o código fica mais fácil de ler.
crescimento(100, 80, 10, 20)