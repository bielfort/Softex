function expSomatorio(num) {
    let result = 0;
    if (num > 0) {
        for (let i = 0; i < num; i++) {
          result += 2 * i + 1;
        }
        return result;
    } else {
        console.log("Número inválido...");
        return ""; 
    }
           
} 
var num = parseInt(prompt("Informe um numero inteiro positivo:"));
console.log(`${num}² =  ${expSomatorio(num)}`);
