// Declaration des variables
const btnStartMiniGame = document.querySelector(".btn-commencer");
const containerMiniGame = document.querySelector(".question-mini_game");
const questionMiniGame = document.querySelector(".container-mini_game");
const containerQuestions = document.querySelector(".container-questions");

let reponsesText = ["Vert", "Rouge", "Bleu", "Jaune"];
let couleursFond = ["#81c784", "#e57373", "#64b5f6", "#fff176"];
const colorMap = { "Vert": "#81c784", "Rouge": "#e57373", "Bleu": "#64b5f6", "Jaune": "#fff176" };

let randomMessage;
let nombreBonneReponses = 0;
let iterationDeQuestions = 0;
let previousQuestion = null;


//  
let intervalId;
let duree = 0
const time = document.createElement("p");
time.classList.add('timer')
questionMiniGame.appendChild(time);
time.textContent = `Temps : ${duree}s`;

// Commencer mini jeu
btnStartMiniGame.addEventListener("click", () => {
    containerMiniGame.classList.add("apparaitre");
    btnStartMiniGame.style.display = "none";
    generateMiniGame();
    startTimer();
});

// Mélange un tableau de manière uniforme (algorithme de Fisher-Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Préparer une combinaison valide ex(ne pas avoir texte couleur vert sur fond vert) et ensuite afficher avec generateResponses() sur la page
function prepareValidCombination() {
    let valid = false;
    let validTexts, validColors;

    while (!valid) {
        validTexts = shuffle([...reponsesText]);
        validColors = shuffle([...couleursFond]);
        valid = true;

        for (let i = 0; i < validTexts.length; i++) {
            if (validColors[i] === colorMap[validTexts[i]]) {
                valid = false; 
                break;
            }
        }
    }

    return { validTexts, validColors };
}

// Générer une couleur demandée
function generateQuestions() {
    const containerResponse = document.createElement("div");
    containerResponse.classList.add("container");

    const comment = document.createElement("p");
    comment.textContent = "Choisisez la couleur ecrire :"
    couleurDemandee = document.createElement("p");
    couleurDemandee.classList.add('color-question');


    containerResponse.appendChild(comment)
    containerResponse.appendChild(couleurDemandee)
    containerMiniGame.appendChild(containerResponse);

    let newMessage;

    do {
        const randomIndex = Math.floor(Math.random() * reponsesText.length);
        newMessage = reponsesText[randomIndex];
    } while (newMessage === previousQuestion);

    previousQuestion = newMessage;
    randomMessage = newMessage;
    couleurDemandee.textContent = `${newMessage}`;
}

// Générer et afficher les boutons
function generateResponses(validTexts, validColors) {
    const containerQuestions = document.createElement("div");
    containerQuestions.classList.add("container-questions");
    containerMiniGame.appendChild(containerQuestions);

    for (let i = 0; i < validTexts.length; i++) {
        const newDiv = document.createElement("button");
        newDiv.classList.add("container-reponse");
        newDiv.style.background = validColors[i];

        const text = document.createElement("p");
        text.textContent = validTexts[i];

        newDiv.appendChild(text);
        containerQuestions.appendChild(newDiv);

        newDiv.addEventListener("click", () => {
            iterationDeQuestions++;

            if (text.textContent === randomMessage) {
                // console.log("✅ bonne reponse");
                nombreBonneReponses++;
            } else {
                // console.log("❌ mauvaise reponse");
            }

            // Fin du jeu
            if (iterationDeQuestions >= 10) {
                showFinalScore();
            } else {
                couleurDemandee.innerHTML = "";
                containerQuestions.remove();
                generateMiniGame(); // nouveau tour
            }
        });
    }
}

// Un tour du mini jeu
function generateMiniGame() {
    containerMiniGame.innerHTML = "";
    const { validTexts, validColors } = prepareValidCombination();
    generateQuestions();
    generateResponses(validTexts, validColors);
}

// Afficher score final
function showFinalScore() {
    containerMiniGame.innerHTML = "";

    const stats = document.createElement("p");
    stats.textContent = `Votre score : ${nombreBonneReponses}/${iterationDeQuestions}`;

    const time = document.createElement("p");
    containerMiniGame.appendChild(time);
    time.textContent = `Temps : ${duree}s`;
    btnStartMiniGame.style.display = 'flex';
    document.querySelector(".timer").style.display = "none";


    const comment = document.createElement("p");
    if (nombreBonneReponses >= 8) comment.textContent = "Trop fort !";
    else if (nombreBonneReponses >= 5) comment.textContent = "Pas mal";
    else comment.textContent = "Nul";
    nombreBonneReponses = 0
    iterationDeQuestions = 0
    stopTimer();

    containerMiniGame.appendChild(stats);
    containerMiniGame.appendChild(comment);
    containerMiniGame.appendChild(btnStartMiniGame);
}

// commencer le timer
function startTimer() {
    duree = 0;
    document.querySelector(".timer").style.display = "flex";
    time.textContent = `Temps : ${duree}s`;

    if (intervalId) return;

    intervalId = setInterval(() => {
        duree++;
        time.textContent = `Temps : ${duree}s`;
    }, 1000);
}

// arreter le timer
function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}