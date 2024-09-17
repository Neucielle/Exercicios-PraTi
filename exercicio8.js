const filmes = [
    { titulo: "Inception", diretor: "Christopher Nolan", anoLancamento: 2010 },
    { titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
    { titulo: "Interstellar", diretor: "Christopher Nolan", anoLancamento: 2014 }
];

const titulos = [];
filmes.forEach(filme => titulos.push(filme.titulo));

console.log(titulos);
