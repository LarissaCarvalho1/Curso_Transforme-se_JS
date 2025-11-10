/*7️⃣Polimorfismo com sobrescrita
Crie uma classe Animal com um método fazerSom().
Crie duas subclasses:
● Cachorro → imprime "Au au!"
● Gato → imprime "Miau!"

Crie um array com objetos dos dois tipos e chame fazerSom() para
cada um.*/

class Animal{
    fazerSom(){

    }
}

class Cachorro extends Animal{
    fazerSom(){
        console.log("O Cachorro faz 'Au au!'");
    }
}

class Gato extends Animal{
    fazerSom(){
        console.log("O Gato faz 'Miau!'");
    }
}

const animais = [];

const luck = new Cachorro();
const mimo = new Gato();
const bobby = new Cachorro();
const faisca = new Gato();

animais.push(luck, mimo, bobby, faisca);
console.table(animais);

animais.forEach((animal) => {
    animal.fazerSom();
});