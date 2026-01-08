// Déclaration des éléments DOM
const startButton = document.querySelector(".btn-start");
const introScreen = document.querySelector(".intro-screen");
const questionContainer = document.querySelector(".question-container");
const gameContainer = document.querySelector(".game-container");
const topCircle = document.querySelector(".decoration-circle-top");
const bottomCircle = document.querySelector(".decoration-circle-bottom");

// Variables pour les couleurs
const colorNames = ["Vert", "Rouge", "Bleu", "Jaune"];
const backgroundColors = ["#C9E385", "#FE8B8C", "#A5AEC7", "#FFDF78"];
const colorToHexMap = { "Vert": "#C9E385", "Rouge": "#FE8B8C", "Bleu": "#A5AEC7", "Jaune": "#FFDF78" };

// Variables d'état du jeu
let targetColorName;
let correctAnswersCount = 0;
let questionsAnswered = 0;
let previousTargetColor = null;
let colorDisplayElement;

// Variables pour le timer
let timerIntervalId;
let elapsedTime = 0;
const timerElement = document.createElement("p");
timerElement.classList.add('game-timer');
gameContainer.appendChild(timerElement);
timerElement.textContent = `Temps : ${elapsedTime}s`;

// Démarrer le mini-jeu
startButton.addEventListener("click", () => {
    gameContainer.classList.add("visible");
    introScreen.style.display = "none";
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

// Préparer une combinaison valide (éviter d'avoir texte couleur vert sur fond vert)
function prepareValidCombination() {
    let isValid = false;
    let shuffledColorNames, shuffledColors;

    while (!isValid) {
        shuffledColorNames = shuffle([...colorNames]);
        shuffledColors = shuffle([...backgroundColors]);
        isValid = true;

        for (let i = 0; i < shuffledColorNames.length; i++) {
            if (shuffledColors[i] === colorToHexMap[shuffledColorNames[i]]) {
                isValid = false; 
                break;
            }
        }
    }

    return { shuffledColorNames, shuffledColors };
}

// Générer la question avec la couleur demandée
function generateQuestion(shuffledColors) {
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-header");

    const instructionText = document.createElement("p");
    instructionText.textContent = "Choisisez la couleur ecrite !";
    instructionText.style.color = shuffledColors[3];
    
    colorDisplayElement = document.createElement("p");
    colorDisplayElement.classList.add('color-display');
    colorDisplayElement.style.background = shuffledColors[0];

    questionWrapper.appendChild(instructionText);
    questionWrapper.appendChild(colorDisplayElement);
    questionContainer.appendChild(questionWrapper);

    let newTargetColor;

    do {
        const randomIndex = Math.floor(Math.random() * colorNames.length);
        newTargetColor = colorNames[randomIndex];
    } while (newTargetColor === previousTargetColor);

    previousTargetColor = newTargetColor;
    targetColorName = newTargetColor;
    colorDisplayElement.textContent = `${newTargetColor}`;
}

// Générer et afficher les boutons de réponse
function generateAnswers(shuffledColorNames, shuffledColors) {
    const answersGrid = document.createElement("div");
    answersGrid.classList.add("answers-grid");
    questionContainer.appendChild(answersGrid);

    for (let i = 0; i < shuffledColorNames.length; i++) {
        const answerButton = document.createElement("button");
        answerButton.classList.add("answer-button");
        answerButton.style.background = shuffledColors[i];

        const answerText = document.createElement("p");
        answerText.textContent = shuffledColorNames[i];

        answerButton.appendChild(answerText);
        answersGrid.appendChild(answerButton);

        answerButton.addEventListener("click", () => {
            questionsAnswered++;

            if (answerText.textContent === targetColorName) {
                // console.log("✅ bonne reponse");
                correctAnswersCount++;
            } else {
                // console.log("❌ mauvaise reponse");
            }

            // Fin du jeu
            if (questionsAnswered >= 10) {
                showFinalScore();
            } else {
                colorDisplayElement.innerHTML = "";
                answersGrid.remove();
                generateMiniGame(); // Nouveau tour
                topCircle.style.background = shuffledColors[0];
                bottomCircle.style.background = shuffledColors[3];
            }
        });
    }
}

// Générer un tour du mini-jeu
function generateMiniGame() {
    questionContainer.innerHTML = "";
    const { shuffledColorNames, shuffledColors } = prepareValidCombination();
    generateQuestion(shuffledColors);
    generateAnswers(shuffledColorNames, shuffledColors);
}

// Afficher le score final
function showFinalScore() {
    questionContainer.innerHTML = "";

    const scoreText = document.createElement("p");
    scoreText.textContent = `Votre score : ${correctAnswersCount}/${questionsAnswered}`;

    const finalTimeElement = document.createElement("p");
    questionContainer.appendChild(finalTimeElement);
    finalTimeElement.textContent = `Temps : ${elapsedTime}s`;
    startButton.style.display = 'flex';
    document.querySelector(".game-timer").style.display = "none";

    const feedbackText = document.createElement("p");
    if (correctAnswersCount >= 8) feedbackText.textContent = "Exellent, Bravo !";
    else if (correctAnswersCount >= 5) feedbackText.textContent = "Proche des meilleurs scores";
    else feedbackText.textContent = "Avec un peu d'entrainement votre score montera";
    
    correctAnswersCount = 0;
    questionsAnswered = 0;
    stopTimer();

    questionContainer.appendChild(scoreText);
    questionContainer.appendChild(feedbackText);
    questionContainer.appendChild(startButton);
}

// Démarrer le timer
function startTimer() {
    elapsedTime = 0;
    document.querySelector(".game-timer").style.display = "flex";
    timerElement.textContent = `Temps : ${elapsedTime}s`;

    if (timerIntervalId) return;

    timerIntervalId = setInterval(() => {
        elapsedTime++;
        timerElement.textContent = `Temps : ${elapsedTime}s`;
    }, 1000);
}

// Arrêter le timer
function stopTimer() {
    clearInterval(timerIntervalId);
    timerIntervalId = null;
}