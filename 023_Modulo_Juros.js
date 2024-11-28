//Arrow Function para calcular juros simples
const juros_simples = (capital,taxa,tempo) => {
    const juros = capital * (taxa / 100) * tempo
    const total = juros + capital
    return { 
        jurosCalc : juros, 
        valorTotal : total,
        i: taxa,
        t: tempo
    }
}

const juros_compostos = (capital,taxa,tempo) => {
    const m = capital * (1 + taxa / 100) ** tempo
    return {
        montante: m,
        juros: m - capital,
        i: taxa,
        t: tempo
    }
}

module.exports = {juros_simples, juros_compostos}