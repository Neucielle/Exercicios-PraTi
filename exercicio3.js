const produto = {
    nome: "Notebook",
    preco: 2500,
    estoque: 10,
    desconto: 100,
    categoria: "Eletronico"
}

function propriedades(objeto, valorMinimo) {
    const novoObjeto = {};
    for (let propriedade in objeto) {

        if (typeof objeto[propriedade] === 'number' && objeto[propriedade] > valorMinimo) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }
    return novoObjeto;
}

console.log(propriedades(produto, 500));
