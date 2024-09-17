const produtos = [
    { nome: "Camisa", preco: 50, desconto: 0 },
    { nome: "Calça", preco: 100, desconto: 0 },
    { nome: "Sapato", preco: 150, desconto: 0 }
];

produtos.forEach(produto => {
    produto.preco *= 0.9;
    console.log(`Novo preço de ${produto.nome}: ${produto.preco}`);
});
