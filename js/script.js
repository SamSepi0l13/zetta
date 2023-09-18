document.addEventListener("DOMContentLoaded", function () {
    const modeIcon = document.getElementById("mode_icon");
    const stylesheet = document.getElementById("stylesheet");

    modeIcon.addEventListener("click", function () {
        // Verifica se o estilo atual é light.css
        if (stylesheet.href.includes("light.css")) {
            // Alterna para o estilo escuro
            stylesheet.href = "styles/dark.css";
            modeIcon.classList.remove("fa-moon");
            modeIcon.classList.add("fa-sun"); // Mude o ícone para o sol
        } else {
            // Alterna de volta para o estilo claro
            stylesheet.href = "styles/light.css";
            modeIcon.classList.remove("fa-sun");
            modeIcon.classList.add("fa-moon"); // Mude o ícone para a lua
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
// Simula um atraso de 2 segundos (você pode ajustar isso)
setTimeout(function () {
    const loaderContainer = document.querySelector(".loader-container");
    const container = document.getElementById("container");

    // Oculta a tela de carregamento e mostra o conteúdo principal
    loaderContainer.style.display = "none";
    container.style.display = "block";
}, 2000); // Ajuste o tempo conforme necessário
});

document.addEventListener("DOMContentLoaded", function () {
const loaderContainer = document.querySelector(".loader-container");
const container = document.getElementById("container");
const loginForm = document.getElementById("login_form");

// Simula um atraso de 2 segundos (você pode ajustar isso)
setTimeout(function () {
// Oculta a tela de carregamento
loaderContainer.style.display = "none";

// Exibe o formulário
loginForm.style.display = "block";

// Centraliza o formulário horizontalmente e verticalmente
loginForm.style.position = "absolute";
loginForm.style.top = "50%";
loginForm.style.left = "50%";
loginForm.style.transform = "translate(-50%, -50%)";

}, 2000); // Ajuste o tempo conforme necessário
});