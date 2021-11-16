let numero = 1
{
    let numero = 2
    console.log("dentro =",numero) // O let considera o bloco de código. Escopo global, de função e de bloco.
}
console.log("fora =",numero)