function triangulo (x,y,z) {
    if (x == y && x == z) {
        console.log("Triângulo Equilátero")
    } else if (x == y || x == z || y == z) {
        console.log("Triângulo Isósceles")
    } else {
        console.log("Triângulo Escaleno")
    }
}
triangulo(6,5,4)