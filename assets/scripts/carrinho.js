let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

let valorFrete = 0;



function mostrarCarrinho() {
  
  let lista = document.getElementById("listaCarrinho");
  
  lista.innerHTML = "";
  
  
  let subtotal = 0;
  
  
  
  if (carrinho.length === 0) {
    
    lista.innerHTML = `
            <p>Seu carrinho está vazio.</p>
        `;
    
  }
  
  
  
  carrinho.forEach((produto, index) => {
    
    
    subtotal += produto.preco * produto.quantidade;
    
    
    
    lista.innerHTML += `

        <div class="itemCarrinho">


            <img src="${produto.imagem}">


            <div>


                <h3>${produto.nome}</h3>


                <p>
                    Preço: R$ ${produto.preco.toFixed(2)}
                </p>



                <div class="controleQuantidade">


                    <button onclick="alterarQuantidade(${index}, -1)">
                        -
                    </button>


                    <span>
                        ${produto.quantidade}
                    </span>


                    <button onclick="alterarQuantidade(${index}, 1)">
                        +
                    </button>


                </div>



                <p>
                    Subtotal:
                    R$ ${(produto.preco * produto.quantidade).toFixed(2)}
                </p>



                <button onclick="removerProduto(${index})">
                    Remover
                </button>


            </div>


        </div>

        `;
    
    
  });
  
  
  
  document.getElementById("subtotal").innerHTML =
    "R$ " + subtotal.toFixed(2);
  
  
  
  document.getElementById("frete").innerHTML =
    "R$ " + valorFrete.toFixed(2);
  
  
  
  document.getElementById("total").innerHTML =
    "R$ " + (subtotal + valorFrete).toFixed(2);
  
  
  
  atualizarContador();
  
  
}




function alterarQuantidade(index, quantidade) {
  
  
  carrinho[index].quantidade += quantidade;
  
  
  
  if (carrinho[index].quantidade <= 0) {
    
    carrinho.splice(index, 1);
    
  }
  
  
  
  salvarCarrinho();
  
  
}




function removerProduto(index) {
  
  
  carrinho.splice(index, 1);
  
  
  salvarCarrinho();
  
  
}




function salvarCarrinho() {
  
  
  localStorage.setItem(
    "carrinho",
    JSON.stringify(carrinho)
  );
  
  
  mostrarCarrinho();
  
  
}




function calcularFrete() {
  
  
  let cep = document.getElementById("cep").value;
  
  
  
  if (cep.length < 8) {
    
    alert("Digite um CEP válido");
    
    return;
    
  }
  
  
  
  valorFrete = 8;
  
  
  
  document.getElementById("resultadoFrete").innerHTML =
    
    "Entrega em 3 a 5 dias úteis";
  
  
  
  mostrarCarrinho();
  
  
}




function atualizarContador() {
  
  
  let contador = document.getElementById("contadorCarrinho");
  
  
  if (contador) {
    
    
    let quantidadeTotal = 0;
    
    
    
    carrinho.forEach(produto => {
      
      quantidadeTotal += produto.quantidade;
      
    });
    
    
    
    contador.innerHTML = quantidadeTotal;
    
    
  }
  
  
}




mostrarCarrinho();
function irPagamento() {
  
  window.location.href = "pagamento.html";
  
}

const botaoTopo = document.getElementById("voltarTopo");

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function pesquisarProduto() {

    let pesquisa = document.getElementById("pesquisa").value.trim();

    if (pesquisa !== "") {
        location.href = "produtos.html?pesquisa=" + encodeURIComponent(pesquisa);
    }

}

function irPagamento() {

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  let cep = document.getElementById("cep").value.trim();

  // Verifica se tem produtos
  if (carrinho.length === 0) {
    alert("Adicione pelo menos um produto ao carrinho.");
    return;
  }

  // Verifica se tem CEP
  if (cep === "") {
    alert("Digite seu CEP antes de escolher o pagamento.");
    return;
  }

  // Se tiver produtos e CEP
  window.location.href = "pagamento.html";
}


//teste git
