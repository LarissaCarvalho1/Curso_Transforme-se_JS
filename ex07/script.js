// Peça o nome do usuário e exiba um alert com “Olá, [nome]!”.

let nome = prompt("Digite seu some: ");

// trim() remove espaços do início e do fim da String
 if (nome === null) {
    alert("Sessão Cancelada");
} else if (nome.trim() === "") {
    alert("O campo não foi preenchido.");
} else {
    alert(`Olá, ${nome}!`);
}


