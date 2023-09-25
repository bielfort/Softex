import { Transacao } from "./transacao.js";
import { TIPOTRANSACAO } from "./tipoTransacao.js";

export class Conta{
    constructor(cliente, numero, agencia, saldo){
        this.cliente = cliente;
        this.numero = numero;
        this.agencia = agencia;
        this.dataCriacao = new Date().toLocaleDateString();
        this.saldo = saldo;
        this.status = true;
        this.transacoes = [];
    }


    // depositar

    depositar(valor){
        this.saldo += valor;
        let trans = new Transacao(TIPOTRANSACAO.creditar, new Date().toLocaleDateString(), valor, null, '+');
        this.transacoes.push(trans);
    }

    // sacar da conta

    sacar(valor){
        if (this.saldo >= valor) {
            this.saldo -= valor;
             let trans = new Transacao(TIPOTRANSACAO.debitar, new Date().toLocaleDateString(), valor, null, '-');
            this.transacoes.push(trans);
        }else{
            console.log("Error: Saldo insuficiente" + valor + "maior do que o saldo" + this.saldo + ".");
        }
    }

    // transferir

    // mostrar extrato

    //toString da conta

    //mostrar saldo

}