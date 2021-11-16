function bhaskara (a,b,c) {
    let x = []
    let delta = b ** 2 - 4 * a * c
    if (delta < 0) {
        console.log ("Delta é negativo!")
    } else {
        let x1 = (-b + delta ** 0.5) / (2*a)
        x.push(x1)
        let x2 = (-b - delta ** 0.5) / (2*a)
        x.push(x2)
        console.log(`Valores de x: ${x}`)
    }
}

bhaskara(2,6,4)