// Peça três notas e calcule a média. Mostre se o aluno foi aprovado (≥7),
// recuperação (≥5) ou reprovado.

let primeiraNota = prompt("1° nota: ");
let segundaNota = prompt("2° nota: ");
let terceiraNota = prompt("3° nota: ");

// Verifica se "cancelar" foi selecionado ou se o campo está vazio
if (primeiraNota === null || segundaNota === null || terceiraNota === null ||
    primeiraNota.trim() === "" || segundaNota.trim() === "" || 
    terceiraNota.trim() === ""){
    alert("Número não informado em um ou mais campos!");
} else{
    //conversão de string para numero
    primeiraNota = Number(primeiraNota);
    segundaNota = Number(segundaNota);
    terceiraNota = Number(terceiraNota);

    // verifica se são NaN
    if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota)) {
        alert("Um ou mais dados não são válidos");

    } else {
        let media = (primeiraNota + segundaNota + terceiraNota) / 3;

        // verifica a situação do aluno
        if (media >= 7) {
            alert(`APROVADO! \n\nMédia: ${media.toFixed(2)}`);
        } else if (media <= 5) {
            alert(`RECUPERAÇÃO! \n\nMédia: ${media.toFixed(2)}`);
        } else {
            alert(`REPROVADO! \n\nMédia: ${media.toFixed(2)}`);
        }
    }
}