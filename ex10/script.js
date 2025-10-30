// Peça dois números e mostre se são iguais ou diferentes.

alert("Comparação entre números: Igualdade");

let primeiroNumero = prompt("Digite o 1° número: ");
let segundoNumero = prompt("Digite o 2° número: ");

// Verifica se "cancelar" foi selecionado ou se o campo está vazio
if (primeiroNumero === null || segundoNumero === null ||
    primeiroNumero.trim() === "" || segundoNumero.trim() === "") {
    alert("Número não informado em um ou mais campos!");

} else {
    // conversão de string para numero
    primeiroNumero = Number(primeiroNumero);
    segundoNumero = Number(segundoNumero);

    // verifica se são NaN
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
        alert("Um ou mais dados não são válidos");

    } else {
        // verifica se são iguais ou diferentes
        if (primeiroNumero === segundoNumero){
            alert(`Os números ${primeiroNumero} e ${segundoNumero} são IGUAIS`);

        } else {
            alert(`Os números ${primeiroNumero} e ${segundoNumero} são DIFERENTES`);

        }
    }
}