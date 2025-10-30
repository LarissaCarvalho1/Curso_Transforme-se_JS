// Peça o número do mês e mostre a quantidade de dias (considere fevereiro com 28).

let mes = prompt("Digite o número de 1 a 12 para saber a quantidade de dias do mês: ");

if (mes === null || mes.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    switch (mes.trim()) {
        case '1':
            alert("Janeiro tem 31 dias");
            break;

        case '2':
            alert("Fevereiro tem 28 dias");
            break;

        case '3':
            alert("Março tem 31 dias");
            break;

        case '4':
            alert("Abril tem 30 dias");
            break;

        case '5':
            alert("Maio tem 31 dias");
            break;

        case '6':
            alert("Junho tem 30 dias");
            break;

        case '7':
            alert("Julho tem 31 dias");
            break;

        case '8':
            alert("Agosto tem 31 dias");
            break;

        case '9':
            alert("Setembro tem 30 dias");
            break;

        case '10':
            alert("Outubro tem 31 dias");
            break;

        case '11':
            alert("Novembro tem 30 dias");
            break;

        case '12':
            alert("Dezembro tem 31 dias");
            break;
    
        default:
            alert("Escolha apenas números de 1 a 12.");
            break;
    }
}