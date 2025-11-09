// Estado do jogo
let estadoJogo = {
    perguntaAtual: 0,
    pontuacaoVermelho: 0,
    pontuacaoAzul: 0,
    turnoVermelho: true, // true = Vermelho, false = Azul
    respostaEscolhida: null,
    respondida: false,
    totalPerguntas: 10
};

// Elementos do DOM
const textoPerguntaEl = document.getElementById('textoPergunta');
const opcaoEls = document.querySelectorAll('.opcao-btn');
const proximaPerguntaBtn = document.getElementById('proximaPerguntaBtn');
const feedbackEl = document.getElementById('feedback');
const pontuacaoVermelhoEl = document.getElementById('pontuacaoVermelho');
const pontuacaoAzulEl = document.getElementById('pontuacaoAzul');
const turnoAtualEl = document.getElementById('turnoAtual');
const perguntaNumeroEl = document.getElementById('perguntaNumero');

// Inicializar o jogo
function inicializarJogo() {
    estadoJogo.perguntaAtual = 0;
    estadoJogo.pontuacaoVermelho = 0;
    estadoJogo.pontuacaoAzul = 0;
    estadoJogo.turnoVermelho = true;
    estadoJogo.respondida = false;
    exibirPergunta();
}

// Exibir a pergunta atual
function exibirPergunta() {
    if (estadoJogo.perguntaAtual >= estadoJogo.totalPerguntas) {
        irParaResultado();
        return;
    }

    const pergunta = perguntas[estadoJogo.perguntaAtual];
    
    // Atualizar texto da pergunta
    textoPerguntaEl.textContent = pergunta.pergunta;

    // Atualizar opções
    opcaoEls.forEach((btn, index) => {
        btn.querySelector('.opcao-texto').textContent = pergunta.opcoes[index];
        btn.dataset.resposta = pergunta.opcoes[index];
        btn.classList.remove('selecionada', 'correta', 'incorreta', 'desabilitada');
        btn.disabled = false;
    });

    // Atualizar turno
    const turnoTexto = estadoJogo.turnoVermelho ? 'Time Vermelho' : 'Time Azul';
    turnoAtualEl.textContent = `Turno: ${turnoTexto}`;

    // Atualizar número da pergunta
    perguntaNumeroEl.textContent = `Pergunta ${estadoJogo.perguntaAtual + 1} de ${estadoJogo.totalPerguntas}`;

    // Resetar feedback e botão
    feedbackEl.textContent = '';
    feedbackEl.classList.remove('correto', 'incorreto');
    proximaPerguntaBtn.style.display = 'none';
    estadoJogo.respondida = false;
    estadoJogo.respostaEscolhida = null;
}

// Verificar resposta
function verificarResposta(respostaEscolhida) {
    if (estadoJogo.respondida) return;

    const pergunta = perguntas[estadoJogo.perguntaAtual];
    estadoJogo.respostaEscolhida = respostaEscolhida;
    estadoJogo.respondida = true;

    const estaCorreta = respostaEscolhida === pergunta.respostaCorreta;

    // Marcar visualmente as respostas
    opcaoEls.forEach((btn) => {
        btn.disabled = true;
        btn.classList.add('desabilitada');

        const respostaBtn = btn.dataset.resposta;

        if (respostaBtn === pergunta.respostaCorreta) {
            btn.classList.remove('desabilitada');
            btn.classList.add('correta');
        } else if (respostaBtn === respostaEscolhida && !estaCorreta) {
            btn.classList.remove('desabilitada');
            btn.classList.add('incorreta');
        }
    });

    // Atualizar pontuação e feedback
    if (estaCorreta) {
        if (estadoJogo.turnoVermelho) {
            estadoJogo.pontuacaoVermelho += 10;
        } else {
            estadoJogo.pontuacaoAzul += 10;
        }
        feedbackEl.textContent = '✓ Resposta Correta! +10 pontos!';
        feedbackEl.classList.add('correto');
    } else {
        feedbackEl.textContent = '✗ Resposta Incorreta. Nenhum ponto.';
        feedbackEl.classList.add('incorreto');
    }

    // Atualizar placar
    atualizarPlacar();

    // Mostrar botão próxima pergunta
    proximaPerguntaBtn.style.display = 'block';
}

// Atualizar placar
function atualizarPlacar() {
    pontuacaoVermelhoEl.textContent = estadoJogo.pontuacaoVermelho;
    pontuacaoAzulEl.textContent = estadoJogo.pontuacaoAzul;
}

// Próxima pergunta
function proximaPergunta() {
    estadoJogo.perguntaAtual++;
    estadoJogo.turnoVermelho = !estadoJogo.turnoVermelho; // Alterna o turno
    exibirPergunta();
}

// Ir para resultado
function irParaResultado() {
    // Salvar dados no localStorage para a página de resultado
    localStorage.setItem('pontuacaoVermelho', estadoJogo.pontuacaoVermelho);
    localStorage.setItem('pontuacaoAzul', estadoJogo.pontuacaoAzul);
    
    // Redirecionar para a página de resultado
    window.location.href = './resultadoTrivia.html';
}

// Event listeners para opções
opcaoEls.forEach((btn) => {
    btn.addEventListener('click', () => {
        if (!estadoJogo.respondida) {
            const respostaEscolhida = btn.dataset.resposta;
            verificarResposta(respostaEscolhida);
        }
    });
});

// Event listener para próxima pergunta
proximaPerguntaBtn.addEventListener('click', proximaPergunta);

// Iniciar o jogo quando a página carregar
document.addEventListener('DOMContentLoaded', inicializarJogo);
