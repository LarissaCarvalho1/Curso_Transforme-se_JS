/*8️⃣Uso do super() no construtor
Crie uma classe Veiculo com marca e ano.
Crie uma classe Carro que herda de Veiculo e adiciona modelo.
Use super() para chamar o construtor da classe mãe.*/

class Veiculo{
    constructor(marca, ano){
        this.marca = marca;
        this.ano = ano;
    }
}

class Carro extends Veiculo {
    constructor(marca, ano, modelo){
        super(marca, ano);
        this.modelo = modelo;
    }
}

const carros = [];
const fusca = new Carro("Volkswagen", "1980", "Fusca");
const celta = new Carro("Chevrolet", "2014", "Celta");

carros.push(fusca, celta);

console.table(carros);

carros.forEach((carro) => {
    console.log(`Modelo: ${carro.modelo}, Marca: ${carro.marca}, Ano: ${carro.ano}`);
});

