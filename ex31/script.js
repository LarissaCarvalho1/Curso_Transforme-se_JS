/*1️⃣Criando uma classe simples
Crie uma classe chamada Pessoa com os atributos nome e idade.
Depois, crie dois objetos dessa classe e mostre os valores no console.*/

class Pessoa {
    constructor(nome, idade){
        this.nome = nome,
        this.idade = idade
    }

}

const julia = new Pessoa("Júlia", 20);
const luiz = new Pessoa("Luiz", 17); 

console.log(`Olá, me chamo ${julia.nome} e tenho ${julia.idade}`);
console.log(`Olá, me chamo ${luiz.nome} e tenho ${luiz.idade}`);