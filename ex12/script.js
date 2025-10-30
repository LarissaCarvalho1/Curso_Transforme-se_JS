// Peça o ano de nascimento e diga se o usuário pode votar (≥16 anos).

const anoAtual = new Date().getFullYear(); // Pega o ano atual
let anoNascimento = prompt("Ano de nascimento: ");

let idadeMinima = 16;

// Verifica se o "cancelar" foi selecionado ou se o campo está vazio
if (anoNascimento === null || anoNascimento.trim() === "") {
    alert("Ano de nascimento não foi preenchido!");

} else {
    anoNascimento = Number(anoNascimento);

    // Valida se dado é NaN 
    if (isNaN(anoNascimento)){
        alert("Por favor, digite apenas números válidos");

    } else {
        let idade = anoAtual - anoNascimento;

        // verifica se pode votar ou não
        if (idade >= idadeMinima){
            alert(`Com ${idade} anos você já pode votar`);

        } else {
            alert(`Com ${idade} anos você ainda NÃO pode votar.`);

        }
    }
}

console.log(anoAtual);