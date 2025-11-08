/*
<button>
    <img src="./assets/icons/gameCard/playBrancoIcon.svg" alt="">
    Meus Jogos (3)
</button>
<button>
    <img src="./assets/icons/gameCard/saveLineIcon.svg" alt="">
    Salvos (3)
</button>
*/

/*
<div class="gameCard">
    <div class="banner">
        <img src="./assets/banners/mathBanner.png" alt="">
    </div>
    <div class="gameCard-content-container">
        <div class="gameCard-content">
            <div class="gameCard-tags-container">
                <div class="gameCard-tag versus">
                    <span>Versus</span>
                </div>
                <span>8-9 anos</span>
            </div>
            <div class="gameCard-text">
                <h6>Multiplicação simples</h6>
                <p>Ajudando a memorizar a tabuada</p>
                <span>Por: Luciano Alves</span>
            </div>
            <div class="gameCard-info-container">
                <div>
                    <img src="./assets/icons/gameCard/playPurpleIcon.svg" alt="Icone de play">
                    <span>321</span>
                </div>
                <div>
                    <button><img src="./assets/icons/gameCard/saveLineIcon.svg" alt="Icone de salvar"></button>
                    <span>321</span>
                </div>
            </div>
            <div>
                <a href="./gameStart.html">
                   <button class="gameCard-play fullColorLP">
                        <img src="" alt="">
                        Jogar agora
                    </button> 
                </a>
            </div>
        </div>
        
    </div>
</div>
*/

var myGames = [
    "<div class='gameCard'><div class='banner'><img src='./assets/banners/lettersBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag poderes'><span>Poderes</span></div><span>Ensino Médio</span></div><div class='gameCard-text'><h6>Oração Subordinada Substantiva</h6><p>Revisão para a prova de lingua portuguêsa</p><span>Por: Você</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>785</span></div><div><button><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>1.032</span></div></div><div class='gameCard-action-buttons'><a href='./gameStart.html'><button class='gameCard-play fullColorLP myGames'>Jogar agora</button> </a><button class='gradientBorderLP'><img src='./assets/icons/gameCard/editarAzul.svg'></button></div></div>",
    "<div class='gameCard'><div class='banner'><img src='./assets/banners/forestBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag forca'><span>Forca</span></div><span>4-5 anos</span></div><div class='gameCard-text'><h6>Nomes de animais</h6><p>Tentando adivinhar nomes de animais da floresta</p><span>Por: Você</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>572</span></div><div><button><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>904</span></div></div><div class='gameCard-action-buttons'><a href='./gameStart.html'><button class='gameCard-play fullColorLP myGames'>Jogar agora</button> </a><button class='gradientBorderLP'><img src='./assets/icons/gameCard/editarAzul.svg'></button></div></div>",
    "<div class='gameCard'><div class='banner'><img src='./assets/banners/mapaBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag detetive'><span>Detetive</span></div><span>13-14 anos</span></div><div class='gameCard-text'><h6>Paises</h6><p>Tentando adivinhar países por pistas geológicas</p><span>Por: Você</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>578</span></div><div><button><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>870</span></div></div><div class='gameCard-action-buttons'><a href='./gameStart.html'><button class='gameCard-play fullColorLP myGames'>Jogar agora</button> </a><button class='gradientBorderLP'><img src='./assets/icons/gameCard/editarAzul.svg'></button></div></div>"
];

var savedGames = [
    "<div class='gameCard'><div class='banner'><img src='./assets/banners/pigBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag gincana'><span>Gincana</span></div><span>3-5 anos</span></div><div class='gameCard-text'><h6>Três porquinhos</h6><p>Competição sobre os Três porquinhos</p><span>Por: Joana Silva</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>630</span></div><div><button onclick='add()'><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>321</span></div></div><div><a href='./gameStart.html'><button class='gameCard-play fullColorLP'>Jogar agora</button></a></div></div></div></div>",
    "<div class='gameCard'><div class='banner'><img src='./assets/banners/bookBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag memoria'><span>Memoria</span></div><span>Ensino Médio</span></div><div class='gameCard-text'><h6>Os Lusíadas</h6><p>Revisão sobre o livro</p><span>Por: Marcia Souza</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>472</span></div><div><button onclick='add()'><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>218</span></div></div><div><a href='./gameStart.html'><button class='gameCard-play fullColorLP'>Jogar agora</button></a></div></div></div></div>",
    "<div class='gameCard'><div class='banner'><img src='./assets/banners/mathBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag versus'><span>Versus</span></div><span>8-9 anos</span></div><div class='gameCard-text'><h6>Multiplicação simples</h6><p>Ajudando a decorar a tabuada</p><span>Por: Luciano Alves</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>925</span></div><div><button onclick='add()'><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>486</span></div></div><div><a href='./gameStart.html'><button class='gameCard-play fullColorLP'>Jogar agora</button></a></div></div></div></div>"
];


var buttonMyGames = document.createElement("button");
buttonMyGames.classList.add("fullColorLP");
buttonMyGames.classList.add("buttonFull");
buttonMyGames.id = "buttonMyGames";
buttonMyGames.onclick = mostrarMeusJogos;
buttonMyGames.innerHTML = "<img src='./assets/icons/gameCard/playBrancoIcon.svg' alt=''>Meus Jogos (3)";

var buttonSavedGames = document.createElement("button");
buttonSavedGames.innerHTML = "<img src='./assets/icons/gameCard/saveLineIcon.svg' alt=''>Salvos (3)";
buttonSavedGames.id = "buttonSavedGames";
buttonSavedGames.onclick = mostrarSalvos;


var container = document.getElementById("container");
container.appendChild(buttonMyGames);
container.appendChild(buttonSavedGames);

var containerAtual = 0;
// 0 = Meus jogos
// 1 = Salvos

var gameCardContainer = document.getElementById("cards-container");
gameCardContainer.innerHTML = myGames[0];
gameCardContainer.innerHTML += myGames[1];
gameCardContainer.innerHTML += myGames[2];


function mostrarMeusJogos() {
    if (containerAtual == 0) {
        return;
    }
    containerAtual = 0;

    var buttonSavedGames = document.getElementById("buttonSavedGames");
    buttonSavedGames.classList.remove("fullColorLP");
    buttonSavedGames.classList.remove("buttonFull");
    buttonSavedGames.innerHTML = "<img src='./assets/icons/profilePage/saveDarkIcon.svg' alt=''>Salvos (3)";

    var buttonMyGames = document.getElementById("buttonMyGames");
    buttonMyGames.classList.add("fullColorLP");
    buttonMyGames.classList.add("buttonFull");
    buttonMyGames.innerHTML = "<img src='./assets/icons/gameCard/playBrancoIcon.svg' alt=''>Meus Jogos (3)";

    var gameCardContainer = document.getElementById("cards-container");
    gameCardContainer.innerHTML = myGames[0];
    gameCardContainer.innerHTML += myGames[1];
    gameCardContainer.innerHTML += myGames[2];
}

function mostrarSalvos() {
    if (containerAtual == 1) {
        return;
    }
    containerAtual = 1;

    var buttonMyGames = document.getElementById("buttonMyGames");
    buttonMyGames.classList.remove("fullColorLP");
    buttonMyGames.classList.remove("buttonFull");
    buttonMyGames.innerHTML = "<img src='./assets/icons/profilePage/playDarkIcon.svg' alt=''>Meus Jogos (3)";

    var buttonSavedGames = document.getElementById("buttonSavedGames");
    buttonSavedGames.classList.add("fullColorLP");
    buttonSavedGames.classList.add("buttonFull");
    buttonSavedGames.innerHTML = "<img src='./assets/icons/profilePage/saveLightIcon.svg' alt=''>Salvos (3)";

    var gameCardContainer = document.getElementById("cards-container");
    gameCardContainer.innerHTML = savedGames[0];
    gameCardContainer.innerHTML += savedGames[1];
    gameCardContainer.innerHTML += savedGames[2];



}



/*
div class="gameCard">
    <div class="banner">
        <img src="./assets/banners/forestBanner.png" alt="">
    </div>
    <div class="gameCard-content-container">
        <div class="gameCard-content">
            <div class="gameCard-tags-container">
                <div class="gameCard-tag forca">
                    <span>Forca</span>
                </div>
                <span>4-5 anos</span>
            </div>
                                <div class="gameCard-text">
                                    <h6>Nomes de animais</h6>
                                    <p>Tentando adivinhar nomes de animais da floresta</p>
                                    <span>Por: Você</span>
                                </div>
                                <div class="gameCard-info-container">
                                    <div>
                                        <img src="./assets/icons/gameCard/playPurpleIcon.svg" alt="Icone de play">
                                        <span>321</span>
                                    </div>
                                    <div>
                                        <button><img src="./assets/icons/gameCard/saveLineIcon.svg" alt="Icone de salvar"></button>
                                        <span>321</span>
                                    </div>
                                </div>
                                <div class="gameCard-action-buttons">
                                    <a href="./gameStart.html">
                                       <button class="gameCard-play fullColorLP myGames">
                                            Jogar agora
                                        </button> 
                                    </a>
                                    <button class="gradientBorderLP">
                                        <img src="./assets/icons/gameCard/editarAzul.svg" alt="">
                                    </button>
                                </div>
                            </div>

*/





{/* <div class='gameCard'><div class='banner'><img src='./assets/banners/forestBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag versus'><span>Forca</span></div><span>4-5 anos</span></div><div class='gameCard-text'><h6>Nome de animais</h6><p>Tentando adivinhar nomes de animais da floresta</p><span>Por: Fernanda Pires</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>8</span></div><div><button onclick='add()'><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>2</span></div></div><div><a href='./gameStart.html'><button class='gameCard-play fullColorLP'>Jogar agora</button></a></div></div></div></div> */}

{/* <div class='gameCard'><div class='banner'><img src='./assets/banners/forestBanner.png'></div><div class='gameCard-content-container'><div class='gameCard-content'><div class='gameCard-tags-container'><div class='gameCard-tag forca'><span>Forca</span></div><span>4-5 anos</span></div><div class='gameCard-text'><h6>Nomes de animais</h6><p>Tentando adivinhar nomes de animais da floresta</p><span>Por: Você</span></div><div class='gameCard-info-container'><div><img src='./assets/icons/gameCard/playPurpleIcon.svg' alt='Icone de play'><span>321</span></div><div><button><img src='./assets/icons/gameCard/saveLineIcon.svg' alt='Icone de salvar'></button><span>321</span></div></div><div class='gameCard-action-buttons'><a href='./gameStart.html'><button class='gameCard-play fullColorLP myGames'>Jogar agora</button> </a><button class='gradientBorderLP'><img src='./assets/icons/gameCard/editarAzul.svg'></button></div></div> */}