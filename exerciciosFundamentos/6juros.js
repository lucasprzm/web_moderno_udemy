function calculoJurosSimples (capitalInicial,jurosMensal,tempoEmMeses) {
let juros = capitalInicial * jurosMensal * tempoEmMeses
console.log(`Valor final com juros simples: R$${capitalInicial + juros}`)
}

function calculoJurosCompostos (capitalInicial,jurosMensal,tempoEmMeses) {
    console.log(`Valor final com juros compostos: R$${capitalInicial + capitalInicial * Math.pow((1+jurosMensal),tempoEmMeses)}`)
} // Lembrar que posso usar o ** para potência ao invés do Math.pow

calculoJurosSimples(2000,0.1,5)
calculoJurosCompostos(2000,0.1,5)
