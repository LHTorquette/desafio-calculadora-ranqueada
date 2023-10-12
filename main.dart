main() {
  int resultSaldo = SaldoRanqueada(80, 15);
  String resultNivel = nivelRanqueada(resultSaldo);

  print('O heroi tem de saldo de $resultSaldo e está no nível $resultNivel');
}

int SaldoRanqueada(int numeroVitorias, int numeroDerrotas) {
  int saldo = numeroVitorias - numeroDerrotas;
  return saldo;
}

String nivelRanqueada(saldo) {
  String nivel = '';
  if (saldo < 10) {
    nivel = 'Ferro';
    return nivel;
  } else if (saldo >= 11 && saldo <= 20) {
    nivel = 'Bronze';
    return nivel;
  } else if (saldo >= 21 && saldo <= 50) {
    nivel = 'Prata';
    return nivel;
  } else if (saldo >= 51 && saldo <= 80) {
    nivel = 'Ouro';
    return nivel;
  } else if (saldo >= 81 && saldo <= 90) {
    nivel = 'Diamante';
    return nivel;
  } else if (saldo >= 91 && saldo <= 100) {
    nivel = 'Lendário';
    return nivel;
  } else {
    nivel = 'Imortal';
    return nivel;
  }
}
