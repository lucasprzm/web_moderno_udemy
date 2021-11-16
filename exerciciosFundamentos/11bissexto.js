function bissexto (ano) {
    if ((ano % 400 == 0) || (ano % 4 == 0 && ano % 100 != 0)){
        console.log("Ano bissexto!")
    } else {
        console.log("Ano não é bissexto!")
    }
}

bissexto (1636)