// Peça dois números e mostre o resultado da multiplicação.

alert("Multiplicação entre dois números");

let primeiroNumero = prompt("Digite o primeiro número:");
let segundoNumero = prompt("Digite o segundo número: ");

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);

if(isNaN(primeiroNumero) || isNaN(segundoNumero)) {
    alert("Não foi possível efetuar a MULTIPLICAÇÃO. Digite somente números.");
} else {
    let resultado = primeiroNumero * segundoNumero;
    alert(`A multiplicação de ${primeiroNumero} por ${segundoNumero} é ${resultado}`);
}
