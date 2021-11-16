function impares(inicio = 0, fim = 100) {
    if (inicio < fim) {
        for (inicio; inicio <= fim; inicio++) {
            if (inicio % 2 != 0) {
                console.log(inicio)
            }
        }
    } else if (fim < inicio) {
        for (fim; fim <= inicio; fim++) {
            if (fim % 2 != 0) {
                console.log(fim)
            }
        }
    }
}
impares()