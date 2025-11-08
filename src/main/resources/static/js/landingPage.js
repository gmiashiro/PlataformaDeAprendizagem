const cardsText = [
    "<div><img src='./assets/icons/mainBox2Cards/equipeIcon.svg'></div><div class='slider-card-text'><span>Estimula o trabalho em equipe</span><p>Todos os jogos da Avante são em equipe, fomentando ao trabalho em equipe dentre vários cenários diferentes.</p></div>", 
    "<div><img src='./assets/icons/mainBox2Cards/controleIcon.svg'></div><div class='slider-card-text'><span>Jogos divertidos</span><p>Misture aprendizado com diversão e competição saudável entre alunos.</p></div>", 
    "<div><img src='./assets/icons/mainBox2Cards/livroIcon.svg'></div><div class='slider-card-text'><span>Livraria de jogos</span><p>Tenha acesso a inumeros jogos criados por outros professores sobre variados tópicos.</p></div>", 
    "<div><img src='./assets/icons/mainBox2Cards/gratisIcon.svg'></div><div class='slider-card-text'><span>Gratuito</span><p>Nossos serviços são gratuitos! Aproveite essa poderosa ferramenta em sua sala de aula sem gastar nada.</p></div>", 
    "<div><img src='./assets/icons/mainBox2Cards/lapisIcon.svg'></div><div class='slider-card-text'><span>Faça seus próprios jogos</span><p>Faça jogos do seu jeito, personalizando-os de acordo com a necessidade de sua sala de aula.</p></div>", 
    "<div><img src='./assets/icons/mainBox2Cards/monitorIcon.svg'></div><div class='slider-card-text'><span>Apenas um computador</span><p>A Avante precisa apenas de um dispositivo para rodar o jogo (e preferencialmente um projetor), sendo extremamente acessível.</p></div>",
];
var cards = [];
    /*
    <div class='slider-card sides'>
        <div>
            <img src='./assets/icons/mainBox2Cards/monitorIcon.svg'>
        </div>
        <div class='slider-card-text'>
            <span>Jogos divertidos</span>
            <p>Misture aprendizado com diversão e competição saudável entre alunos</p>
         </div>
    </div>
    */

for (x = 0; x < 6; x++) {
    cards[x] = document.createElement("div");
    cards[x].classList.add("slider-card");
    cards[x].classList.add("sides");
    cards[x].innerHTML += cardsText[x];
}

var slider = document.getElementById("slider-container");
var currentMiddleCardIndex = 1;
var leftCardIndex = 0;
var rightCardIndex = 2;
cards[currentMiddleCardIndex].classList.remove("sides");
cards[currentMiddleCardIndex].classList.add("middle");
slider.appendChild(cards[leftCardIndex]);
slider.appendChild(cards[currentMiddleCardIndex]);
slider.appendChild(cards[rightCardIndex]);

setInterval(slideRight, 3000);

function slideLeft() {
    slider.removeChild(cards[leftCardIndex]);
    slider.removeChild(cards[currentMiddleCardIndex]);
    slider.removeChild(cards[rightCardIndex]);
    /*
        0 1 2
        5 0 1
        4 5 0
        3 4 5
        2 3 4
        1 2 3
        */
    cards[currentMiddleCardIndex].classList.remove("middle");
    cards[currentMiddleCardIndex].classList.add("sides");

    if (currentMiddleCardIndex == 0) {
        currentMiddleCardIndex = 5;
    } else {
        currentMiddleCardIndex --;
        console.log("1")
    }

    if (leftCardIndex == 0) {
        leftCardIndex = 5;
    } else {
        leftCardIndex--;
        console.log("2")
    }

    if (rightCardIndex == 0) {
        rightCardIndex = 5;
    } else {
        rightCardIndex--;
        console.log(rightCardIndex + "!")
    }

    cards[currentMiddleCardIndex].classList.remove("sides");
    cards[currentMiddleCardIndex].classList.add("middle");

    slider.appendChild(cards[leftCardIndex]);
    slider.appendChild(cards[currentMiddleCardIndex]);
    slider.appendChild(cards[rightCardIndex]);
}



function slideRight() {
    slider.removeChild(cards[leftCardIndex]);
    slider.removeChild(cards[currentMiddleCardIndex]);
    slider.removeChild(cards[rightCardIndex]);
    /*
        0 1 2
        1 2 3
        2 3 4
        3 4 5
        4 5 0
        5 0 1
        */
    cards[currentMiddleCardIndex].classList.remove("middle");
    cards[currentMiddleCardIndex].classList.add("sides");

    if (currentMiddleCardIndex == 5) {
        currentMiddleCardIndex = 0;
    } else {
        currentMiddleCardIndex ++;
        console.log("1")
    }

    if (leftCardIndex == 5) {
        leftCardIndex = 0;
    } else {
        leftCardIndex++;
        console.log("2")
    }

    if (rightCardIndex == 5) {
        rightCardIndex = 0;
    } else {
        rightCardIndex++;
        console.log(rightCardIndex + "!")
    }

    cards[currentMiddleCardIndex].classList.remove("sides");
    cards[currentMiddleCardIndex].classList.add("middle");

    slider.appendChild(cards[leftCardIndex]);
    slider.appendChild(cards[currentMiddleCardIndex]);
    slider.appendChild(cards[rightCardIndex]);
}