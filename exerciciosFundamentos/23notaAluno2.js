function notaAluno (codigoDoAluno, nota1, nota2, nota3) {
    let notas = []
    notas.push (nota1)
    notas.push (nota2)
    notas.push (nota3)
    notas.sort((a,b) => a < b ? 1 : -1)

    let notaFinal = (notas[0] * 4 + notas[1]*3 + notas[2]*3)/10
    console.log(`O aluno de código ${codigoDoAluno}, obteve as notas ${nota1}, ${nota2} e ${nota3}. A média dele foi: ${notaFinal}. O aluno foi ${notaFinal < 5 ? "reprovado!" : "aprovado!"}`)
}
notaAluno(100,9,8,10)