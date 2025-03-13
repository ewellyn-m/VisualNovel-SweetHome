const personagens = document.querySelectorAll('.personagem');

// passo 2
personagens.forEach((personagem) => {
    personagem.addEventListener('click', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // passo 3
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');

        personagem.classList.add('selecionado');

        // objetivo 2 passo 1
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');

        // passo 2
        const idPersonagem = personagem.attributes.id.value;
        imagemPersonagemGrande.src = `./src/imagens/${idPersonagem}.png`;

        // passo 3
        const nomePersonagem = document.getElementById('nome-personagem');
        nomePersonagem.innerText = personagem.getAttribute('data-name');

        // passo 4
        const descricaoPersonagem = document.getElementById('descricao-personagem');
        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
    });
});


//trailer

function abrirModal() {
    let modal = document.getElementById("modal");
    let modalVideo = document.getElementById("modalVideo");

    modal.style.display = "flex";
    modalVideo.style.display = "block"; // Agora o conteúdo só aparece ao clicar
    document.getElementById("video").src = "https://www.youtube.com/embed/CSdSwAJxSVw?autoplay=1";
}

function fecharModal() {
    let modal = document.getElementById("modal");
    let modalVideo = document.getElementById("modalVideo");

    modal.style.display = "none";
    modalVideo.style.display = "none"; // Esconder completamente
    document.getElementById("video").src = ""; // Para parar o vídeo ao fechar
}

// Garante que o modal está sempre oculto ao carregar a página
window.onload = function() {
    document.getElementById("modal").style.display = "none";
    document.getElementById("modalVideo").style.display = "none";
};

