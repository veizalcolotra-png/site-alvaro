document.addEventListener("DOMContentLoaded", () => {
    const botao = document.getElementById("botaoTema");
    const icone = document.getElementById("iconeTema");
    const textoBotao = document.getElementById("textoBotao");

    if (botao) {
        botao.addEventListener("click", () => {
            const isEscuro = document.body.classList.toggle("escuro");

            if (isEscuro) {
                if (icone) icone.innerHTML = "&#9728;";
                if (textoBotao) textoBotao.textContent = "Modo claro";
            } else {
                if (icone) icone.innerHTML = "&#9790;";
                if (textoBotao) textoBotao.textContent = "Modo escuro";
            }
        });
    }
});