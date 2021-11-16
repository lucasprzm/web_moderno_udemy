var numero = 1
{
    var numero = 2
    console.log("dentro =",numero) // variável é mudada globalmente, os dois resultados serão 2.
}
console.log('fora =',numero)