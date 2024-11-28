const prompt = require('prompt-sync') ()

let nome = prompt('Qual é o seu nome?')
console.log(`Seja bem vinda(a) ${nome}`);

let anoNasc = prompt('Em que ano você nasceu')
anoNasc = parseInt(anoNasc) // Convertendo o ano recebido em string para int
let idade = 2024 - anoNasc
console.log(`${nome} você tem ${idade} anos`)