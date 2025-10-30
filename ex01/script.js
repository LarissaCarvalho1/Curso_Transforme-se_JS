// Peça ao usuário dois números e mostre a soma deles.

alert("Soma entre dois números");

let primeiroNumero = prompt("Digite o primeiro número: ");
let segundoNumero = prompt("Digite o segundo número: ");

// Number converte a string recebida pelo prompt para números, seja ele inteiro ou decimal. 
// Não aceita entradas tipo "123abc", apenas string numérica.
primeiroNumero = Number(primeiroNumero);
segundoNumero = Number(segundoNumero);

if(isNaN(primeiroNumero) || isNaN(segundoNumero)) {
    alert("Não foi possível efetuar a SOMA. Digite somente números.");
} else {
    let soma = primeiroNumero + segundoNumero;
    alert(`A soma entre ${primeiroNumero} e ${segundoNumero} é ${soma}`);
}
