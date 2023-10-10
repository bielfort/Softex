//1.
function calculadora() {
    while (true) {
      var operacao = prompt("Digite a operação (+, -, *, /) ou 'sair' para encerrar:");
  
      if (operacao === 'sair') {
        break;
      }
  
      var num1 = parseFloat(prompt("Digite o primeiro número:"));
      var num2 = parseFloat(prompt("Digite o segundo número:"));
  
      var resultado;
  
      switch (operacao) {
        case '+':
          resultado = num1 + num2;
          break;
        case '-':
          resultado = num1 - num2;
          break;
        case '*':
          resultado = num1 * num2;
          break;
        case '/':
          if (num2 !== 0) {
            resultado = num1 / num2;
          } else {
            resultado = "Divisão por zero!";
          }
          break;
        default:
          resultado = "Operação inválida";
      }
  
      alert("Resultado: " + resultado);
    }
  }
  
  calculadora();

  //2.

  function calcular(operacao, num1, num2) {
    var resultado;
  
    switch (operacao) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          resultado = "Divisão por zero!";
        }
        break;
      default:
        resultado = "Operação inválida";
    }
  
    return resultado;
  }
  
  var operacao = prompt("Digite a operação (+, -, *, /):");
  var num1 = parseFloat(prompt("Digite o primeiro número:"));
  var num2 = parseFloat(prompt("Digite o segundo número:"));
  
  var resultado = calcular(operacao, num1, num2);
  
  alert("Resultado: " + resultado);

  
  //3.

  const calcular = (operacao, num1, num2) => {
    let resultado;
  
    switch (operacao) {
      case '+':
        resultado = num1 + num2;
        break;
      case '-':
        resultado = num1 - num2;
        break;
      case '*':
        resultado = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          resultado = num1 / num2;
        } else {
          resultado = "Divisão por zero!";
        }
        break;
      default:
        resultado = "Operação inválida";
    }
  
    return resultado;
  };
  
  const operacao = prompt("Digite a operação (+, -, *, /):");
  const num1 = parseFloat(prompt("Digite o primeiro número:"));
  const num2 = parseFloat(prompt("Digite o segundo número:"));
  
  const resultado = calcular(operacao, num1, num2);
  
  alert("Resultado: " + resultado);
  
  