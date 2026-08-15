const produtos = {
  
  dipirona: {
    nome: "Dipirona Monoidratada",
    imagem: "assets/img/dipirona.png",
    categoria: "Medicamentos",
    descricao: "Analgésico e antitérmico indicado para auxiliar no alívio de dores e febre.",
    preco: 20
  },
  
  
  paracetamol: {
    nome: "Paracetamol",
    imagem: "assets/img/paracetamol.png",
    categoria: "Medicamentos",
    descricao: "Auxilia no alívio de dores leves e febre.",
    preco: 16.90
  },
  
  
  xarope: {
    nome: "Xarope Infantil",
    imagem: "assets/img/xarope.png",
    categoria: "Infantil",
    descricao: "Produto infantil para auxiliar no alívio da tosse.",
    preco: 18.90
  },
  
  
  "vitamina-c": {
    nome: "Vitamina C 1g",
    imagem: "assets/img/vitaminaC.png",
    categoria: "Vitaminas",
    descricao: "Suplemento de vitamina C.",
    preco: 27.50
  },
  
  
  protetor: {
    nome: "Protetor Solar FPS 60",
    imagem: "assets/img/protetor.png",
    categoria: "Beleza e Cuidados",
    descricao: "Proteção contra raios UVA e UVB.",
    preco: 39.90
  },
  
  
  hidratante: {
    nome: "Hidratante Corporal",
    imagem: "assets/img/hidratante.png",
    categoria: "Beleza e Cuidados",
    descricao: "Hidratação intensa para a pele.",
    preco: 24.90
  }
  
};



let id = new URLSearchParams(location.search).get("id");


let produto = produtos[id];



document.getElementById("imagemProduto").src = produto.imagem;

document.getElementById("nomeProduto").innerHTML = produto.nome;

document.getElementById("categoriaProduto").innerHTML = produto.categoria;

document.getElementById("descricaoProduto").innerHTML = produto.descricao;


document.getElementById("precoProduto").innerHTML =
  "R$ " + produto.preco.toFixed(2).replace(".", ",");





// CARRINHO


  
  document.getElementById("adicionarCarrinho").addEventListener("click", function(){

    let produto = {

        nome: document.getElementById("nomeProduto").innerText,

        preco: Number(
            document.getElementById("precoProduto")
            .innerText
            .replace("R$", "")
            .replace(",", ".")
        ),

        imagem: document.getElementById("imagemProduto").src,

        quantidade: 1

    };


    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];


    carrinho.push(produto);


    localStorage.setItem(
        "carrinho",
        JSON.stringify(carrinho)
    );


    alert("Produto adicionado ao carrinho!");

});

const botaoTopo = document.getElementById("voltarTopo");

botaoTopo.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});