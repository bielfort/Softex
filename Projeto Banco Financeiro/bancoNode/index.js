import { Endereco } from './model/endereco.js'
import { Agencia } from './model/agencia.js'
import { Cliente } from './model/cliente.js'
import { Conta } from './model/conta.js'


let endAg = new Endereco('PE','Recife', 'São José', 'Rua da Guia', 1000, '305', '50000-090');
let agSoftex = new Agencia('Softex', 1234, '8131312121', 'agsoftex@gmail.com', endAg);
let endCliente = new Endereco('PE','Recife', 'iputinga', 'rua aderbal de melo', 123, 'na', '51520-540')
let cliente = new Cliente('Marcelo', '1234567-89', new Date("1969-12-06").toLocaleDateString(), 1234567, 'gabriel.leal.belfort@gmail.com', '81995033423', endCliente);
let contaCliente = new Conta(cliente, 4321, agSoftex, 1250.00)

contaCliente.depositar(200);
contaCliente.sacar(500);

console.log(contaCliente);