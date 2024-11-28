const prompt = require ('prompt-sync') ()

console.log('(1️⃣: Fácil, 2️⃣: Médio, 3️⃣: Difícil, 4️⃣: Muito Difícil,5️⃣: Insano)')
let modo = prompt('Escolha o modo de jogo') 

switch(modo) {
    case '1' :
        console.log('Modo Fácil')
        break
    case '2' :
        console.log('Modo Médio')
        break
    case '3' :
        console.log('Modo Difícil')
        break
        case '4' :
        console.log('Modo Muito Difícil')
        break
        case '5' :
        console.log('Modo Insano')
    break
default :
console.log('Modo de jogo não existe')
}

