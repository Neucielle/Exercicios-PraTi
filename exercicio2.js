const livro = {
    titulo: "Há dois mil anos",
    autor: "Francisco Cândido Xavier",
    anoPublicacao: "1939",
    genero: "Romance Espírita"
};

let editoraExiste = false;

for (let propriedade in livro) {
    if (propriedade === "editora") {
        editoraExiste = true;
    }
}

if (!editoraExiste) {
    livro.editora = "FEB";
}

console.log(livro);
