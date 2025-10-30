// Peça a idade e diga a faixa etária:
// - até 12: criança
// - 13 a 17: adolescente
// - 18 a 64: adulto
// - 65+: idoso

let idade = prompt("Informe sua idade: ");

if (idade === null || idade.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    idade = Number(idade);

    if(isNaN(idade)) {
        alert("Por favor, informe apenas números.");

    } else {

        if (idade >= 65) {
            alert("Faixa etária: idoso");

        } else if (idade >= 18) {
            alert("Faixa etária: Adulto");

        } else if(idade >= 13) {
            alert("Faixa etária: Adolescente");

        } else {
            alert("Faixa etária: Criança");

        }
    }
}