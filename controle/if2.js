function teste1 (num) {
    if (num > 7)
        console.log(num) // Primeira sentença tem relação com o IF, somente, pois não foi colocada as chaves.

    console.log('Final') // Não tem relação com o IF, portanto vai imprimir sempre.
}

teste1 (6)
teste1 (8)

function teste2 (num) {
    if (num > 7); { // Cuidado com o ";", nesse caso, separou a sentença de código, o IF ficou sem referência, então imprimiu tudo.
        console.log(num)
    }
}

teste2 (6)
teste2 (8)
