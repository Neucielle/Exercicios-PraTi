const carrinho = {
    itens: [
        { nome: "Celular", quantidade: 2, precoUnitario: 1500 },
        { nome: "Notebook", quantidade: 1, precoUnitario: 3000 }
    ]
};

let valorTotal = 0;
carrinho.itens.forEach(item => {
    valorTotal += item.quantidade * item.precoUnitario;
});

console.log(`Valor total do carrinho: R$ ${valorTotal}`);
