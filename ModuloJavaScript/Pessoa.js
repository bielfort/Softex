// Cadastro de pessoa: nome, salario, idade e se possui diploma

function Pessoa (nome, salario, idade, diploma) {
    this.nome = nome;
    this.salario = salario;
    this.idade = idade;
    this.diploma = diploma;  
}

Pessoa.nome = prompt("Informe seu nome:")
Pessoa.salario = parseFloat(prompt("Informe seu salario:"))
Pessoa.idade = parseInt(prompt("Informe seu idade:"))
Pessoa.diploma = prompt("Possui diploma? (SIM/NÃO):").toUpperCase();

if (Pessoa.diploma == "SIM" || Pessoa.diploma == "S") {
    Pessoa.diploma = true;
}else if (Pessoa.diploma == "NAO" || Pessoa.diploma == "NÃO" || Pessoa.diploma == "N"){
    Pessoa.diploma = false;
}else {console.log("Valor incorreto")}

console.log("Nome: " , Pessoa.nome, ". O tipo da variavel é ", typeof(Pessoa.nome));
console.log("Salario: " , Pessoa.salario, ". O tipo da variavel é ", typeof(Pessoa.salario));
console.log("Idade: " , Pessoa.idade, ". O tipo da variavel é ", typeof(Pessoa.idade));
console.log("Nome: " , Pessoa.diploma, ". O tipo da variavel é ", typeof(Pessoa.diploma));




