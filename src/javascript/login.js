const loginButton = document.querySelector('.login a');
const loginModal = document.getElementById('login-modal');
const signupModal = document.getElementById('signup-modal');
const closeButtons = document.querySelectorAll('.close');
const toSignupLink = document.getElementById('to-signup');
const toLoginLink = document.getElementById('to-login');

// Abrir o modal de login
loginButton.addEventListener('click', () => {
    loginModal.style.display = 'flex';
});

// Fechar os modais
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    });
});

// Alternar para o modal de cadastro
toSignupLink.addEventListener('click', () => {
    loginModal.style.display = 'none';
    signupModal.style.display = 'flex';
});

// Alternar para o modal de login
toLoginLink.addEventListener('click', () => {
    signupModal.style.display = 'none';
    loginModal.style.display = 'flex';
});

// Fechar o modal ao clicar fora do conteúdo
window.addEventListener('click', (event) => {
    if (event.target === loginModal || event.target === signupModal) {
        loginModal.style.display = 'none';
        signupModal.style.display = 'none';
    }
});

// Validação do login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    const emailInput = this.querySelector('input[type="text"]');
    const passwordInput = this.querySelector('input[type="password"]');
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    
    if (!validateEmail(email)) {
        alert('Por favor, insira um email válido.');
        return;
    }
    
    if (password.length < 6) {
        alert('A senha deve ter pelo menos 6 caracteres.');
        return;
    }
    
    // Simulação de login bem-sucedido e redirecionamento
    window.location.href = 'src/html/historia.html';
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
