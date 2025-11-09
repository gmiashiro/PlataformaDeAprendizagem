// Elementos do DOM
const pontuacaoVermelhoResultadoEl = document.getElementById('pontuacaoVermelhoResultado');
const pontuacaoAzulResultadoEl = document.getElementById('pontuacaoAzulResultado');
const vencedorTextoEl = document.getElementById('vencedorTexto');
const vencedorBadgeEl = document.getElementById('vencedorBadge');

// Carregar resultado quando a página carregar
document.addEventListener('DOMContentLoaded', carregarResultado);

function carregarResultado() {
    // Recuperar dados do localStorage
    const pontuacaoVermelho = parseInt(localStorage.getItem('pontuacaoVermelho')) || 0;
    const pontuacaoAzul = parseInt(localStorage.getItem('pontuacaoAzul')) || 0;

    // Exibir pontuações
    pontuacaoVermelhoResultadoEl.textContent = pontuacaoVermelho;
    pontuacaoAzulResultadoEl.textContent = pontuacaoAzul;

    // Determinar vencedor
    let vencedor = '';
    let emoji = '🏆';

    if (pontuacaoVermelho > pontuacaoAzul) {
        vencedor = 'Time Vermelho Venceu!';
        vencedorBadgeEl.style.background = 'linear-gradient(135deg, #fb64b6, #ff637e)';
    } else if (pontuacaoAzul > pontuacaoVermelho) {
        vencedor = 'Time Azul Venceu!';
        vencedorBadgeEl.style.background = 'linear-gradient(135deg, #51a2ff, #00d3f3)';
    } else {
        vencedor = 'Empate Perfeito!';
        emoji = '🤝';
        vencedorBadgeEl.style.background = 'linear-gradient(135deg, #f95bf6, #532cf9, #03f7eb)';
    }

    // Atualizar vencedor
    vencedorTextoEl.textContent = vencedor;
    document.querySelector('.vencedor-emoji').textContent = emoji;

    // Limpar localStorage após exibir
    localStorage.removeItem('pontuacaoVermelho');
    localStorage.removeItem('pontuacaoAzul');
}
