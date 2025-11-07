document.addEventListener("DOMContentLoaded", function() {
    
    fetch('/api/usuario/me')
        .then(response => {
            if (!response.ok) {
                window.location.href = '/login';
                throw new Error('Usuário não autenticado');
            }

            return response.json();
        })
        .then(usuario => {

            const saudacaoElement = document.getElementById('saudacao-usuario');
            if (saudacaoElement) {
                saudacaoElement.textContent = `Olá, ${usuario.nome}!`;
            }

            const iniciaisElement = document.getElementById('iniciais-usuario');
            if (iniciaisElement) {
                iniciaisElement.textContent = getIniciais(usuario.nome);
            }
        })
        .catch(error => {
            console.error('Erro ao buscar dados do usuário:', error);
        });
});

function getIniciais(nomeCompleto) {
    if (!nomeCompleto) {
        return '??';
    }

    const partes = nomeCompleto.split(' ');

    const nomesRelevantes = partes.filter(p => p.length > 1 && p.indexOf('.') === -1);

    if (nomesRelevantes.length === 0) {
        return nomeCompleto.substring(0, 2).toUpperCase();
    }
    
    const primeiroNome = nomesRelevantes[0];
    const ultimoNome = nomesRelevantes.length > 1 ? nomesRelevantes[nomesRelevantes.length - 1] : '';

    const primeiraInicial = primeiroNome.charAt(0);
    const segundaInicial = ultimoNome.length > 0 ? ultimoNome.charAt(0) : (primeiroNome.length > 1 ? primeiroNome.charAt(1) : '');

    return (primeiraInicial + segundaInicial).toUpperCase();
}