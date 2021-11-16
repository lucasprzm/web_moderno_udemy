function planoDeSaude (idade) {
    if (idade < 10 && idade >= 0) {
        console.log(`Plano de saúde para menores de 10 anos, valor: R$180`)
    } else if (idade >= 10 && idade <= 30) {
        console.log(`Plano de saúde para pessoas acima de 10 anos até os 30 anos. Valor: R$150`)
    } else if (idade > 30 && idade <= 60) {
        console.log(`Plano de saúde para pessoas entre 30 e 60 anos. Valor: R$195`)
    } else if (idade > 60 && idade <= 120){
        console.log(`Plano de saúde para pessoas acima de 60 anos. Valor: R$230`)
    } else {
        console.log(`Idade inválida.`)
    }
}

planoDeSaude (31)