// Peça dois números e mostre a subtração do primeiro pelo segundo.

alert("Subtração entre dois números");

let primeiroNumero = prompt("Digite o primeiro número:");
let segundoNumero = prompt("Digite o segundo número: ");

primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);

if(isNaN(primeiroNumero) || isNaN(segundoNumero)) {
    alert("Não foi possível efetuar a SUBTRAÇÃO. Digite somente números.");
} else {
    let subtracao = primeiroNumero - segundoNumero;
    alert(`A subtração de ${primeiroNumero} por ${segundoNumero} é ${subtracao}`);
}