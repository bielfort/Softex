var nomeComp, anoNasc, anoAtual, anoCorreto, idade;

anoAtual = Number(2022);
nomeComp = prompt("Insira seu nome completo! ");
anoCorreto = false;

while(anoCorreto==false){
    try{
        anoNasc = Number(prompt("Insira o seu ano de nascimento (YYYY)! "));
        if(isNaN(anoNasc)==false){
            if(anoNasc>1922 && anoNasc<2021) {
            anoCorreto=true;
            console.log("Nome completo: " + nomeComp);
            idade = Number( anoAtual - anoNasc)
            console.log("Sua idade atual: " + idade);
            }else {
                anoCorreto=false;
                console.log("Voce inseriu um ano menor que 1922 ou maior que 2021! Tente novamente!");
            }
        }else{
            throw new Error("Valor digitado não é válido");
        }    
    }catch(error){
        console.log(error)
        console.log("Valor inválido. Tente novamente!")
    }
    }
