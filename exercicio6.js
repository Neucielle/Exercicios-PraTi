const funcionarios = [
    { nome: "Pedro", cargo: "Gerente", salario: 5000 },
    { nome: "Ana", cargo: "Assistente", salario: 3500 },
    { nome: "João", cargo: "Desenvolvedor", salario: 6000 },
    { nome: "Natália", cargo: "Vendedora", salario: 1859 }
];

const salarioMinimo = 3000;
for (let funcionario of funcionarios) {
    if (funcionario.salario > salarioMinimo) {
        console.log(`Nome: ${funcionario.nome}, Salário: ${funcionario.salario}`);
    }
}
