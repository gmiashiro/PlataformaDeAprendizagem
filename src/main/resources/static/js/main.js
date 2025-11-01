document.addEventListener('DOMContentLoaded', function() {
    const meuBotao = document.getElementById('meuBotao');

    if (meuBotao) {
        meuBotao.addEventListener('click', function() {
            alert('O botão foi clicado');
        });
    }
});