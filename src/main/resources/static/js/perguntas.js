// Banco expandido de perguntas de Português e Literatura
const bancoPerguntasCompleto = [
    // ===== PORTUGUÊS (15 questões) =====
    {
        tipo: "Português",
        pergunta: "Qual é a letra que vem depois do 'A' no alfabeto?",
        opcoes: ["C", "B", "D", "E"],
        respostaCorreta: "B"
    },
    {
        tipo: "Português",
        pergunta: "Qual palavra está escrita corretamente?",
        opcoes: ["Caza", "Casa", "Kasa", "Cassa"],
        respostaCorreta: "Casa"
    },
    {
        tipo: "Português",
        pergunta: "Qual é o diminutivo de 'cachorro'?",
        opcoes: ["Cachorrão", "Cachorrinho", "Cachorrete", "Cachorroso"],
        respostaCorreta: "Cachorrinho"
    },
    {
        tipo: "Português",
        pergunta: "Qual destas palavras é um nome de fruta?",
        opcoes: ["Cadeira", "Banana", "Janela", "Sapato"],
        respostaCorreta: "Banana"
    },
    {
        tipo: "Português",
        pergunta: "O que usamos para escrever no caderno?",
        opcoes: ["Tesoura", "Lápis", "Borracha", "Régua"],
        respostaCorreta: "Lápis"
    },
    {
        tipo: "Português",
        pergunta: "Qual é o plural da palavra 'flor'?",
        opcoes: ["Flores", "Floras", "Florz", "Florões"],
        respostaCorreta: "Flores"
    },
    {
        tipo: "Português",
        pergunta: "Qual palavra tem o som de 'R' forte (como em 'carro')?",
        opcoes: ["Aranha", "Barata", "Carro", "Coruja"],
        respostaCorreta: "Carro"
    },
    {
        tipo: "Português",
        pergunta: "Qual é o contrário de 'grande'?",
        opcoes: ["Alto", "Pequeno", "Largo", "Forte"],
        respostaCorreta: "Pequeno"
    },
    {
        tipo: "Português",
        pergunta: "Qual é a vogal que falta na palavra C_SA?",
        opcoes: ["I", "U", "A", "E"],
        respostaCorreta: "A"
    },
    {
        tipo: "Português",
        pergunta: "Qual destas palavras é um animal?",
        opcoes: ["Mesa", "Livro", "Gato", "Prato"],
        respostaCorreta: "Gato"
    },
    {
        tipo: "Português",
        pergunta: "Qual é o singular de 'crianças'?",
        opcoes: ["Criançinha", "Criança", "Criançada", "Criançol"],
        respostaCorreta: "Criança"
    },
    {
        tipo: "Português",
        pergunta: "Qual palavra significa 'muito pequeno'?",
        opcoes: ["Gigante", "Minúsculo", "Grande", "Enorme"],
        respostaCorreta: "Minúsculo"
    },
    {
        tipo: "Português",
        pergunta: "Qual é o aumentativo de 'casa'?",
        opcoes: ["Casinha", "Casarão", "Casita", "Casota"],
        respostaCorreta: "Casarão"
    },
    {
        tipo: "Português",
        pergunta: "Qual destas palavras é um verbo?",
        opcoes: ["Livro", "Correr", "Mesa", "Azul"],
        respostaCorreta: "Correr"
    },
    {
        tipo: "Português",
        pergunta: "Qual é a sílaba tônica da palavra 'BOLO'?",
        opcoes: ["LO", "BO", "OLO", "BOLO"],
        respostaCorreta: "BO"
    },

    // ===== LITERATURA (15 questões) =====
    {
        tipo: "Literatura",
        pergunta: "Quem escreveu 'Chapeuzinho Vermelho'?",
        opcoes: ["Charles Perrault", "Hans Christian Andersen", "Irmãos Grimm", "Monteiro Lobato"],
        respostaCorreta: "Charles Perrault"
    },
    {
        tipo: "Literatura",
        pergunta: "Em 'Branca de Neve', quantos anões ajudam a princesa?",
        opcoes: ["Cinco", "Sete", "Nove", "Dez"],
        respostaCorreta: "Sete"
    },
    {
        tipo: "Literatura",
        pergunta: "Qual é o nome do gato de 'Shrek'?",
        opcoes: ["Puss", "Tom", "Garfield", "Felix"],
        respostaCorreta: "Puss"
    },
    {
        tipo: "Literatura",
        pergunta: "Quem é o autor de 'O Sítio do Picapau Amarelo'?",
        opcoes: ["Machado de Assis", "Monteiro Lobato", "Clarice Lispector", "Carlos Drummond de Andrade"],
        respostaCorreta: "Monteiro Lobato"
    },
    {
        tipo: "Literatura",
        pergunta: "Em 'Cinderela', qual é a mágica que permite ela ir ao baile?",
        opcoes: ["Uma varinha mágica", "Uma abóbora", "Uma fada madrinha", "Um espelho mágico"],
        respostaCorreta: "Uma fada madrinha"
    },
    {
        tipo: "Literatura",
        pergunta: "Qual é o nome do menino que não quer crescer em 'Peter Pan'?",
        opcoes: ["Peter Pan", "Wendy", "Capitão Gancho", "Sininho"],
        respostaCorreta: "Peter Pan"
    },
    {
        tipo: "Literatura",
        pergunta: "Quem é o personagem principal de 'Alice no País das Maravilhas'?",
        opcoes: ["Dorothy", "Alice", "Branca de Neve", "Rapunzel"],
        respostaCorreta: "Alice"
    },
    {
        tipo: "Literatura",
        pergunta: "Em qual país se passa a história de 'O Pequeno Príncipe'?",
        opcoes: ["Na Terra", "Em um planeta", "Na França", "Na Itália"],
        respostaCorreta: "Em um planeta"
    },
    {
        tipo: "Literatura",
        pergunta: "Qual é o nome do boneco de madeira que quer ser um menino de verdade?",
        opcoes: ["Pinocchio", "Geppetto", "Jiminy", "Monstro"],
        respostaCorreta: "Pinocchio"
    },
    {
        tipo: "Literatura",
        pergunta: "Quem escreveu 'A Revolução dos Bichos'?",
        opcoes: ["George Orwell", "J.K. Rowling", "Roald Dahl", "Beatrix Potter"],
        respostaCorreta: "George Orwell"
    },
    {
        tipo: "Literatura",
        pergunta: "Em 'O Mágico de Oz', qual é o nome da menina?",
        opcoes: ["Elphaba", "Dorothy", "Glinda", "Scarecrow"],
        respostaCorreta: "Dorothy"
    },
    {
        tipo: "Literatura",
        pergunta: "Qual é o nome da bruxa má em 'Branca de Neve'?",
        opcoes: ["Rainha Má", "Madrasta", "Feiticeira", "Bruxa Negra"],
        respostaCorreta: "Rainha Má"
    },
    {
        tipo: "Literatura",
        pergunta: "Quem é o melhor amigo de Harry Potter?",
        opcoes: ["Rony Weasley", "Hermione Granger", "Dumbledore", "Snape"],
        respostaCorreta: "Rony Weasley"
    },
    {
        tipo: "Literatura",
        pergunta: "Em 'A Bela e a Fera', qual é o nome da princesa?",
        opcoes: ["Bela", "Gaston", "Fera", "Lumière"],
        respostaCorreta: "Bela"
    },
    {
        tipo: "Literatura",
        pergunta: "Qual é o nome do menino que vive na floresta em 'O Livro da Selva'?",
        opcoes: ["Mowgli", "Baloo", "Shere Khan", "Bagheera"],
        respostaCorreta: "Mowgli"
    }
];

// Função para embaralhar um array (Fisher-Yates shuffle)
function embaralharArray(array) {
    const arrayEmbaralhado = [...array];
    for (let i = arrayEmbaralhado.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arrayEmbaralhado[i], arrayEmbaralhado[j]] = [arrayEmbaralhado[j], arrayEmbaralhado[i]];
    }
    return arrayEmbaralhado;
}

// Função para selecionar 10 perguntas aleatórias alternando entre Português e Literatura
function selecionarPerguntasAleatorias() {
    const perguntasPortugues = bancoPerguntasCompleto.filter(p => p.tipo === "Português");
    const perguntasLiteratura = bancoPerguntasCompleto.filter(p => p.tipo === "Literatura");

    const perguntasEmbaralhadas = [];
    let indicePortugues = 0;
    let indiceLiteratura = 0;

    // Embaralhar os arrays
    const portuguesEmbaralhado = embaralharArray(perguntasPortugues);
    const literaturaEmbaralhada = embaralharArray(perguntasLiteratura);

    // Alternar entre Português e Literatura até ter 10 perguntas
    for (let i = 0; i < 10; i++) {
        if (i % 2 === 0) {
            // Português
            if (indicePortugues < portuguesEmbaralhado.length) {
                perguntasEmbaralhadas.push(portuguesEmbaralhado[indicePortugues]);
                indicePortugues++;
            } else if (indiceLiteratura < literaturaEmbaralhada.length) {
                perguntasEmbaralhadas.push(literaturaEmbaralhada[indiceLiteratura]);
                indiceLiteratura++;
            }
        } else {
            // Literatura
            if (indiceLiteratura < literaturaEmbaralhada.length) {
                perguntasEmbaralhadas.push(literaturaEmbaralhada[indiceLiteratura]);
                indiceLiteratura++;
            } else if (indicePortugues < portuguesEmbaralhado.length) {
                perguntasEmbaralhadas.push(portuguesEmbaralhado[indicePortugues]);
                indicePortugues++;
            }
        }
    }

    return perguntasEmbaralhadas;
}

// Exportar as perguntas selecionadas aleatoriamente
const perguntas = selecionarPerguntasAleatorias();
