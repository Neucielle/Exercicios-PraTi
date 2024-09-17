const pedidos = [
    { cliente: "Carlos", produto: "Celular", quantidade: 1 },
    { cliente: "Ana", produto: "Notebook", quantidade: 2 },
    { cliente: "Carlos", produto: "Fone de Ouvido", quantidade: 3 }
];

const agrupamento = {};

pedidos.forEach(pedido => {
    if (!agrupamento[pedido.cliente]) {
        agrupamento[pedido.cliente] = 0;
    }
    agrupamento[pedido.cliente] += pedido.quantidade;
});

console.log(agrupamento);
