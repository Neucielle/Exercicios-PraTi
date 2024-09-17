const empresa = {
    departamentos: [
        { nome: "Desenvolvimento", funcionarios: ["Carlos", "Ana"] },
        { nome: "Marketing", funcionarios: ["João", "Maria"] }
    ]
};

for (let departamento of empresa.departamentos) {
    for (let funcionario of departamento.funcionarios) {
        console.log(`Funcionário: ${funcionario}, Departamento: ${departamento.nome}`);
    }
}
