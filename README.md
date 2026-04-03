# 📚 BiblioTech - Sistema de Gestão Literária

> Uma implementação robusta de Princípios de Orientação a Objetos (POO) utilizando Node.js moderno.

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-ISC-blue?style=for-the-badge)

## 📖 Sobre o Projeto

O **BiblioTech** é um sistema de gerenciamento de acervo bibliográfico desenvolvido para demonstrar a aplicação prática de pilares da Programação Orientada a Objetos. O projeto organiza livros e bibliotecas através de classes bem estruturadas, permitindo a gestão de diferentes tipos de obras e coleções.

### 🧠 Conceitos Aplicados
- **Abstração**: Modelagem fiel de entidades do mundo real (Livros e Bibliotecas).
- **Encapsulamento**: Proteção de dados e lógica interna das classes.
- **Herança**: Extensão de funcionalidades através da classe `LivroEspecial`.
- **Módulos ES6**: Estrutura moderna de importação/exportação (`import`/`export`).

---

## 🛠️ Tecnologias Utilizadas

*   **Runtime:** Node.js (v14+)
*   **Linguagem:** JavaScript (ES6+)
*   **Gerenciador de Pacotes:** NPM

---

## 📂 Estrutura de Arquivos

```bash
biblioteca-poo/
├── models/
│   ├── Biblioteca.js      # Lógica de agrupamento e gestão da coleção
│   ├── Livro.js           # Classe base (Entidade Livro)
│   └── LivroEspecial.js   # Extensão com atributos adicionais (Herança)
├── index.js               # Ponto de entrada e execução do sistema
├── package.json           # Configurações e metadados
└── .gitignore             # Filtro de arquivos para o Git
```

---

## 🚀 Como Iniciar

### Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/flaviare1s/biblioteca-poo.git
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd biblioteca-poo
   ```

3. Instale as dependências (caso existam futuramente):
   ```bash
   npm install
   ```

### Execução

Para rodar o projeto e ver a lógica em funcionamento no terminal, execute:
```bash
node index.js
```

---

## 💻 Exemplo de Uso

O sistema permite criar instâncias de livros e adicioná-los a uma biblioteca virtual:

```javascript
import { Livro } from './models/Livro.js';
import { Biblioteca } from './models/Biblioteca.js';

const minhaBiblioteca = new Biblioteca();
const novoLivro = new Livro("O Alquimista", "Paulo Coelho", 1988);

minhaBiblioteca.adicionarLivro(novoLivro);
console.log(minhaBiblioteca.listarLivros());
```

---
*Este projeto é para fins educacionais e demonstração de arquitetura de software.*