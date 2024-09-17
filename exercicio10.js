const vendas = [
    { produto: "Celular", quantidade: 2, valor: 1500 },
    { produto: "Notebook", quantidade: 1, valor: 3000 },
    { produto: "Fone de Ouvido", quantidade: 3, valor: 200 }
];

let valorTotal = 0;
vendas.forEach(venda => {
    valorTotal += venda.quantidade * venda.valor;
});

console.log(`Valor total das vendas: R$ ${valorTotal}`);
