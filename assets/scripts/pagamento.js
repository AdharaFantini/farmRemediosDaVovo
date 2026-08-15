function finalizarCompra() {
  
  let escolhido = document.querySelector(
    'input[name="pagamento"]:checked'
  );
  
  
  if (!escolhido) {
    
    alert("Escolha uma forma de pagamento");
    
    return;
    
  }
  
  
  alert("Pedido realizado com sucesso!");
  
  
  localStorage.removeItem("carrinho");
  
  
  window.location.href = "index.html";
  
}

const botaoTopo = document.getElementById("voltarTopo");

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

function cancelarPagamento() {

    if (confirm("Deseja realmente cancelar o pagamento?")) {

        // Volta para o carrinho
        window.location.href = "carrinho.html";

    }

}
