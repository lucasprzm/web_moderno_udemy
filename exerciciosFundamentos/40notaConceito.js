function conceito (nota) {
    let conceitos = []
    for (let i = 0; i < nota.length; i++) {
        if (nota [i] >= 0 && nota [i] <= 4.9) {
        conceitos.push(`D`)
        } else if (nota [i] >= 5 && nota [i] <= 6.9) {
        conceitos.push(`C`)
        } else if (nota [i] >= 7 && nota [i] <= 8.9) {
        conceitos.push(`B`)
        } else if (nota [i] >= 9 && nota [i] <= 10) {
        conceitos.push(`A`)
        } else {
        conceitos.push(`Nota inválida`)
        }
    }
    console.log(`Conceitos do vetor nota: ${conceitos}.`)
}
nota = [1,2,3,4,5,6,7,8,9,10,11,12]
conceito (nota)