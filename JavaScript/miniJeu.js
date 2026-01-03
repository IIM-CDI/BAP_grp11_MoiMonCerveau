// declaration des variables
const btnStartMiniGame = document.querySelector(".btn-commencer");
const containerMiniGame = document.querySelector(".container-mini_game");
const couleurDemandee = document.querySelector(".color-question");
const containerQuestions = document.querySelector(".container-questions")
const containerReponses = document.querySelector(".container-reponse")

// commencer mini jeu au click
btnStartMiniGame.addEventListener("click", () => {
    containerMiniGame.classList.toggle("apparaitre");
    btnStartMiniGame.style.display = "none";
    generateQuestions();
    generateResponses();
})

// verifier si la reponse clickée correpond au question
// ptet dans generationReponse ppur chaque bouton esseyer si ca peut marchher addeventlistener

let reponses = ["Vert", "Rouge", "Bleu", "Jaune"];
let couleursBackground = ["#e57373", "#81c784", "#fff176", "#64b5f6"];

// declaration en dehors de fonctions pour passer ensuite en generateResponses() pour comparer le text demandée et ce que utilisateur a choisir
let randomMessage  
let count = 0
const iteration = 10
// generer questions de mini jeu
function generateQuestions() {
    const randomIndex = Math.floor(Math.random() * reponses.length)
    randomMessage = reponses[randomIndex]
    couleurDemandee.innerHTML = randomMessage;
    console.log(randomMessage)
}

// Mélange un tableau de manière uniforme (algorithme de Fisher–Yates)
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
  
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

// Génère et affiche les réponses du mini-jeu dans un ordre aléatoire
function generateResponses() {
    const reponsesMelangees = shuffle(reponses);
    const backgroundMelangees = shuffle(couleursBackground);
    console.log(backgroundMelangees)

    

    const containerQuestions = document.createElement("div");
    containerQuestions.classList.add("container-questions")

    containerMiniGame.appendChild(containerQuestions)

    for (let index = 0; index < reponsesMelangees.length; index++) {
        const element = reponsesMelangees[index];
        const backgroundRandom = backgroundMelangees[index];
        
        const newDiv = document.createElement("button");
        newDiv.classList.add("container-reponse")

        

        newDiv.style.background = backgroundRandom;
        

        
        

        newDiv.addEventListener("click", () => {

          
            if (text.textContent === randomMessage) {
                console.log("c'est bon")
                count++
                console.log(count)
            } else {
                console.log("c'est pas bon")
            }

            
            couleurDemandee.innerHTML = ""
            containerQuestions.remove()

            generateQuestions()
            generateResponses()
        })

        const text = document.createElement("p");

        text.textContent = element;


        containerQuestions.appendChild(newDiv);
        newDiv.appendChild(text)
        
    }
}

