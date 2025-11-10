/*2️⃣Adicionando métodos
Na classe Pessoa, adicione um método apresentar() que retorne:
"Olá, meu nome é [nome] e tenho [idade] anos."
Crie um objeto e chame o método.*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }

    apresentar(){
        alert(`Olá, meu nome é ${this.nome} e tenho ${this.idade}`);
    }


}

const julia = new Pessoa("Júlia", 20);

julia.apresentar();
