<?php

// ==========================================
// VARIÁVEIS
// ==========================================

$nome = "";
$email = "";
$mensagem = "";

$nomeError = "";
$emailError = "";
$mensagemError = "";

$enviado = false;


// ==========================================
// PROCESSAMENTO DO FORMULÁRIO
// ==========================================

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // NOME
    if (empty($_POST["nome"])) {

        $nomeError = "*Nome obrigatório.";

    } else {

        $nome = verificar_entrada($_POST["nome"]);

    }


    // E-MAIL
    if (empty($_POST["email"])) {

        $emailError = "*Email obrigatório";

    } else {

        $email = verificar_entrada($_POST["email"]);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {

            $emailError = "*Digite um email válido";

        }

    }


    // MENSAGEM
    if (empty($_POST["mensagem"])) {

        $mensagemError = "*Mensagem obrigatória";

    } else {

        $mensagem = verificar_entrada($_POST["mensagem"]);

    }


    // SE NÃO EXISTIREM ERROS
    if (
        $nomeError == "" &&
        $emailError == "" &&
        $mensagemError == ""
    ) {

        $enviado = true;

    }

}


// ==========================================
// FUNÇÃO DE VERIFICAÇÃO
// ==========================================

function verificar_entrada($entrada)
{
    $entrada = trim($entrada);
    $entrada = stripslashes($entrada);
    $entrada = htmlspecialchars($entrada);

    return $entrada;
}

?>

<!DOCTYPE html>

<html lang="pt-BR">

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Fale Conosco - Remédios da Vovó</title>


    <!-- HEADER -->

    <link rel="stylesheet"
          href="assets/styles/header.css">


    <!-- FALE CONOSCO -->

    <link rel="stylesheet"
          href="assets/styles/faleConosco.css">


    <!-- FONT AWESOME -->

    <link rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

</head>


<body>


<!-- ==========================================
     BOTÃO VOLTAR AO TOPO
========================================== -->

<button id="voltarTopo">
    ↑
</button>


<!-- ==========================================
     HEADER
========================================== -->

<header>

    <div class="topo">


        <!-- LOGO -->

        <div class="logo">

            <img src="assets/img/logo.jpg"
                 alt="Logo">

            <h1>
                Remédios da vovó
            </h1>

        </div>


        <!-- PESQUISA -->

        <div class="pesquisa">

            <input
                    type="text"
                    id="pesquisa"
                    placeholder="Pesquisar produtos">


            <button onclick="pesquisarProduto()">

                <i class="fa-solid fa-magnifying-glass"></i>

            </button>

        </div>


        <!-- ÍCONES -->

        <div class="icones">


            <!-- CARRINHO -->

            <a href="carrinho.html">

                <i class="fa-solid fa-cart-shopping"></i>

            </a>


            <!-- USUÁRIO -->

            <a href="login.html"
               id="iconeUsuario">

                <i class="fa-solid fa-user"></i>

            </a>


        </div>

    </div>

</header>


<!-- ==========================================
     NAV
========================================== -->

<nav>

    <ul>


        <li>

            <a href="index.html">
                Início
            </a>

        </li>


        <li>

            <a href="produtos.html">
                Produtos
            </a>

        </li>


        <li>

            <a href="faleConosco.php">
                Fale Conosco
            </a>

        </li>


        <li>

            <a href="index.html#sobre">
                Sobre nós
            </a>

        </li>


    </ul>


    <div class="login">

        <span>
            Seja bem vindo(a),
        </span>


        <a href="login.html"
           id="linkUsuario">

            Entre ou Cadastre-se

        </a>

    </div>

</nav>


<!-- ==========================================
     CONTEÚDO
========================================== -->

<main class="contato">


    <h1>
        Fale Conosco
    </h1>


    <p>

        Tem alguma dúvida, sugestão ou precisa de ajuda?
        Entre em contato com nossa equipe.

    </p>


    <section class="area-contato">


        <!-- ==================================
             INFORMAÇÕES
        =================================== -->

        <div class="informacoes">


            <h2>
                Entre em contato
            </h2>


            <p>

                ✉️ Email:
                contato@remediosdavovo.com.br

            </p>


            <p>

                📍 Endereço:
                Rua Papibaquígrafo, 123

            </p>


            <p>

                🕒 Atendimento:

                Segunda a Sexta
                08:00 às 18:00

            </p>


        </div>


        <!-- ==================================
             FORMULÁRIO
        =================================== -->

        <form
                id="formContato"
                class="formulario"
                method="POST"
                action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">


            <!-- NOME -->

            <label for="nome">
                Nome:
            </label>


            <input
                    type="text"
                    id="nome"
                    name="nome"
                    value="<?php echo htmlspecialchars($nome); ?>">


            <?php if ($nomeError != ""): ?>

                <span class="erro">

                    <?php echo $nomeError; ?>

                </span>

            <?php endif; ?>


            <!-- EMAIL -->

            <label for="email">
                Email:
            </label>


            <input
                    type="email"
                    id="email"
                    name="email"
                    value="<?php echo htmlspecialchars($email); ?>">


            <?php if ($emailError != ""): ?>

                <span class="erro">

                    <?php echo $emailError; ?>

                </span>

            <?php endif; ?>


            <!-- MENSAGEM -->

            <label for="mensagem">
                Mensagem:
            </label>


            <textarea
                    id="mensagem"
                    name="mensagem"><?php echo htmlspecialchars($mensagem); ?></textarea>


            <?php if ($mensagemError != ""): ?>

                <span class="erro">

                    <?php echo $mensagemError; ?>

                </span>

            <?php endif; ?>


            <!-- BOTÃO -->

            <button type="submit">

                Enviar mensagem

            </button>


            <?php if ($enviado): ?>

                <p class="sucesso">

                    ✅ Sua mensagem foi enviada com sucesso!
                    Em breve entraremos em contato.

                </p>

            <?php endif; ?>


        </form>


    </section>


</main>

<!-- ==========================================
     FOOTER
========================================== -->

<footer>

    <div class="footerContainer">


        <!-- INFORMAÇÕES -->

        <div>

            <h3>
                Remédios da Vovó
            </h3>

            <p>
                Qualidade, confiança e cuidado
                com a sua saúde.
            </p>

        </div>


        <!-- CONTATO -->

        <div>

            <h3>
                Contato
            </h3>

            <p>
                (11) 99999-9999
            </p>

            <p>
                contato@remediosdavovo.com.br
            </p>

        </div>


        <!-- HORÁRIO -->

        <div>

            <h3>
                Horário
            </h3>

            <p>
                Segunda a Sexta
            </p>

            <p>
                08:00 às 18:00
            </p>

        </div>


    </div>


    <!-- COPYRIGHT -->

    <div class="copyright">

        © 2026 Remédios da Vovó -
        Todos os direitos reservados.

    </div>

</footer>


<!-- ==========================================
     JAVASCRIPT
========================================== -->

<script>

    /* ==========================
       BOTÃO VOLTAR AO TOPO
    ========================== */

    const botaoTopo =
        document.getElementById("voltarTopo");


    botaoTopo.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });


    /* ==========================
       FORMULÁRIO
    ========================== */

    const formulario =
        document.getElementById("formContato");


    /*
       Como o formulário agora é
       processado pelo PHP, NÃO usamos
       preventDefault() aqui.

       Assim o formulário consegue enviar
       os dados para o PHP e fazer as
       validações.
    */


</script>


<!-- ==========================
     SCRIPTS DO HEADER
========================== -->

<script src="assets/scripts/header.js"></script>

<script src="assets/scripts/nav.js"></script>


</body>

</html>
