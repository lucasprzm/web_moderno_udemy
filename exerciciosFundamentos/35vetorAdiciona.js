function vetor (vetorPilha, vetorAdiciona) {
    for (let i = 0; i < vetorAdiciona.length; i++) {
        vetorPilha.push(vetorAdiciona[i])
    }
    console.log(`Vetor adicionado: ${vetorAdiciona}`)
    console.log (`Vetor resultado: ${vetorPilha}`)
}
vetorPilha = [1,2,3,4,5]
vetorAdiciona = [6,7,8,9,10]
vetor(vetorPilha,vetorAdiciona)