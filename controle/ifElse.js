const imprimirResultado = function (nota) {
    if (nota >= 7) {
        console.log('Aprovado!') // Usar somente If quando for usar somente o verdadeiro.
    }
    else {
        console.log('Reprovado!') // Usado quando queremos retornar algo quando for falso.
    }
}

imprimirResultado (10)
imprimirResultado (4)
imprimirResultado ('Epa!') // Deveria retornar um erro, porém como o JS é fracamente tipado, retorna como falso