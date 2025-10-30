// Peça o nome de um time e mostre uma frase divertida sobre ele.

let nomeTime = prompt("Digite o nome do time: ");

if (nomeTime === null || nomeTime.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    nomeTime = nomeTime.toUpperCase().trim();
    alert(`Dizem que o ${nomeTime} é igual Wi-Fi: às vezes conecta, às vezes some!`);
}