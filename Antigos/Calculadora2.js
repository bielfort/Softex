//Criei o código direto pela IDE a
//Faça, utilizando o Google Blockly, uma função calculadora que os números e as operações serão feitas pelo usuário. O código deve ficar rodando infinitamente até que o usuário escolha a opção de sair. No início, o programa mostrará a seguinte lista de operações:
//1: Soma
//2: Subtração
//3: Multiplicação
//4: Divisão
//0: Sair
//Digite o número para a operação correspondente e caso o usuário introduza qualquer outro, o sistema deve mostrar a mensagem “Essa opção não existe” e voltar ao menu de opções.
//Após a seleção, o sistema deve pedir para o usuário inserir o primeiro e segundo valor, um de cada. Depois precisa executar a operação e mostrar o resultado na tela. Quando o usuário escolher a opção “Sair”, o sistema irá parar. 

//inicio - declaracao de variaveis
var calculo, n1, n2, opcao;
var menu = `

Esta é uma calculadora. Bem-vindo!

1. Soma
2. Subtração
3. Multiplicação
4. Divisão
0. Sair
`
// Funcoes
function soma(calculo) {
    calculo = parseFloat(n1) + parseFloat(n2)
    return calculo;
}
function subtracao(calculo) {
    calculo = parseFloat(n1) - parseFloat(n2)
    return calculo;
}
function multiplicacao(calculo) {
    calculo = parseFloat(n1) * parseFloat(n2)
    return calculo;
}
function divisao(calculo) {
    calculo = parseFloat(n1) / parseFloat(n2)
    return calculo;
}

// Execução
// Primeiro while irá servir para fazer o loop do programa, enquanto o segundo para garantir que os valores digitados estejam entre 0 e 4
while (opcao != 0) {
    //Input de menu
    alert(menu); 
    opcao = parseInt(prompt("Selecione a operação desejada:")) 
    while (opcao > 4 || opcao < 0) {
        console.log("Valor selecionado é inválido. Tente novamente.")
        alert(menu)
        opcao = parseInt(prompt("Selecione a operação desejada:"))
    }

    switch(opcao) {
        case 1: 
            n1 = prompt(`Agora informe o primeiro numero: `)
            n2 = prompt(`Agora informe o segundo numero: `)
            console.log(soma(calculo))
            break;
        case 2:
            n1 = prompt(`Agora informe o primeiro numero: `)
            n2 = prompt(`Agora informe o segundo numero: `)
            console.log(subtracao(calculo))
            b1reak;
        case 3:
            n1 = prompt(`Agora informe o primeiro numero: `)
            n2 = prompt(`Agora informe o segundo numero: `)
            console.log(multiplicacao(calculo))
            break;
        case 4:
            n1 = prompt(`Agora informe o primeiro numero: `)
            n2 = prompt(`Agora informe o segundo numero: `)
            console.log(divisao(calculo))
            break;
        case 0:
            console.log("Encerrando programa...")
            break;

        }
}
