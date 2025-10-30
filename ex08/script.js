// Peça a idade e diga se o usuário é maior ou menor de idade.

alert("Veja se você é maior ou menor de idade");

let idade = prompt("Informe a sua idade: ");
maioridade = 18;

// Verifica se o botão "cancelar" foi selecionado ou se o campo está vazio
if (idade === null || idade.trim() === "") {
    alert("Você não informou sua idade!");
} else {
    // converte o que foi digitado para número
    idade = Number(idade);

    // verifica se o que foi digitado Não é um número (Not-a-Number)
    if (isNaN(idade)) {
        alert("Informe apenas números válidos");
    } else {
        // verifica se é maior ou menor de idade
        if (idade >= maioridade) {
            alert("Você é maior de idade!");
        } else {
            alert("Você é menor de idade!");
        }
    }
}
