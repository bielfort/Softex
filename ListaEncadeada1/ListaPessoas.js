import { ListaEncadeada } from "/listaEncadeada.js";
 

class Pessoa{
    constructor(nome, idade){
        this.nome = nome;
        this.idade = idade;
        // Lista encadeada de filhos
        this.filhos = new ListaEncadeada();
    }
}
// Criei a lista encadeada de pessas
var listaPessoas = new ListaEncadeada();

// Criar pessoas
var gabriel = new Pessoa("Gabriel Belfort", 28);
var mariana = new Pessoa("Mariana Siqueira", 23);
var catia = new Pessoa("Catia Aguiar", 30);
var helio = new Pessoa("Helio ", 33);

listaPessoas.addNoFim(gabriel);
listaPessoas.addNoFim(mariana);
listaPessoas.addNoFim(catia);
listaPessoas.addNoFim(helio);

// Criar filhos
var gabriela = new Pessoa("Gabriela Leal", 2);
gabriel.filhos.addNoFim(gabriela);

var marina = new Pessoa("Marina Siqueira", 7);
mariana.filhos.addNoFim(marina)

var gabriel = new Pessoa("Gabriel Leal", 28);
catia.filhos.addNoFim(gabriel);

var gabriel = new Pessoa("Gabriel Leal", 28);
helio.filhos.addNoFim(gabriel);


console.log(listaPessoas);