let cliente = 'Livia'

console.log(`Seja bem Vindo ${cliente}`)

cliente = 'Arthur'
console.log(`Seja bem Vindo ${cliente}`)

cliente = 'Gabriel'
console.log(`Seja bem Vindo ${cliente}`)

cliente = 'Mariana'
console.log(`Seja bem Vindo ${cliente}`)

function saudacao(cliente) {
    console.log(`Seja bem vindo(a) ${cliente}`)
}

saudacao('Livia')
saudacao('Arthur')
saudacao('Gabriel')
saudacao('Mariana')

function soma(v1, v2) {
    let res = v1 + v2
    console.log(res)
}

soma(5.5, 6.9)
soma('7','9')
soma('Douglas','Ricardo')