// Peça um número de 1 a 12 e mostre o mês do ano.

let mes = prompt("Digite o número de 1 a 12 para saber o mês do ano: ");

if (mes === null || mes.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    switch (mes.trim()) {
        case '1':
            alert("Mês: Janeiro");
            break;

        case '2':
            alert("Mês: Fevereiro");
            break;

        case '3':
            alert("Mês: Março");
            break;

        case '4':
            alert("Mês: Abril");
            break;

        case '5':
            alert("Mês: Maio");
            break;

        case '6':
            alert("Mês: Junho");
            break;

        case '7':
            alert("Mês: Julho");
            break;

        case '8':
            alert("Mês: Agosto");
            break;

        case '9':
            alert("Mês: Setembro");
            break;

        case '10':
            alert("Mês: Outubro");
            break;

        case '11':
            alert("Mês: Novembro");
            break;

        case '12':
            alert("Mês: Dezembro");
            break;
    
        default:
            alert("Escolha apenas números de 1 a 12.");
            break;
    }
}