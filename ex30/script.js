// Crie um menu interativo com switch onde o usuário pode escolher entre:
// Somar dois números
// Descobrir se um número é par ou ímpar
// Calcular média de três notas
// Sair


let menu = prompt("Menu de serviços:\n1 - Somar dois números\n2 - Número é par ou ímpar\n3 - Calcular média\n0 - Sair\n\nEscolha uma número:");


if (menu === null || menu.trim() === "") {
    alert("O campo não foi preechido!");

} else {
    menu = menu.trim();

    switch (menu) {
        case '1':
            let primeiroNumero = prompt("Digite o 1° número: ");
            let segundoNumero = prompt("Digite o 2° número: ");
            primeiroNumero = Number(primeiroNumero);
            segundoNumero = Number(segundoNumero);
            if (isNaN(primeiroNumero) || isNaN(segundoNumero)) {
                alert("Não foi possível efetuar a SOMA. Digite somente números.");
            } else {
                let soma = primeiroNumero + segundoNumero;
                alert(`A soma entre ${primeiroNumero} e ${segundoNumero} é ${soma}`);
            }
            break;

        case '2':
            let numero = prompt("Digite um número: ");
            numero = Number(numero);

            if (!isNaN(numero)) {
                if (numero % 2 === 0) {
                    alert(`O número ${numero} é PAR`);
                } else {
                    alert(`O número ${numero} é ÍMPAR`);
                }
            } else {
                alert("Digite apenas números válidos.");
            }
            break;

        case '3':
            let primeiraNota = prompt("1° nota: ");
            let segundaNota = prompt("2° nota: ");
            let terceiraNota = prompt("3° nota: ");

            if (primeiraNota === null || segundaNota === null || terceiraNota === null || primeiraNota.trim() === "" || segundaNota.trim() === "" ||
                terceiraNota.trim() === "") {
                alert("Número não informado em um ou mais campos!");
            } else {
                primeiraNota = Number(primeiraNota);
                segundaNota = Number(segundaNota);
                terceiraNota = Number(terceiraNota);

                if (isNaN(primeiraNota) || isNaN(segundaNota) || isNaN(terceiraNota)) {
                    alert("Um ou mais dados não são válidos");

                } else {
                    let media = (primeiraNota + segundaNota + terceiraNota) / 3;

                    if (media >= 7) {
                        alert(`APROVADO! \n\nMédia: ${media.toFixed(2)}`);
                    } else if (media <= 5) {
                        alert(`RECUPERAÇÃO! \n\nMédia: ${media.toFixed(2)}`);
                    } else {
                        alert(`REPROVADO! \n\nMédia: ${media.toFixed(2)}`);
                    }
                }
            }
            break;

        case '0':
            alert("Saindo...");
            break;

        default:
            alert("Opção inválida!");
            break;
    }
}
