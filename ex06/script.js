// Peça um número e mostre se ele é positivo, negativo ou zero.

alert("O número é POSITIVO, NEGATIVO ou ZERO?");

let numero = prompt("Digite um número: ");
numero = Number(numero);

if (!isNaN(numero)) {
    if (numero > 0) {
        alert(`O número ${numero} é POSITIVO`);
    } else if (numero < 0) {
        alert(`O número ${numero} é NEGATIVO`);
    } else {
        alert(`O número ${numero} é ZERO`);
    }
} else {
    alert("Digite um número válido.");
}