// Peça uma nota (A, B, C, D, F) e mostre o significado (“Excelente”, “Bom”, “Regular”,
// “Ruim”, “Reprovado”).

let nota = prompt("Digite a nota para saber o significado [A, B, C, D ou F]: ");

if (nota === null || nota.trim() === "") {
    alert("O campo não foi preenchido!");

} else {
    nota = nota.toLowerCase().trim();

    switch (nota) {
        case 'a':
            alert("A -> Excelente");
            break;

        case 'b':
            alert("B -> Bom");
            break;

        case 'c':
            alert("C -> Regular");
            break;

        case 'd':
            alert("D -> Ruim");
            break;

        case 'f':
            alert("F -> Reprovado");
            break;
    
        default:
            alert('Escolha apenas as notas [A, B, C, D ou F] para saber o significado. ')
            break;
    }
}