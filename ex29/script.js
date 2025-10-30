// Peça o nome do usuário e a hora atual (0–23). Mostre uma saudação apropriada:
// ● 0–11: “Bom dia”
// ● 12–17: “Boa tarde”
// ● 18–23: “Boa noite”


let nome = prompt("Digite o seu nome: ");
let horaAtual = new Date().getHours();

console.log(horaAtual);

if (nome === null || nome.trim() === "") {
    alert("O campo não foi preechido!");

} else {
    nome = nome.trim();

    if (horaAtual <= 11) {
        alert(`Bom dia, ${nome}!`);
    } else if (horaAtual <= 17) {
        alert(`Boa tarde, ${nome}!`);
    } else if (horaAtual <= 23) {
        alert(`Boa noite, ${nome}!`);
        
    }
}
