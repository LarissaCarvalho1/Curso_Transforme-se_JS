// Peça dois números e mostre o maior deles.

alert("Comparação entre números: Maior");

let primeiroNumero = prompt("Digite o 1° número: ");
let segundoNumero = prompt("Digite o 2° número: ");

// Verifica se "cancelar" foi selecionado ou se o campo está vazio
if (primeiroNumero === null || segundoNumero === null || 
    primeiroNumero.trim() === "" || segundoNumero.trim() === "") {
    alert("Número não informado em um ou mais campos!");

} else {
    // converte a string para número
    primeiroNumero = Number(primeiroNumero);
    segundoNumero = Number(segundoNumero);

    // verifica se é NaN - não número
    if (isNaN(primeiroNumero) || isNaN(segundoNumero)){
        alert("Um ou mais dados não são válidos");

    } else {
        // verificação do maior número
        if(primeiroNumero > segundoNumero) {
            alert(`O maior número é ${primeiroNumero}`);

        } else if (primeiroNumero < segundoNumero){
            alert(`O maior número é ${segundoNumero}`);

        } else {
            alert(`Os números ${primeiroNumero} e ${segundoNumero} são iguais`);
        }
    }

}