const variavelGlobal = 'Sou global'

function minhaFuncao() {
    const variavelLocal = 'Sou local'
    console.log(variavelGlobal)
    console.log(variavelLocal)
}

minhaFuncao()

console.log(variavelGlobal)
console.log(variavelLocal)   // Erro variávelLocal não está definida pois sua declaração é dentro de uma função