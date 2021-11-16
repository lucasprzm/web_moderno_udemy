function saqueDinheiro(valor) {
    if (valor / 100 >= 1) {
        let notaDeCem = Math.floor(valor / 100)
        console.log(`${notaDeCem} nota(s) de R$100.`)
        if (((valor - notaDeCem * 100) / 50) >= 1) {
            let notaDeCinquenta = Math.floor((valor - notaDeCem * 100) / 50)
            console.log(`${notaDeCinquenta} nota(s) de R$50.`) // true nota de 100
            if ((valor - notaDeCem * 100 - notaDeCinquenta * 50) / 10 >= 1) {
                let notaDeDez = Math.floor((valor - notaDeCem * 100 - notaDeCinquenta * 50) / 10)
                console.log(`${notaDeDez} nota(s) de R$10.`) // true nota de 100, 50
                if (((valor - notaDeCem * 100 - notaDeCinquenta * 50 - notaDeDez * 10) / 5) >= 1) {
                    let notaDeCinco = Math.floor((valor - notaDeCem * 100 - notaDeCinquenta * 50 - notaDeDez * 10) / 5)
                    console.log(`${notaDeCinco} nota(s) de R$5.`) // true nota de 100, 50 e 10.
                    if ((valor - notaDeCem * 100 - notaDeCinquenta * 50 - notaDeDez * 10 - notaDeCinco * 5) >= 1) {
                        let notaDeUm = (valor - notaDeCem * 100 - notaDeCinquenta * 50 - notaDeDez * 10 - notaDeCinco * 5)
                        console.log(`${notaDeUm} nota(s) de R$1.`) // true nota de 100, 50, 10 e 5.
                    }
                } else {
                    let notaDeUm = (valor - notaDeCem * 100 - notaDeCinquenta * 50 - notaDeDez * 10)
                    console.log(`${notaDeUm} nota(s) de R$1.`) // true nota de 100, 50, 10 e false nota de 5.
                }
            } else {
                let notaDeCinco = Math.floor((valor - notaDeCem * 100 - notaDeCinquenta * 50) / 5)
                console.log(`${notaDeCinco} nota(s) de R$5.`) // true nota de 100, 50 e false 10.
            }
        } else {
            let notaDeDez = Math.floor((valor - notaDeCem * 100) / 10)
            console.log(`${notaDeDez} notas de R$10.`) // false nota de 50 e true nota de 100
        }
    } else {
        if (valor / 50 >= 1) {
            let notaDeCinquenta = Math.floor(valor / 50)
            console.log(`${notaDeCinquenta} notas de R$50.`) // false nota de 100
            if ((valor - notaDeCinquenta * 50) / 10 >= 1) {
                let notaDeDez = Math.floor((valor - notaDeCinquenta * 50) / 10)
                console.log(`${notaDeDez} nota(s) de R$10.`) // false nota de 100, true 50
            }
        }
    }
}
saqueDinheiro(70)