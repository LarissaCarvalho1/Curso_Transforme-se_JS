// Peça um número e mostre se ele é positivo e menor que 100 ao mesmo tempo.

let numero = prompt("Digite um número: ");

if (numero === null || numero.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    numero = Number(numero);

    if (isNaN(numero)) {
        alert("Por favor, informe apenas números.");

    } else {
        if (numero > 0 && numero < 100) {
            alert(`${numero} é POSITIVO e MENOR que 100 ao mesmo tempo`);
        } else {
            alert(`${numero} NÃO é POSITIVO e MENOR que 100 ao mesmo tempo`);
        }
    }
}