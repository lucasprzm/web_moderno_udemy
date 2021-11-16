{{{{ var sera = 'Será???'}}}}
console.log(sera)

function teste() {
    var local = 123 // Fica disponível somente dentro da função, localmente. É possível criar variáveis globais porém qualquer sobescrição pode criar problemas.
    // Só tem dois escopos possíveis: globalmente ou dentro do bloco da função.
    console.log(local)
}

teste()
console.log(local)