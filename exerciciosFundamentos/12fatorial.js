function fatorial (numero) {
    let total = 1
    for (let i = 1; i <= numero; i++) {
        total *= i
    }
    console.log(total)
}
fatorial(0)