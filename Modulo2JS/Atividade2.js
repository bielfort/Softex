/*Objeto Material: Carro
Atributos:

Marca
Modelo
Ano de fabricação
Métodos:

Ligar o carro
Desligar o carro
Acelerar o carro
javascript
*/

const carro = {
  marca: "Toyota",
  modelo: "Corolla",
  anoFabricacao: 2022,
  ligado: false,
  ligar() {
    this.ligado = true;
    console.log("O carro está ligado.");
  },
  desligar() {
    this.ligado = false;
    console.log("O carro está desligado.");
  },
  acelerar(velocidade) {
    if (this.ligado) {
      console.log(`Acelerando o carro para ${velocidade} km/h.`);
    } else {
      console.log("O carro precisa estar ligado para acelerar.");
    }
  }
};

carro.ligar();
carro.acelerar(60);
carro.desligar();


/*Objeto Material: Smartphone

Atributos:

Marca
Modelo
Sistema Operacional
Métodos:

Fazer uma chamada
Enviar uma mensagem
Tirar uma foto
javascript
*/

const smartphone = {
  marca: "Apple",
  modelo: "iPhone 13",
  sistemaOperacional: "iOS",
  ligado: false,
  ligar() {
    this.ligado = true;
    console.log("O smartphone está ligado.");
  },
  desligar() {
    this.ligado = false;
    console.log("O smartphone está desligado.");
  },
  fazerChamada(numero) {
    if (this.ligado) {
      console.log(`Chamando ${numero}...`);
    } else {
      console.log("Ligue o smartphone antes de fazer uma chamada.");
    }
  },
  tirarFoto() {
    if (this.ligado) {
      console.log("Tirando uma foto...");
    } else {
      console.log("Ligue o smartphone antes de tirar uma foto.");
    }
  }
};

smartphone.ligar();
smartphone.fazerChamada("123-456-789");
smartphone.tirarFoto();
smartphone.desligar();

/* Objeto Abstrato: Conta Bancária
Atributos:

Nome do titular
Saldo
Número da conta
Métodos:

Realizar um depósito
Realizar um saque
Verificar o saldo
javascript
*/

const contaBancaria = {
  titular: "João Silva",
  saldo: 5000,
  numeroConta: "12345678",
  deposito(valor) {
    this.saldo += valor;
    console.log(`Depósito de R$${valor} realizado com sucesso. Saldo: R$${this.saldo}`);
  },
  saque(valor) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque de R$${valor} realizado com sucesso. Saldo: R$${this.saldo}`);
    } else {
      console.log("Saldo insuficiente para o saque.");
    }
  },
  verificarSaldo() {
    console.log(`Saldo disponível: R$${this.saldo}`);
  }
};

contaBancaria.deposito(1000);
contaBancaria.saque(500);
contaBancaria.verificarSaldo();

/*Objeto Abstrato: Rede Social

Atributos:

Nome de usuário
Número de amigos
Posts publicados
Métodos:

Publicar um post
Adicionar um amigo
Verificar o número de amigos

*/


const redeSocial = {
  usuario: "jsilva123",
  amigos: 500,
  posts: [],
  publicarPost(texto) {
    this.posts.push(texto);
    console.log(`Novo post publicado: "${texto}"`);
  },
  adicionarAmigo() {
    this.amigos++;
    console.log("Amigo adicionado com sucesso.");
  },
  verificarAmigos() {
    console.log(`Você tem ${this.amigos} amigos na rede social.`);
  }
};

redeSocial.publicarPost("Olá, mundo!");
redeSocial.adicionarAmigo();
redeSocial.verificarAmigos();

//Esses exemplos demonstram como criar objetos com atributos e métodos em JavaScript e como utilizá-los para representar objetos materiais (carro e smartphone) e objetos abstratos (conta bancária e rede social).