const linkUsuario = document.getElementById("linkUsuario");

const usuario = JSON.parse(localStorage.getItem("usuario"));
const logado = localStorage.getItem("logado");


if (logado === "true" && usuario) {

    linkUsuario.innerText = usuario.nome;

    linkUsuario.href = "usuario.html";

} else {

    linkUsuario.innerText = "Entre ou Cadastre-se";

    linkUsuario.href = "login.html";

}
const iconeUsuario = document.getElementById("iconeUsuario");

if (logado === "true" && usuario) {
    iconeUsuario.href = "usuario.html";
} else {
    iconeUsuario.href = "login.html";
}