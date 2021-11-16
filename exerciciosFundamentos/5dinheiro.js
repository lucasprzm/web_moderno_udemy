function dinheiro (x) {
    console.log(`R$ ${Math.floor(x)},${((x-Math.floor(x))*100).toFixed(0)}`)
    // outra forma
    console.log(`R$ ${x.toFixed(2).toString().replace(".",",")}`)
}
dinheiro(235.56)