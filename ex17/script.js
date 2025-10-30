//Peça um número e mostre se ele é divisível por 3 e por 5 ao mesmo tempo.

let numero = prompt("Digite um número: ");

if (numero === null || numero.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    numero = Number(numero);
    
    if(isNaN(numero)) {
        alert("Por favor, digite apenas números.");
    } else {
        if (numero % 3 === 0 && numero % 5 === 0) {
            alert(`${numero} é divisível por 3 e 5 ao mesmo tempo.`);

        } else {
            alert(`${numero} NÃO é divisível por 3 e 5 ao mesmo tempo.`);

        }
    }
}