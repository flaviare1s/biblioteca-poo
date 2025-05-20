class Livro {
  #status;

  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
    this.#status = "disponível";
  }

  getStatus() {
    return this.#status;
  }

  emprestar() {
    if (this.#status === "disponível") {
      this.#status = "emprestado";
      console.log(`${this.titulo} emprestado com sucesso!`);
    } else {
      console.log(`${this.titulo} está indisponível!`);
    }
  }

  devolver() {
    this.#status = 'disponível'
    console.log(`${this.titulo} foi devolvido!`)
  }

  exibirInfo() {
    return `${this.titulo} - ${this.autor} - ${this.ano} - ${this.#status}`;
  }
}

export default Livro;
