//Calcule a media de 3 notas do tipo nuimber

var media = 0, nota, i; 

for (i = 0; i < 3; i++) {
    nota = Number(prompt("Informe a nota " + (i+1) + ": "));
    media += nota;
    } 


console.log(media/(i))