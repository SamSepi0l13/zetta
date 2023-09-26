document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const confirmation = document.getElementById("confirmation");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Exibe a mensagem de confirmação
        confirmation.style.display = "block";

        // Esconde a mensagem de confirmação após alguns segundos
        setTimeout(function () {
            confirmation.style.display = "none";
        }, 3000); // 3000 milissegundos (3 segundos)
    });
});