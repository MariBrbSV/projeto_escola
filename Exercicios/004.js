const prompt = require ('prompt-sync') ()

let soma = 0
let numero = parseInt (prompt('Digite uma nota'))

while(numero >= 0) {
    soma = (soma + numero) / 2
    numero = parseInt (prompt('Digite uma nota'))
}

console.log(soma)  