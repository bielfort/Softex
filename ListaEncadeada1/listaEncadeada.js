import { No } from "./ListaEncadeada1/no.js";

export class ListaEncadeada {
    constructor(cabeca) {
        this.cabeca = null;
        this.contador = 0;
    }
    // unshift()
    addNoComeco(conteudo) {
        let novoNo = new No(conteudo, null);
        if (this.cabeca === null) {
            this.cabeca = novoNo;
            this.contador++;
        }else{
            novoNo.proximo = this.cabeca;
            this.cabeca = novoNo;
            this.contador++;

        }
    }

     // push()
     addNoFim(conteudo) {
          let NovoNo = new No(conteudo, null);
          if (this.cabeca === null) {
              this.cabeca = NovoNo;
              this.contador++;
          }else{
              let aux = this.cabeca;
              while(aux.proximo !== null){
                  aux = aux.proximo;
              }
              aux.proximo = NovoNo;
              this.contador++;
          }
     }

      // splice()
      addNoAt(conteudo, indice) {
        if (indice === 0){
            this.addNoAt(conteudo);
        }else if(indice >= this.contador){
            this.addNoAt(conteudo);
        }else{
            let novoNo = new No(conteudo, null);
            let aux = this.cabeca;
            let anterior = null;
            for (let i = 0; i < indice ; i++){
                anterior = aux;
                aux = aux.proximo;
            }
            anterior.proximo = novoNo;
            novoNo = aux;
            this.contador++;
            return this.contador;
        }
    }

    // shift()
    removerNoInicio(){
        if(this.cabeca === null){
            return null;
        }else{
            aux = this.cabeca;
            this.cabeca = this.cabeca.proximo;
            aux.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }
    // pop()
    removerNoFim(){
        if(this.cabeca === null){
            return null;
        }else{
            let aux = this.cabeca;
            let anterior;
            while(aux.proximo !== null){
                anterior = aux;
                aux = aux.proximo;
            }
            anterior.proximo = null;
            this.contador--;
            return aux.conteudo;
        }
    }
}