//Peça um número e diga se ele está entre 10 e 50 (inclusive).

let numero = prompt("Digite um número: ");

if (numero === null || numero.trim() === "") {
    alert("O campo não foi preechido!");

} else {
    numero = Number(numero);

    if(isNaN(numero)) {
        alert("Por favor, informe apenas números!");

    } else {
        if (numero >= 10 && numero <= 50) {
            alert(`O número ${numero} está entre [10, 50]`);

        } else {
            alert(`O número ${numero} NÃO está entre [10, 50]`);

        }
    }
}