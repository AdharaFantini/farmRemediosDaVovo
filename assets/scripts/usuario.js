const usuario = JSON.parse(localStorage.getItem("usuario"));


// Verifica se existe usuário
if (!usuario) {

    alert("Você precisa fazer login primeiro.");

    window.location.href = "login.html";

}


// Mostra os dados
document.getElementById("nomePerfil").innerText = usuario.nome;

document.getElementById("emailPerfil").innerText = usuario.email;

document.getElementById("nomeUsuario").innerText = usuario.nome;

document.getElementById("emailUsuario").innerText = usuario.email;

document.getElementById("nascimentoUsuario").innerText =
    usuario.nascimento;

document.getElementById("telefoneUsuario").innerText =
    usuario.telefone;

document.getElementById("cpfUsuario").innerText =
    usuario.cpf;