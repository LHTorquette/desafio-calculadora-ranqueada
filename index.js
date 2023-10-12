
let resultado = saldoRanqueada(52, 1)
let resultadoNivel = nivelRanqueada(resultado)
console.log(`O heroi tem de saldo de ${resultado} e está no nível ${resultadoNivel}`)

function saldoRanqueada(saldoVitoria, saldoDerrota) {
    let saldo = saldoVitoria - saldoDerrota
    return saldo
}

function nivelRanqueada(saldo) {
    let nivel = ''
    if (saldo < 10) {
        nivel = 'Ferro'
        return nivel
    } else if (saldo >= 11 && saldo <= 20) {
        nivel = 'Bronze'
        return nivel
    } else if (saldo >= 21 && saldo <= 50) {
        nivel = 'Prata'
        return nivel
    } else if (saldo >= 51 && saldo <= 80) {
        nivel = 'Ouro'
        return nivel
    } else if (saldo >= 81 && saldo <= 90) {
        nivel = 'Diamante'
        return nivel
    } else if (saldo >= 91 && saldo <= 100) {
        nivel = 'Lendário'
        return nivel
    } else {
        nivel = 'Imortal'
        return nivel
    }
}



//Se vitórias for menor do que 10 = Ferro
//Se vitórias for entre 11 e 20 = Bronze
//Se vitórias for entre 21 e 50 = Prata
//Se vitórias for entre 51 e 80 = Ouro
//Se vitórias for entre 81 e 90 = Diamante
//Se vitórias for entre 91 e 100= Lendário
//Se vitórias for maior ou igual a 101 = Imortal