// FUNCIONALIDADE DARK MODE
document.addEventListener('DOMContentLoaded', function() {
    const btnDarkMode = document.getElementById('btn-dark-mode');
    
    // Função para ativar/desativar dark mode
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        
        // Verificar se está ativo
        const isDarkMode = document.body.classList.contains('dark-mode');
         
        // Salvar preferência no navegador
        localStorage.setItem('dark-mode-preference', isDarkMode);
        
        // Atualizar texto do botão
        updateButtonText(isDarkMode);
    }
    
    // Função para atualizar texto do botão
    function updateButtonText(isDarkMode) {
        if (isDarkMode) {
            btnDarkMode.innerHTML = '☀️ Modo Claro';
        } else {
            btnDarkMode.innerHTML = '🌙 Modo Escuro';
        }
    }
    
    // Carregar preferência salva
    function loadSavedPreference() {
        const savedPreference = localStorage.getItem('dark-mode-preference');
        
        if (savedPreference === 'true') {
            document.body.classList.add('dark-mode');
            updateButtonText(true);
        }
    }
    
    // Event listener para o botão
    btnDarkMode.addEventListener('click', toggleDarkMode);
    
    // Carregar preferência ao carregar a página
    loadSavedPreference();
});