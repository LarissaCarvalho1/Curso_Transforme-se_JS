// Peça o nome de uma fruta e use switch para mostrar seu preço.

let fruta = prompt("Digite o nome da fruta para saber o valor\n\nFRUTAS\nBanana\nMorango\nLaranja\nAbacaxi\n");

if (fruta === null || fruta.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    fruta = fruta.toLocaleLowerCase().trim();
    switch (fruta) {
        case 'banana':
            alert("Banana - R$ 5,00");
            break;

        case 'morango':
            alert("Morango - R$ 10,00");
            break;

        case 'laranja':
            alert("Laranja - R$ 6,00");
            break;

        case 'abacaxi':
            alert("Abacaxi - R$ 15,00");
            break;
    
        default:
            alert("Item inválido!");
            break;
    }
}