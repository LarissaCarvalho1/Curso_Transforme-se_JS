//Peça o preço de um produto e mostre o valor com 10% de desconto.

let precoProduto = prompt("Preço do produto: ");

if (precoProduto === null || precoProduto.trim() === "") {
    alert("O campo não foi preechido!");
} else {
    precoProduto = Number(precoProduto).toFixed(2);

    if (isNaN(precoProduto)) {
        alert("Por favor, informe apenas números válidos.");
        
    } else {
        let valorDesconto = precoProduto * 0.9;
        alert(`Com o desconto de 10% sobre o preço atual de R$${precoProduto}, o produto sairá por R${valorDesconto.toFixed(2)}`)
    }
}