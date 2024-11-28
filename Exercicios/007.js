// 007.js - Faça um programa que 
// imprima os números entre 1 e 100 que são divisíveis
// por 3 e 5. (FOR)


for (let numero = 0; numero <= 100; numero++) {
    if (numero % 3 == 0) {
        console.log(numero)
    } else if (numero % 5 == 0) {
        console.log(numero)
    }
}

for (let numero = 0; numero <= 100; numero++) {
    if (numero % 3 == 0 && numero % 5 == 0) {
        console.log(numero)
    }
}

