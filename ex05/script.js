// Peça um número e mostre se ele é par ou ímpar.

alert("O número é PAR ou ÍMPAR?");

let numero = prompt("Digite um número: ");
numero = Number(numero);

if (!isNaN(numero)) {
    if (numero % 2 === 0) {
        alert(`O número ${numero} é PAR`);
    } else {
        alert(`O número ${numero} é ÍMPAR`);
    }
} else {
    alert("Digite apenas números válidos.");
}


console.log(typeof numero);