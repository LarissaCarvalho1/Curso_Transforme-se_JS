/*6️⃣Herança com método
Adicione à classe Funcionario um método mostrarDados() que
retorna nome e salário.
Na classe Gerente, reaproveite o método da classe mãe usando
super.mostrarDados() e adicione o departamento.*/

class Funcionario {
    constructor(nome, salario){
        this.nome = nome,
        this.salario = salario
    }

    mostrarDados() {
        const texto = `NOME: ${this.nome} \nSALÁRIO: ${this.salario}`;
        return texto;
    }
}

class Gerente extends Funcionario{
    constructor(nome, salario, departamento){
        super(nome, salario);
        this.departamento = departamento;
    }

    mostrarDados(){
        const textRecebido = super.mostrarDados();
        alert(`${textRecebido}\nDEPARTAMENTO: ${this.departamento}`);
    }
}

const primeiroGerente = new Gerente("Larissa", 5000, "Tecnologia");
primeiroGerente.mostrarDados();
