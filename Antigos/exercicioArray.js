//Fila
const fila = [3, 7, 9, 1, 0];
console.log(fila)
while (fila.length > 0) {
    const elemento = fila.shift();
    console.log("Fila (FIFO): Elemento removido:", elemento);}

    // Lista
const lista = [3, 7, 9, 1, 0];
for (const elemento of lista) {
    console.log("Lista: Elemento removido:", elemento);
}

// Pilha (LIFO)
const pilha = [3, 7, 9, 1, 0];
while (pilha.length > 0) {
    const elemento = pilha.pop();
    console.log("Pilha (LIFO): Elemento removido:", elemento);
}