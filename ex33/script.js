/*3️⃣Classe com lógica interna
Crie uma classe Calculadora com um método somar(a, b) e outro
multiplicar(a, b).
Crie um objeto dessa classe e teste os dois métodos.*/

class Calcular {
    constructor(primeiroNumero, segundoNumero){
        this.primeiroNumero = primeiroNumero,
        this.segundoNumero = segundoNumero
    }

    somar(){
        let soma = this.primeiroNumero + this.segundoNumero;
        console.log(soma);
    }

    multiplicar(){
        let multiplicar = this.primeiroNumero * this.segundoNumero;
        console.log(multiplicar);
    }
}

const valores = new Calcular(100, 2);

valores.somar();
valores.multiplicar();
