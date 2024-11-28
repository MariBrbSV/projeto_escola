

const {juros_simples, juros_compostos} = require('./023_Modulo_Juros')
// const juros = require('./023_Modulo_Juros')
// const juros_simples = juros.juros.simples
// const juros_compostos = juros.juros.compostos

const resultado = juros_simples(1000, 4, 12)
console.log(resultado.jurosCalc)
console.log(resultado.valorTotal)
console.log(resultado.i)
console.log(resultado.t)

const resultado2 = juros_compostos(1000,4,12)
console.log(`Montante ${resultado2.m}`);
console.log(`Juros ${resultado2.juros}`)

