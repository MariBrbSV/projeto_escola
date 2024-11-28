
// Crie uma função que calcule o raio por circunferência, 
// recebendo a circunferência (circunferência / 2 * PI), 
// para o valor de PI utilizar a função criada no 011.js

const valorPI = require('./011')

const pi = '3,1415'

function valordepi() {
    return pi
}

console.log(valordepi())

// ------------------------------------


function raioporcircun(circunferencia) {
    const pi = valordepi()
    const raio = circunferencia / (2 * pi())
    return raio
}

console.log(raioporcircun(20))



