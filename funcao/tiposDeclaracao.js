console.log(soma(3,4)) // funciona, pois o JS carrega as funções primeiro e depois executa o código.
// console.log(sub(3,4)), não funciona pois a constante foi atribuída depois.

// function declaration
function soma(x,y) {
    return x+y
}

// function expression
const sub = function (x,y) {
    return x - y
}
console.log(sub(3,4))

// named function expression
const mult = function mult(x,y) {
    return x * y
}
console.log(mult(3,4))
