function soBoaNoticia (nota) {
    if (nota >= 7){
        console.log('Aprovado com ' + nota)
    }
}
// o IF somente executa se for verdade o que está dentro do bloco, se for falso não executa sem o else.
soBoaNoticia (8.1)
soBoaNoticia (6.1)

function seForVerdadeEuFalo (valor) {
    if(valor) {
        console.log('É verdade...' + valor)
    }
}

seForVerdadeEuFalo()
seForVerdadeEuFalo(null)
seForVerdadeEuFalo(undefined)
seForVerdadeEuFalo(NaN)
seForVerdadeEuFalo('')
seForVerdadeEuFalo(0)
seForVerdadeEuFalo(-1)
seForVerdadeEuFalo(' ')
seForVerdadeEuFalo("?")
seForVerdadeEuFalo([])
seForVerdadeEuFalo([1,2])
seForVerdadeEuFalo({})