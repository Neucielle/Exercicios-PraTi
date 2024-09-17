const estoque = [
    { produto: "Celular", quantidade: 2, minimo: 5 },
    { produto: "Notebook", quantidade: 6, minimo: 3 },
    { produto: "Fone de Ouvido", quantidade: 1, minimo: 2 }
];

estoque.forEach(item => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);
