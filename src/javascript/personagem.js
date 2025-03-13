// Exibe a paquerabox por padrão ao carregar a página
document.querySelector(".paquerabox").style.display = "block"; // Paquera começa visível
document.getElementById("paqueraBtn").classList.add("selected"); // Define o botão como selecionado

// Ao clicar no botão "Paquera", exibe a paquerabox e oculta a outrospersonabox
document.getElementById("paqueraBtn").addEventListener("click", function() {
    document.querySelector(".paquerabox").style.display = "block";
    document.querySelector(".outrospersonabox").style.display = "none";

    // Remove a classe 'selected' de todos os botões e adiciona ao botão clicado
    document.querySelectorAll('.mudapersonagem h1').forEach(i => i.classList.remove('selected'));
    this.classList.add('selected');
});

// Ao clicar no botão "Outros", exibe a outrospersonabox e oculta a paquerabox
document.getElementById("outrosBtn").addEventListener("click", function() {
    document.querySelector(".outrospersonabox").style.display = "block";
    document.querySelector(".paquerabox").style.display = "none";

    // Remove a classe 'selected' de todos os botões e adiciona ao botão clicado
    document.querySelectorAll('.mudapersonagem h1').forEach(i => i.classList.remove('selected'));
    this.classList.add('selected');
});

