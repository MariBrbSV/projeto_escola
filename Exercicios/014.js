const calcularArea = function (altura,largura) {
    area = (altura * largura) / 2;
    console.log(`A área do triângulo é de ${area}`)
    return area 
}

calcularArea(24,8)
calcularArea(25, 8)

// --------------------------------------

const calcularArea2 = (altura,largura) => ((altura * largura) / 2)
console.log(calcularArea2)

calcularArea2(24,8)
calcularArea2(25,8)