function pedido (codigo, quantidade) {
    switch (codigo) {
        case 100 :
            console.log(`${quantidade} Cachorro(s) Quente(s): R$${(quantidade*3).toFixed(2)}`)
            break
        case 200 :
            console.log(`${quantidade} Hambúrguer Simples: R$${(quantidade*4).toFixed(2)}`)
            break
        case 300 :
            console.log(`${quantidade} Cheeseburguer: R$${(quantidade*5.50).toFixed(2)}`)
            break
        case 400 :
            console.log(`${quantidade} Bauru(s): R$${(quantidade*7.5).toFixed(2)}`)
            break
        case 500 :
            console.log(`${quantidade} Refrigerante(s): R$${(quantidade*3.5).toFixed(2)}`)
            break
        case 600 :
            console.log(`${quantidade} Suco(s): R$${(quantidade*2.8).toFixed(2)}`)
            break
        default :
        console.log("Produto não existente.")
    }
}
pedido(100,8)
pedido(200,9)
pedido(300,6)
pedido(400,8)
pedido(500,4)
pedido(600,2)
pedido(700,4)