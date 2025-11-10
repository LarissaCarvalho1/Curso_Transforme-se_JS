/*🔟 Mini sistema de transporte (desafio)
Crie:
● Classe Transporte com atributo tipo e método mover().
● Classe Carro que herda de Transporte e sobrescreve
mover() para mostrar "O carro está dirigindo.".
● Classe Avião que herda de Transporte e sobrescreve
mover() para mostrar "O avião está voando.".

Crie objetos dos dois tipos e teste o método mover().*/

class Transporte {
    constructor(tipo){
        this.tipo = tipo;
    }

    Mover(){
        console.log("O transporte está parado.");
    }
}

class Carro extends Transporte{
    Mover(){
        console.log("O carro está digirindo.");
    }
}

class Aviao extends Transporte{
    Mover(){
        console.log("O avião está voando.");
    }
}

const primeiroCarro = new Carro();
const segundoCarro = new Carro();

const primeiroAviao = new Aviao();
const segundoAviao = new Aviao();

const transportes = [];

transportes.push(primeiroCarro, primeiroAviao, segundoCarro, segundoAviao);

transportes.forEach((transporte) =>{
    transporte.Mover();
});



