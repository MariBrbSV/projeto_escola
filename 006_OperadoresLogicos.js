console.log((5 > 3) && (10 < 20))     // True                        && - AND (e)
console.log((5 > 3) && (10 > 20))     // False                        && - AND (e)

const usuario = 'Ricardo'
const senha = 123
console.log((usuario == 'Ricardo') && (senha == 123))     // True                        && - AND (e)
console.log((usuario == 'Ricardo') && (senha == 1234))    // False                       && - AND (e)

console.log((usuario == 'Ricardo') || (senha == 123))         // True                        || - OR (ou)
console.log((usuario == 'Ricardo') || (senha == 1234))        // True                        || - OR (ou)
console.log((usuario == 'RicardoDias') || (senha == 1234))    // False                       || - OR (ou)

console.log(!(5 > 10))          // ! - Boolean (Ao contrário)

let aprovado = false
aprovado = !aprovado

console.log(aprovado);
