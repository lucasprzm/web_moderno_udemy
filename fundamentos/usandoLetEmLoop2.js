const funcs = []
for (let i = 0; i < 10; i++) {
    funcs.push(function(){
        console.log(i)
    })
}

funcs[2]() // Let tem escopo de bloco!! Portanto, retorna o valor corretamente.
funcs[8]()