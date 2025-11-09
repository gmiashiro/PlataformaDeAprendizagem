// Gerenciar o formulário de início do jogo
document.addEventListener('DOMContentLoaded', function() {
    const gameStartForm = document.getElementById('gameStartForm');
    
    if (gameStartForm) {
        gameStartForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obter nomes das equipes
            const nomeEquipeAzul = document.getElementById('nomeEquipeAzul').value.trim() || 'Time Azul';
            const nomeEquipeVermelha = document.getElementById('nomeEquipeVermelha').value.trim() || 'Time Vermelho';
            
            // Salvar nomes no localStorage para uso no jogo
            localStorage.setItem('nomeEquipeAzul', nomeEquipeAzul);
            localStorage.setItem('nomeEquipeVermelha', nomeEquipeVermelha);
            
            // Redirecionar para o jogo de trivia
            window.location.href = './trivia.html';
        });
    }
});
