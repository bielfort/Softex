const Banco = {
    conta: "123456",
    saldo: 1000,
    tipoConta: "Corrente",
    agencia: "7890",
    buscarSaldo: function() {
      return this.saldo;
    },
    deposito: function(valor) {
      if (valor > 0) {
        this.saldo += valor;
        return "Depósito de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
      } else {
        return "Valor inválido para depósito.";
      }
    },
    saque: function(valor) {
      if (valor > 0 && valor <= this.saldo) {
        this.saldo -= valor;
        return "Saque de R$" + valor + " realizado com sucesso. Novo saldo: R$" + this.saldo;
      } else if (valor <= 0) {
        return "Valor inválido para saque.";
      } else {
        return "Saldo insuficiente para o saque.";
      }
    },
    numeroConta: function() {
      return this.conta;
    }
  };
  
  // Exemplo de uso:
  console.log("Saldo atual: R$" + Banco.buscarSaldo());
  console.log(Banco.deposito(500));
  console.log(Banco.saque(200));
  console.log("Número da conta: " + Banco.numeroConta());