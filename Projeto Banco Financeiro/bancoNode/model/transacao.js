export class Transacao{
    constructor(tipo, data, valor, clienteTransf, tipoValor){
        this.tipo = tipo;
        this.data = data;
        this.valor = valor;
        this.clienteTransf = clienteTransf;
        this.tipoValor = tipoValor;
    }
}