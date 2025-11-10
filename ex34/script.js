/*4️⃣Criando uma classe com lista interna
Crie uma classe Turma que tenha um array alunos.
Adicione métodos:
● adicionarAluno(nome)

● listarAlunos()

Use o método listarAlunos() para mostrar todos os nomes.*/

class Turma {
    constructor() {
        this.alunos = [];
    }

    adicionarAluno(nome) {
        this.alunos.push(nome);
    }

    listarAlunos() {
        this.alunos.forEach((aluno) => {
            console.log(aluno);
        });

    }
}

const aluno = new Turma();

aluno.adicionarAluno("Larissa");
aluno.adicionarAluno("Maysa");
aluno.adicionarAluno("Rayssa");
aluno.adicionarAluno("Duda");
aluno.adicionarAluno("Guilherme");

aluno.listarAlunos();