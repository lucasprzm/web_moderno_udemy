function anuidadeAssociacao (anuidade, mesDoPagamento) {
    let anuidadeTotal = anuidade * (1 + 0.05) ** (mesDoPagamento - 1)
    switch (mesDoPagamento) {
        case 1:
            console.log(`O valor da anuidade será: R$${anuidade}.`)
            break
        case 2: case 3: case 4: case 5: case 6: case 7: case 8: case 9: case 10: case 11: case 12:
            console.log(`O valor da anuidade será de: R$${anuidadeTotal.toFixed(2)}`)
            break
        default:
            console.log("Mês inválido!")
    }
}
anuidadeAssociacao (100,7)