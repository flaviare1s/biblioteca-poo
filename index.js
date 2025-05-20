import Biblioteca from "./models/Biblioteca.js";
import Livro from "./models/Livro.js";
import LivroEspecial from "./models/LivroEspecial.js";

const minhaBiblioteca = new Biblioteca("GT-Sul");

const livro1 = new Livro("Dom Casmurro", "Machado de Assis", 1899);
const livro2 = new LivroEspecial(
  "Harry Potter",
  "J.K. Rowling",
  2011,
  "Fantasia"
);
const livro3 = new LivroEspecial(
  "O Senhor dos Anéis - A Sociedade do Anel",
  "J.R.R. Tolkien",
  1954,
  "Fantasia"
);
const livro4 = new LivroEspecial("Sapiens", "Yuval Harari", 2011, "História");

minhaBiblioteca.adicionarLivro(livro1);
minhaBiblioteca.adicionarLivro(livro2);
minhaBiblioteca.adicionarLivro(livro3);
minhaBiblioteca.adicionarLivro(livro4);

console.log("-----------------");

livro1.emprestar();
livro2.emprestar();
livro2.devolver();

minhaBiblioteca.listarLivros();
