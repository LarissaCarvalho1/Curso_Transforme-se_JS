// Peça o nome de uma cor e use switch para mostrar uma mensagem diferente pra
// cada cor.

let nomeCor = prompt("Digite o nome da cor\n\nCORES:\nVermelho\nAzul\nAmarelo\nVerde\nRosa\nPreto\nBranco\n ");

if (nomeCor === null || nomeCor.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    nomeCor = nomeCor.toLowerCase().trim();

    switch (nomeCor) {
        case "vermelho":
            alert("Vermelho: a cor da paixão... e dos boletos atrasados!");
            break;

        case 'azul':
            alert("Azul: tranquilo como o céu... até o Wi-Fi cair!");
            break;

        case 'amarelo':
            alert("Amarelo: brilha mais que o sol e o meu humor numa sexta-feira!");
            break;

        case 'verde':
            alert("Verde: a cor da esperança... e do pix que ainda não caiu!");
            break;

        case 'rosa':
            alert("Rosa: delicado, mas poderoso — tipo você num dia de café forte!");
            break;

        case 'preto':
            alert("Preto: combina com tudo, até com o drama da vida adulta!");
            break;

        case 'branco':
            alert("Branco: paz, leveza e uma manchinha de café pra completar!");
            break;

        default:
            alert("Cor não reconhecida!");
            break;
    }

}