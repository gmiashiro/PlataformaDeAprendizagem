// Lógica para a página de coleção de jogos
document.addEventListener('DOMContentLoaded', function() {
    // Adicionar efeitos de interação aos cards desabilitados
    const cardsDesabilitados = document.querySelectorAll('.jogo-card.desabilitado');
    
    cardsDesabilitados.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Adicionar um tooltip ou mensagem visual
            const botao = this.querySelector('.btn-desabilitado');
            if (botao) {
                botao.title = 'Este jogo em breve estará disponível!';
            }
        });
    });

    // Adicionar animação ao carregar a página
    const cards = document.querySelectorAll('.jogo-card');
    cards.forEach((card, index) => {
        card.style.animation = `fadeInUp 0.5s ease-out ${index * 0.1}s both`;
    });
});

// Adicionar animação CSS dinamicamente
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);
