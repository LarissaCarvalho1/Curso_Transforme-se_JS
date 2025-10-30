//Peça um número e diga se ele é múltiplo de 5.

let numero = prompt("Digite um número: ");

if (numero === null || numero.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    numero = Number(numero);

    if (isNaN(numero)) {
        alert("Por favor, digite apenas números.");

    } else {
        if (numero % 5 === 0) {
            alert(`O número ${numero} é múltiplo de 5`);

        } else {
            alert(`O número ${numero} NÃO é múltiplo de 5`);

        }
    }

}