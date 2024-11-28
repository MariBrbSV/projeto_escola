const prompt = require ('prompt-sync') ()

let soma = 0
let numero = parseInt (prompt('Digite um número'))

while(numero >= 0 ){
    soma = soma + numero
    numero = parseInt (prompt('Digite um número'))
}

console.log(soma)