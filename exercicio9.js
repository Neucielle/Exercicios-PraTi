const clientes = [
    { nome: "Anna", idade: 28, cidade: "Curitiba" },
    { nome: "Maria", idade: 35, cidade: "São Paulo" },
    { nome: "João Paulo", idade: 40, cidade: "Rio de Janeiro" }
];

let contador = 0;
clientes.forEach(cliente => {
    if (cliente.idade > 30) {
        contador++;
    }
});

console.log(`Clientes com mais de 30 anos: ${contador}`);
