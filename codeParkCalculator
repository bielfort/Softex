//Trata-se de um programa de calculadora escrito em javascript
//Faça uma função calculadora de dois números com três parâmetros: os dois primeiros serão os números da operação e o terceiro será a entrada que definirá a operação a ser executada. Considera a seguinte definição:
//1. Soma
//2. Subtração
//3. Multiplicação
//4. Divisão

//Caso seja inserido um número de operação que não exista, o resultado deverá ser 0. --> Apesar de colocar um default no switchcase, fiz a validação com while para não haver outra opção.

//inicio - declaracao de variaveis
var calculo, n1, n2, opcao;

var menu = `
1. Soma
2. Subtração
3. Multiplicação
4. Divisão`

//Input de menu
console.log("Esta é uma calculadora");
alert("Bem-vindo!");
alert(menu);
opcao = parseInt(prompt("Selecione a operação desejada:"))

while (opcao > 4 || opcao < 1) {
    console.log("Valor selecionado é inválido. Tente novamente.")
    alert(menu)
    opcao = parseInt(prompt("Selecione a operação desejada:"))
}

// Input de calculo
n1 = prompt(`Agora informe o primeiro numero: `)
n2 = prompt(`Agora informe o segundo numero: `)

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

// output
switch(opcao) {
    case 1: 
        console.log(soma(calculo))
        break;
    case 2:
        console.log(subtracao(calculo))
        break;
    case 3:
        console.log(multiplicacao(calculo))
        break;
    case 4:
        console.log(divisao(calculo))
        break;
    default:
        console.log("0");
}
