let alunos = [
    { nome: "Carlos", nota1: 8, nota2: 7 },
    { nome: "Fernanda", nota1: 6, nota2: 9 },
    { nome: "Lucas", nota1: 5, nota2: 6 }
];

for (let aluno of alunos) {
    const media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`Nome: ${aluno.nome}, Média: ${media}`);
}
