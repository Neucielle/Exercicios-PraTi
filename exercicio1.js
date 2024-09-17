const carro = {
    marca: "Renault",
    modelo: "Fluence",
    ano: "2015",
    cor: "branco"
}

for (let propriedades in carro) {
    console.log(`${propriedades}: ${carro[propriedades]}`)
}