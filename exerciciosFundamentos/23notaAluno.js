function notaAluno (codigoDoAluno, nota1, nota2, nota3) {
    if (nota1 >= nota2 && nota1 >= nota3) {
        let notaFinal = ((nota1 * 4) + (nota2 * 3) + (nota3 * 3))/10
        if (notaFinal >= 5) {  
        console.log(`O aluno de código ${codigoDoAluno}, obteve as notas ${nota1}, ${nota2} e ${nota3}. A média dele foi: ${notaFinal}. O aluno foi aprovado!`)
        } else {
            console.log(`O aluno de código ${codigoDoAluno}, obteve as notas ${nota1}, ${nota2} e ${nota3}. A média dele foi: ${notaFinal}. O aluno foi reprovado!`)
        }
    } else if (nota2 > nota1 && nota2 > nota3) {
        let notaFinal = ((nota2 * 4) + (nota1 * 3) + (nota3 * 3))/10
        if (notaFinal >= 5) {  
        console.log(`O aluno de código ${codigoDoAluno}, obteve as notas ${nota1}, ${nota2} e ${nota3}. A média dele foi: ${notaFinal}. O aluno foi aprovado!`)
        } else {
            console.log(`O aluno de código ${codigoDoAluno}, obteve as notas ${nota1}, ${nota2} e ${nota3}. A média dele foi: ${notaFinal}. O aluno foi reprovado!`)
        }
    } else if (nota3 > nota1 && nota3 > nota2) {
        let notaFinal = ((nota3 * 4) + (nota1 * 3) + (nota2 * 3))/10
        if (notaFinal >= 5) {  
        console.log(`O aluno de código ${codigoDoAluno}, obteve as notas ${nota1}, ${nota2} e ${nota3}. A média dele foi: ${notaFinal}. O aluno foi aprovado!`)
        } else {
            console.log(`O aluno de código ${codigoDoAluno}, obteve as notas ${nota1}, ${nota2} e ${nota3}. A média dele foi: ${notaFinal}. O aluno foi reprovado!`)
        }
    }
}
notaAluno (100,10,10,10)