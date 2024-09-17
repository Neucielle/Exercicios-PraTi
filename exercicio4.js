const pessoas = [
    { nome: "Polliana", idade: 30, cidade: "São Paulo" },
    { nome: "Pedro", idade: 25, cidade: "Rio de Janeiro" },
    { nome: "Maria", idade: 35, cidade: "Curitiba" }
];

for (let pessoa of pessoas) {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}, Cidade: ${pessoa.cidade}`);
}