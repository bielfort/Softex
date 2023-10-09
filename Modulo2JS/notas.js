
var op = 0;
var notas = 0;
var media = 0


while(op < 3) {
    notas = parseFloat(prompt("Informe a nota " + (op+1) + ":"));
    media = media + notas;
    console.log("Nota " + op + " armazenada")
    op++

}

console.log (notas);
console.log(op);
console.log(media);
console.log(media/op);


/* Saída no console:

notas.js:10 Nota 0 armazenada
notas.js:10 Nota 1 armazenada
notas.js:10 Nota 2 armazenada
notas.js:17 10
notas.js:18 3
notas.js:19 30
notas.js:20 10


*/