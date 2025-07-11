document.addEventListener("DOMContentLoaded", () => {
 
  const produtos = JSON.parse(localStorage.getItem("produtos")) || [];

  const salvarProdutos = () => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  };

  const tabelaProdutosBody = document.querySelector("#tabela-produtos tbody");
  const formularioProduto = document.getElementById("form-produto");


  const atualizarTabela = () => {

    tabelaProdutosBody.innerHTML = "";

    const produtosOrdenados = [...produtos].sort((a, b) => a.preco - b.preco);

    produtosOrdenados.forEach((produto) => {
      const linha = document.createElement("tr");
      const precoFormatado = produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

   
      linha.innerHTML = `
        <td>${produto.nome}</td>
        <td>${produto.descricao || "Sem descrição"}</td>
        <td>${precoFormatado}</td>
        <td>${produto.disponivel}</td>
      `;
      tabelaProdutosBody.appendChild(linha);
    });
  };

  
  if (formularioProduto) {
    formularioProduto.addEventListener("submit", (event) => {
      event.preventDefault(); 

      const nome = document.getElementById("productName").value;
      const descricao = document.getElementById("productDescription").value; 
      const preco = parseFloat(document.getElementById("productPrice").value);
      
      
      produtos.push({
        nome: nome,
        descricao: descricao,
        preco: preco,
        disponivel: "Sim", 
      });

    
      salvarProdutos(); 

      atualizarTabela();

      alert("Produto adicionado com sucesso!");
      formularioProduto.reset();
    });
  }


  atualizarTabela();
});