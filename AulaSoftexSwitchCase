var op = "";
var valor = 0.0;

do {
    valor = parseFloat(prompt("Informe o valor do produto: "))
    op = prompt("Informe o estado que você irá vender o seu produto (MG/SP/RJ/MS): ").toUpperCase();
    switch(op){
        case "MG":
            valor *= 1.07;
            console.log(`O valor do seu produto com imposto em ${op} será: ${valor.toFixed(2)}`);
            break;
        case "SP":
            valor *= 1.12;
            console.log(`O valor do seu produto com imposto em ${op} será: ${valor.toFixed(2)}`);
            break;
        case "RJ":
            valor *= 1.15
            console.log(`O valor do seu produto com imposto em ${op} será: ${valor.toFixed(2)}`);
            break;
        case "MS":
            valor *= 1.08;
            console.log(`O valor do seu produto com imposto em ${op} será: ${valor.toFixed(2)}`);
            break;
         default:
            console.log("Valor inválido.")
            
    }
    op = prompt("Deseja continuar no programa? (S/N)").toUpperCase()
    
}while(op != "NÃO" || op != "NAO" || op != "N")
