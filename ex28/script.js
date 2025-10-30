// Peça dois números e uma operação (usando switch) para criar uma mini
// calculadora.

let primeiroNum = prompt("Digite o 1° número: ");
let segundoNum = prompt("Digite o 2° número: ");
let operacao = prompt("Escolha a Operação:\n'+' para SOMAR\n'-' para SUBTRAIR\n'*' para MULTIPLICAR\n'/' para DIVIDIR");
let resultado = 0;

if (primeiroNum === null || segundoNum === null || operacao === null ||
    primeiroNum.trim() === "" || segundoNum.trim() === "" || operacao.trim() === "") {
    alert("Um ou mais campos não foram preechidos!");

} else {
    primeiroNum = Number(primeiroNum);
    segundoNum = Number(segundoNum);
    
    if(isNaN(primeiroNum) || isNaN(segundoNum)) {
        alert("Por favor, informe apenas números válidos.");

    } else {
        switch (operacao.trim()) {
            case '+':
                resultado = primeiroNum + segundoNum;
                alert(`A soma entre ${primeiroNum} e ${segundoNum} é ${resultado}`);
                break;

            case '-':
                resultado = primeiroNum - segundoNum;
                alert(`A subtração de ${primeiroNum} por ${segundoNum} é ${resultado}`);
                break;

            case '*':
                resultado = primeiroNum * segundoNum;
                alert(`A multiplicação entre ${primeiroNum} e ${segundoNum} é ${resultado}`);
                break;
                
            case '/':
                resultado = primeiroNum / segundoNum;
                alert(`A divisão de ${primeiroNum} por ${segundoNum} é ${resultado}`);
                break;
        
            default:
                alert("Esta operação não é válida.");
                break;
        }
    }
}
