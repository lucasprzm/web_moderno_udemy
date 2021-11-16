function notaAluno (nota) {
    if (nota < 38) {
        console.log(`Aluno reprovado com: ${nota}`)
    } else if (nota >= 38) {
        if (nota % 5 == 3) {
            console.log(`Aluno aprovado com: ${nota + 2}`)
        } else if (nota % 5 == 4) {
            console.log(`Aluno aprovado com: ${nota + 1}`)
        } else if (nota % 5 == 2) {
            console.log(`Aluno aprovado com: ${nota - 2}`)
        } else if (nota % 5 == 1) {
            console.log(`Aluno aprovado com: ${nota - 1}`)
        }
    }
}
notaAluno (38)