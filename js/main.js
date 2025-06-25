const { describe } = require("node:test");
const { format } = require("path");

let produtos = [];

class Produto {
  constructor(nome, descricao, preco, disponivel) {
    this.nome = nome;
    this.descricao = descricao;
    this.preco = preco;
    this.disponivel = disponivel;
  }

   adicionarProduto() {
    
      document
        .getElementById("form-produto")
        .addEventListener("submit", function (event) {
          event.preventDefault();

          const nome = document.getElementById("productName").value;
          const descricao = document.getElementById("roductDescription").value;
          const preco = document.getElementById("productPrice").value;
          const disponivel = document.getElementById("productAvailable").value;

     
          produtos.push({
            nome: nome,
            descricao: descricao,
            preco: parseFloat(preco),
            disponivel: "sim"
          });

          document.getElementById("form-produto").reset();

          exibirProdutos();
        });
    }

    exibirProdutos() {
        const tabelaProdutos = document.getElementById("tabelaProdutos").getElementsByTagName("tbody")[0];
        tabelaProdutos.innerHTML = "";
        
        produtos.forEach( produtos => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
            <td>${produtos.nome}</td>
            <td>${produtos.descricao}</td>
            <td>${produtos.preco.toFixed(2)}</td>
            <td>${produtos.disponivel}</td>
            `;
            tabelaProdutos.appendChild(linha);
        });
    }

    ordenarProdutos() {
        produtos.sort((a, b) => a.valor - b.valor);
        exibirProdutos();
    }
}
