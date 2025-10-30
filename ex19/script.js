// Peça três números e mostre o maior e o menor.

let primeiroNum = prompt("Digite o 1° número: ");
let segundoNum = prompt("Digite o 2° número: ");
let terceiroNum = prompt("Digite o 3° número: ");

if (primeiroNum === null || segundoNum === null || terceiroNum === null ||
    primeiroNum.trim() === "" || segundoNum.trim() === "" || terceiroNum.trim() === "") {
    alert("Um ou mais campos não foram preenchidos!");

} else {
    primeiroNum = Number(primeiroNum);
    segundoNum = Number(segundoNum);
    terceiroNum = Number(terceiroNum);

    if (isNaN(primeiroNum) || isNaN(segundoNum) || isNaN(terceiroNum)) {
        alert("Por favor, informe apenas números");

    } else {
        let maior = primeiroNum;
        let menor = primeiroNum;

        if (segundoNum > maior) {
            maior = segundoNum;
        } 
        
        if (terceiroNum > maior) {
            maior = terceiroNum;
        }

        if(segundoNum < menor) {
            menor = segundoNum;
        }
        
        if (terceiroNum < menor) {
            menor = terceiroNum;
        }

        alert(`Números digitados: ${primeiroNum}, ${segundoNum}, ${terceiroNum}\nMAIOR: ${maior}\nMENOR: ${menor}`);
    }
}

