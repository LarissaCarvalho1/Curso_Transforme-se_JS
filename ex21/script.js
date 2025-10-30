// Peça ao usuário para digitar um número de 1 a 7 e use switch para mostrar o dia
// da semana correspondente.

let diaSemana = prompt("Digite o número de 1 a 7 para saber o dia da semana: ");

if (diaSemana === null || diaSemana.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    switch (diaSemana.trim()) {
        case '1':
            alert("Dia da semana: Domingo");
            break;

        case '2':
            alert("Dia da semana: Segunda-Feira");
            break;

        case '3':
            alert("Dia da semana: Terça-Feira");
            break;

        case '4':
            alert("Dia da semana: Quarta-Feira");
            break;

        case '5':
            alert("Dia da semana: Quinta-Feira");
            break;

        case '6':
            alert("Dia da semana: Sexta-Feira");
            break;

        case '7':
            alert("Dia da semana: Sábado");
            break;
    
        default:
            alert("Escolha apenas números de 1 a 7.");
            break;
    }
}