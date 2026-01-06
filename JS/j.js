



// PROGRESS BAR MODULE

const ProgressBar = {
    init() {
        this.createProgressBar();
        this.addStyles();
        this.elements = {
            fill: document.getElementById('progressFill'),
            percentage: document.getElementById('progressPercentage')
        };
    },

    createProgressBar() {
        const progressHTML = `
            <div class="progress-container">
                <div class="progress-bar-track">
                    <div id="progressFill" class="progress-bar-fill"></div>
                </div>

            </div>
        `;
        
        const header = document.querySelector('.header');
        if (header) {
            header.insertAdjacentHTML('beforeend', progressHTML);
        }
    },

    addStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .progress-container { margin-top: 1rem; }
            .progress-text {
                display: flex;
                justify-content: space-between;
                font-size: 0.9rem;
                margin-top: 0.5rem;
                opacity: 0.9;
            }
            #progressPercentage { font-weight: bold; }
        `;
        document.head.appendChild(style);
    },

    update(percentage) {
        const progress = Math.max(0, Math.min(100, percentage));
        if (this.elements.fill) {
            this.elements.fill.style.width = progress + '%';
        }
        if (this.elements.percentage) {
            this.elements.percentage.textContent = Math.round(progress) + '%';
        }
    }
};


// async function loadQuestions() {
//      const response = await fetch("questions.json");
//      const data = await response.json();
//      console.log(data);
// }

// loadQuestions();

// window.addEventListener('load', () => {
//     fetch('questions.json')
//         .then((res) => res.json())
//         .then((data) => (jsonData = data ))
//         .catch((err) => (console.err));
// });

const quizData = [
  {
    id: 1,
    category: "🧠 Cerveau et activité intellectuelle",
    question: "Vous souhaitez améliorer votre compréhension en lecture. Que choisissez-vous ?",
    options: [
      "Vous lisez rapidement le texte sans vous arrêter, même si tout n'est pas clair.",
      "Vous faites des pauses pour reformuler avec vos propres mots ce que vous avez compris."
    ],
    answer: 1,
    explanations: [
      "Lire sans reformuler mobilise moins la mémoire de travail et limite l'ancrage des informations. Le cerveau traite le texte de manière superficielle.",
      "Reformuler avec vos propres mots stimule les aires cérébrales du langage et favorise le renforcement des réseaux cérébraux impliqués dans la compréhension."
    ],
    conseils: [
      "Faire des pauses de reformulation mobilise activement le cortex préfrontal, une zone clé pour trier, comprendre et mémoriser les informations importantes.",
      "Associer la reformulation à un schéma ou un surlignage aide le cerveau à structurer l'information et à mieux la retenir."
    ]
  },
  {
    id: 2,
    category: "🧠 Cerveau et activité intellectuelle",
    question: "Vous vous entraînez pour une pièce de théâtre. Comment répétez-vous ?",
    options: [
      "Vous apprenez le texte par cœur, sans jouer les émotions.",
      "Vous répétez le texte en y ajoutant des émotions et des gestes."
    ],
    answer: 1,
    explanations: [
      "Cette méthode sollicite principalement la mémoire verbale, mais engage peu les réseaux émotionnels et moteurs.",
      "Associer émotions et gestes active davantage de zones cérébrales, ce qui favorise une meilleure consolidation de la mémoire."
    ],
    conseils: [
      "Mobiliser plusieurs systèmes cérébraux rend l'apprentissage plus robuste et plus naturel.",
      "Varier le ton de la voix et les mouvements enrichit l'expérience d'apprentissage et facilite le rappel."
    ]
  },
  {
    id: 3,
    category: "🧠 Cerveau et activité intellectuelle",
    question: "On vous propose de jouer à un jeu. Lequel choisissez-vous ?",
    options: [
      "Vous jouez à un jeu de stratégie nécessitant de la planification.",
      "Vous privilégiez des jeux simples pour éviter la fatigue mentale."
    ],
    answer: 0,
    explanations: [
      "Les jeux de stratégie sollicitent le cortex préfrontal, impliqué dans la planification et la prise de décision mais peuvent être moins relaxants que des jeux simples et cognitivement fatigants.",
      "Les jeux simples mobilisent davantage la perception visuelle et favorisent la détente, mais stimulent moins les fonctions exécutives (planification, prise de décision, flexibilité cognitive...)."
    ],
    conseils: [
      "Anticiper volontairement plusieurs coups à l'avance et réfléchir à ses choix renforce l'activation du cortex préfrontal et améliore les capacités de planification et de prise de décision.",
      "Même quelques minutes quotidiennes de jeux de stratégie peuvent contribuer au renforcement des capacités d'anticipation, en mobilisant les réseaux cérébraux impliqués dans la planification et la prise de décision."
    ]
  },
  {
    id: 4,
    category: "🧠 Cerveau et activité intellectuelle",
    question: "Vous souhaitez encourager votre cerveau à créer de nouvelles connexions. Que choisissez-vous ?",
    options: [
      "Vous pratiquez régulièrement une activité nouvelle ou stimulante.",
      "Vous restez sur des activités que vous maîtrisez déjà très bien."
    ],
    answer: 0,
    explanations: [
      "La nouveauté stimule fortement la plasticité cérébrale, un mécanisme essentiel à l'apprentissage.",
      "Les activités familières sont rassurantes, mais sollicitent moins la capacité d'adaptation du cerveau."
    ],
    conseils: [
      "Même une courte exposition à une activité nouvelle peut activer la formation de nouvelles connexions neuronales.",
      "Introduire progressivement de la nouveauté dans votre routine favorise la vitalité cérébrale."
    ]
  },
  {
    id: 5,
    category: "🧠 Cerveau et activité intellectuelle",
    question: "Vous souhaitez préserver votre cerveau sur le long terme. Que faites-vous ?",
    options: [
      "Vous pratiquez régulièrement des activités intellectuelles variées.",
      "Vous pensez que la stimulation intellectuelle devient importante surtout avec l'âge."
    ],
    answer: 0,
    explanations: [
      "La diversité des activités nourrit la réserve cognitive, un facteur protecteur contre le vieillissement cérébral.",
      "La réserve cognitive se construit tout au long de la vie, pas uniquement à un âge avancé."
    ],
    conseils: [
      "Associer plaisir et stimulation intellectuelle renforce la motivation et l'efficacité des apprentissages.",
      "Stimuler régulièrement le cerveau dès maintenant contribue à le rendre plus résilient à long terme."
    ]
  },
  {
    id: 6,
    category: "🏃 Cerveau et activité physique",
    question: "Vous souhaitez attraper une bouteille posée sur une étagère haute. Comment procédez-vous ?",
    options: [
      "Vous tendez le bras immédiatement, sans ajuster votre posture.",
      "Vous observez la position de la bouteille, ajustez votre posture, puis agissez."
    ],
    answer: 1,
    explanations: [
      "Le cerveau dispose de moins d'informations sensorielles pour planifier un mouvement précis.",
      "Vous activez la boucle perception → planification → mouvement, essentielle à la coordination."
    ],
    conseils: [
      "Analyser brièvement sa posture active les régions pariétales et motrices, ce qui peut favoriser temporairement la coordination et la précision des mouvements.",
      "Avant des gestes complexes, visualiser mentalement chaque étape active les réseaux neuronaux moteurs et le cervelet et peut améliorer la coordination."
    ]
  },
  {
    id: 7,
    category: "🏃 Cerveau et activité physique",
    question: "Vous souhaitez faire une pause pendant vos révisions.",
    options: [
      "Vous restez assis longtemps pour maximiser le temps de travail.",
      "Vous intégrez une courte activité physique."
    ],
    answer: 1,
    explanations: [
      "L'inactivité réduit la production de BDNF, une molécule clé pour la mémoire.",
      "L'exercice stimule la création de nouveaux neurones et améliore l'attention."
    ],
    conseils: [
      "Même quelques minutes de mouvement stimulent l'hippocampe.",
      "Choisissez une activité plaisante : le cerveau apprend mieux avec le plaisir."
    ]
  },
  {
    id: 8,
    category: "🏃 Cerveau et activité physique",
    question: "Vous vous sentez tendu et êtes de mauvaise humeur.",
    options: [
      "Vous restez immobile en attendant que cela passe.",
      "Vous pratiquez une activité physique douce."
    ],
    answer: 1,
    explanations: [
      "Rester immobile et « attendre que ça passe » libère très peu de neurotransmetteurs du « bien‑être » (dopamine, sérotonine, endorphines), contrairement à un repos actif.",
      "L'activité physique stimule les neurotransmetteurs associés au bien-être."
    ],
    conseils: [
      "Le mouvement favorise la régulation émotionnelle via la dopamine et la sérotonine.",
      "Ajouter de la musique renforce l'effet motivationnel."
    ]
  },
  {
    id: 9,
    category: "🏃 Cerveau et activité physique",
    question: "Comment prenez-vous soin de votre cerveau au quotidien pour l'avenir ?",
    options: [
      "Vous prévoyez de commencer le sport plus tard.",
      "Vous adoptez dès maintenant une activité régulière."
    ],
    answer: 1,
    explanations: [
      "Les effets bénéfiques de l'activité physique sur le cerveau sont observables à tout âge.",
      "L'exercice augmente le flux sanguin vers le cerveau et diminue l'inflammation cérébrale."
    ],
    conseils: [
      "Pratiquer une activité physique dès le plus jeune âge renforce la plasticité cérébrale et aide à protéger contre le déclin cognitif.",
      "La constance est plus importante que l'intensité."
    ]
  },
  {
    id: 10,
    category: "🏃 Cerveau et activité physique",
    question: "Lorsque vous bougez au quotidien pour rester en forme, comment choisissez-vous vos activités ?",
    options: [
      "Vous répétez toujours la même activité.",
      "Vous combinez endurance et coordination ou réflexion."
    ],
    answer: 1,
    explanations: [
      "Les exercices répétitifs sollicitent peu les fonctions exécutives, mais améliorent la circulation cérébrale, la mémoire et le bien-être.",
      "Associer mouvement et cognition optimise la plasticité cérébrale."
    ],
    conseils: [
      "Ajouter une dimension cognitive stimule le cortex frontal.",
      "Les sports demandant coordination et prise de décision sont particulièrement bénéfiques."
    ]
  },
  {
    id: 11,
    category: "🍎 Cerveau et alimentation",
    question: "Vous commencez à réviser mais vous vous sentez sans énergie. Que choisissez-vous de manger ?",
    options: [
      "Une part de gâteau très sucré pour un effet rapide.",
      "Une collation avec des fruits, des noix et un yaourt."
    ],
    answer: 1,
    explanations: [
      "Les sucres rapides provoquent un pic de glucose suivi d'une chute, ce qui peut perturber l'attention et la concentration.",
      "Vous fournissez au cerveau du glucose avec les fruits et le yaourt mais également des bons lipides et des protéines grâce aux noix."
    ],
    conseils: [
      "Privilégier des glucides à assimilation lente permet au cerveau de recevoir un apport énergétique plus stable, essentiel à ses performances.",
      "Consommer des glucides à libération lente et des oméga‑3 favorise la santé des neurones et le bon fonctionnement des circuits cérébraux."
    ]
  },
  {
    id: 12,
    category: "🍎 Cerveau et alimentation",
    question: "Vous avez du mal à vous concentrer en fin d'après-midi.",
    options: [
      "Vous attendez d'avoir très soif pour boire.",
      "Vous buvez un verre d'eau dès maintenant."
    ],
    answer: 1,
    explanations: [
      "Une légère déshydratation suffit à altérer la mémoire, l'attention et l'humeur.",
      "Vous contribuez à maintenir un fonctionnement optimal du cerveau et une meilleure stabilité émotionnelle."
    ],
    conseils: [
      "Boire régulièrement aide à maintenir les fonctions cognitives, car le cerveau est composé en grande partie d'eau.",
      "Avoir une bouteille d'eau à portée de main facilite ce réflexe bénéfique."
    ]
  },
  {
    id: 13,
    category: "🍎 Cerveau et alimentation",
    question: "Vous avez terminé votre repas et un dessert très appétissant vous tente.",
    options: [
      "Vous le mangez automatiquement, même si vous êtes rassasié.",
      "Vous prenez un moment pour évaluer si vous avez encore faim ou si c'est une envie."
    ],
    answer: 1,
    explanations: [
      "Après un repas, il peut arriver que le circuit cérébral de la récompense reste sensible au sucre.",
      "Prendre un moment pour évaluer sa faim engage la régulation cognitive et l'hypothalamus, réduisant les excès liés à l'envie plutôt qu'au besoin énergétique."
    ],
    conseils: [
      "Attendre quelques minutes permet au cerveau d'ajuster les signaux de satiété.",
      "Un fruit peut satisfaire l'envie de sucré tout en apportant fibres et micronutriments."
    ]
  },
  {
    id: 14,
    category: "🍎 Cerveau et alimentation",
    question: "Que mangez-vous de manière générale ?",
    options: [
      "Vous consommez surtout des aliments ultra-transformés.",
      "Vous intégrez davantage de fruits, légumes, fibres et aliments fermentés."
    ],
    answer: 1,
    explanations: [
      "Les aliments ultra-transformés favorisent l'inflammation et peuvent perturber le microbiote intestinal, en lien avec l'humeur.",
      "Vous nourrissez un microbiote diversifié, capable de produire des molécules influençant positivement le cerveau."
    ],
    conseils: [
      "Augmentez progressivement votre consommation de fibres (fruits, légumes, légumineuses) pour soutenir la santé de votre intestin, qui est en lien étroit avec le cerveau.",
      "Varier les couleurs dans l'assiette apporte différents types de polyphénols, composés végétaux qui participent à la protection des cellules et au bon fonctionnement cérébral."
    ]
  },
  {
    id: 15,
    category: "🍎 Cerveau et alimentation",
    question: "Vous dînez tard et hésitez à manger un encas supplémentaire.",
    options: [
      "Vous mangez, même tard dans la soirée.",
      "Vous préférez respecter votre rythme biologique et éviter de manger tard."
    ],
    answer: 1,
    explanations: [
      "Manger tard peut perturber l'horloge biologique et influencer la qualité du sommeil et la plasticité cérébrale.",
      "Respecter l'horloge interne soutient l'énergie, l'humeur et les fonctions cognitives."
    ],
    conseils: [
      "Si nécessaire, privilégier un encas léger limite l'impact sur le rythme circadien.",
      "Des horaires de repas réguliers sont bénéfiques pour le cerveau."
    ]
  },
  {
    id: 16,
    category: "🌙 Cerveau et sommeil",
    question: "Il est 22h15 après une journée intense et vous souhaitez bien mémoriser ce que vous avez appris.",
    options: [
      "Vous continuez à travailler tard pour terminer.",
      "Vous pratiquez une activité calme pour préparer votre cerveau au sommeil."
    ],
    answer: 1,
    explanations: [
      "Travailler tard peut retarder l'endormissement et réduire l'accès aux phases de sommeil réparatrices.",
      "Le sommeil permet au cerveau de trier les informations et de renforcer les apprentissages."
    ],
    conseils: [
      "Une transition calme en soirée facilite la consolidation de la mémoire pendant la nuit.",
      "Instaurer une routine apaisante améliore la qualité du sommeil."
    ]
  },
  {
    id: 17,
    category: "🌙 Cerveau et sommeil",
    question: "Dans quelle condition dormez-vous ?",
    options: [
      "Vous dormez avec de la lumière et du bruit.",
      "Vous privilégiez une chambre sombre, calme et fraîche."
    ],
    answer: 1,
    explanations: [
      "La lumière et le bruit perturbent l'horloge biologique et la régulation naturelle du sommeil.",
      "Vous facilitez l'enchaînement fluide des cycles de sommeil."
    ],
    conseils: [
      "L'obscurité favorise la production de mélatonine, essentielle à un sommeil réparateur.",
      "Un sommeil de qualité soutient le système glymphatique, chargé du nettoyage cérébral."
    ]
  },
  {
    id: 18,
    category: "🌙 Cerveau et sommeil",
    question: "Vous vous réveillez fatigué et un peu étourdi.",
    options: [
      "Vous restez dans le noir pour émerger lentement.",
      "Vous vous exposez rapidement à la lumière naturelle."
    ],
    answer: 1,
    explanations: [
      "Sans lumière, le cerveau reste en mode « nuit » plus longtemps.",
      "La lumière matinale régule le rythme veille–sommeil et améliore l'énergie."
    ],
    conseils: [
      "La lumière est un signal clé pour synchroniser l'horloge interne.",
      "Quelques minutes à l'extérieur suffisent pour activer ce mécanisme."
    ]
  },
  {
    id: 19,
    category: "🌙 Cerveau et sommeil",
    question: "Vous avez peu dormi la nuit précédente.",
    options: [
      "Vous comptez sur le week-end pour rattraper.",
      "Vous vous couchez plus tôt afin de rétablir un rythme régulier."
    ],
    answer: 1,
    explanations: [
      "Une seule nuit courte peut affecter mémoire, attention et nettoyage cérébral.",
      "Vous favorisez le retour à des cycles de sommeil complets."
    ],
    conseils: [
      "Le cerveau préfère la régularité à de grands rattrapages ponctuels.",
      "Des horaires de coucher stables soutiennent les performances cognitives."
    ]
  },
  {
    id: 20,
    category: "🌙 Cerveau et sommeil",
    question: "Vous avez du mal à vous endormir. Que faites-vous ?",
    options: [
      "Vous restez au lit en utilisant votre téléphone.",
      "Vous pratiquez une activité relaxante hors du lit."
    ],
    answer: 1,
    explanations: [
      "Les écrans stimulent le cerveau et inhibent la production de mélatonine.",
      "La relaxation aide à réguler les émotions et favorise l'endormissement."
    ],
    conseils: [
      "Limiter les écrans le soir facilite l'endormissement.",
      "Associer le lit uniquement au sommeil aide le cerveau à reconnaître le bon signal."
    ]
  },
  {
    id: 21,
    category: "🤝 Cerveau et interactions sociales",
    question: "Vous traversez une période un peu stressante. Comment réagissez-vous ?",
    options: [
      "Vous gardez tout pour vous et évitez d'en parler.",
      "Vous échangez avec une personne de confiance."
    ],
    answer: 1,
    explanations: [
      "Garder le stress pour soi active durablement les circuits de l'alerte et peut fatiguer les réseaux émotionnels.",
      "Le soutien social favorise la libération d'ocytocine, une hormone impliquée dans l'apaisement."
    ],
    conseils: [
      "Partager une émotion peut aider le cerveau à mieux réguler le stress via l'amygdale et le cortex préfrontal.",
      "Même une courte discussion peut réduire la charge émotionnelle perçue."
    ]
  },
  {
    id: 22,
    category: "🤝 Cerveau et interactions sociales",
    question: "Vous avez une journée chargée. Comment gérez-vous vos interactions ?",
    options: [
      "Vous évitez les échanges pour rester concentré.",
      "Vous prenez quelques moments pour échanger avec les autres."
    ],
    answer: 1,
    explanations: [
      "Limiter les interactions réduit les stimulations sociales, importantes pour la motivation, mais permet de focaliser votre attention sur une tâche.",
      "Les échanges activent des réseaux cérébraux liés à l'empathie et à la cognition sociale."
    ],
    conseils: [
      "Des interactions courtes mais régulières soutiennent l'attention et l'équilibre émotionnel, et ne pas oublier de faire des pauses, essentielles pour rester efficace !",
      "Même un échange bref peut renforcer le sentiment de connexion et l'énergie mentale."
    ]
  },
  {
    id: 23,
    category: "🤝 Cerveau et interactions sociales",
    question: "Vous apprenez une nouvelle information. Que faites-vous ?",
    options: [
      "Vous la gardez pour vous.",
      "Vous la partagez ou en discutez avec quelqu'un."
    ],
    answer: 1,
    explanations: [
      "L'information reste traitée de manière interne, sans mobilisation des réseaux sociaux et linguistiques du cerveau.",
      "Partager une information mobilise langage, mémoire et circuits sociaux, ce qui renforce sa mémorisation et facilite sa consolidation."
    ],
    conseils: [
      "Expliquer à quelqu'un active davantage la mémoire et la compréhension.",
      "Posez des questions et reformulez vos idées : cela ancre mieux l'information dans votre mémoire et stimule la compréhension."
    ]
  },
  {
    id: 24,
    category: "🤝 Cerveau et interactions sociales",
    question: "Vous vous sentez fatigué mentalement. Que privilégiez-vous ?",
    options: [
      "Vous vous isolez complètement.",
      "Vous passez un moment agréable avec quelqu'un."
    ],
    answer: 1,
    explanations: [
      "Des moments de retrait temporaires peuvent aider le cerveau à récupérer lorsqu'il est mentalement fatigué, tandis qu'un isolement prolongé peut avoir des effets défavorables sur la régulation émotionnelle.",
      "Les interactions positives activent les circuits de la récompense et soutiennent l'humeur."
    ],
    conseils: [
      "Le cerveau a besoin d'équilibre entre solitude et interactions.",
      "Un moment convivial stimule la dopamine et renforce le bien-être mental, toutefois des moments de retraits temporaires peuvent également être bénéfiques pour récupérer."
    ]
  },
  {
    id: 25,
    category: "🤝 Cerveau et interactions sociales",
    question: "Dans votre quotidien, comment gérez-vous vos relations avec les autres ?",
    options: [
      "Vous considérez les relations sociales comme secondaires.",
      "Vous entretenez régulièrement vos liens sociaux."
    ],
    answer: 1,
    explanations: [
      "Le manque d'interactions sociales est associé à un déclin cognitif plus rapide.",
      "Entretenir des liens stimule la cognition sociale et la réserve cognitive."
    ],
    conseils: [
      "Les relations sociales sont un facteur clé de protection cérébrale.",
      "La qualité des relations compte autant que leur fréquence."
    ]
  }
];


// QUIZ APPLICATION

const Quiz = {
    currentQuestion: 0,
    userAnswers: [],
    selectedOption: null,

    init() {
        ProgressBar.init();
        this.displayQuestion();
        this.setupEventListeners();
    },

    displayQuestion() {
        const question = quizData[this.currentQuestion];
        
        // Remove previous feedback and answer highlighting
        $('.answer-feedback').remove();
        $('.option-block').removeClass('correct-answer wrong-answer');
        
        // Update question text
        $('#question-number').html(question.id + '.');
        $('#question-text').html(question.question);
        
        // Clear and populate options
        $('#question-options').empty();
        question.options.forEach((option, index) => {
          const optionHTML = `
            <div class='option-block'>
              <label class='clickable-option'>
                <input type='radio' name='option' value='${index}'>
                <span style='margin-left: 8px;'>${option}</span>
              </label>
            </div>
          `;
          $('#question-options').append(optionHTML);
        });

        // If the user already answered this question, pre-select that option
        const prev = this.userAnswers[this.currentQuestion];
        if (prev !== undefined && prev !== null) {
          const selector = "#question-options input[value='" + prev + "']";
          $(selector).prop('checked', true);
          Quiz.selectedOption = Number(prev);
          $(selector).closest('.clickable-option').addClass('selected');
        }
        
        // Update buttons
        $('#previous-btn').prop('disabled', this.currentQuestion === 0);
        $('#next-btn').prop('disabled', false);
        
        // Update progress
        const progress = ((this.currentQuestion + 1) / quizData.length) * 100;
        ProgressBar.update(progress);
    },

    setupEventListeners() {
        // Handle option selection
        $('#question-options').on('click', '.clickable-option', function() {
          // Prevent re-selection if already answered
          if ($('.answer-feedback').length > 0) return;
          
          const radioInput = $(this).find('input[type=radio]');
          radioInput.prop('checked', true);
          Quiz.selectedOption = parseInt(radioInput.val(), 10);

          // Visual feedback via class
          $('.clickable-option').removeClass('selected');
          $(this).addClass('selected');
        });

        // Handle keyboard selection
        $('#question-options').on('change', 'input[type=radio]', function() {
          // Prevent re-selection if already answered
          if ($('.answer-feedback').length > 0) return;
          
          Quiz.selectedOption = parseInt($(this).val(), 10);
          $('.clickable-option').removeClass('selected');
          $(this).closest('.clickable-option').addClass('selected');
        });

        // Next button
        $('#next-btn').click((e) => {
            e.preventDefault();
            
            // If feedback is already showing, go to next question
            if ($('.answer-feedback').length > 0) {
                this.saveAnswer();
                if (this.currentQuestion < quizData.length - 1) {
                    this.currentQuestion++;
                    this.selectedOption = null;
                    this.displayQuestion();
                } else {
                    this.showResults();
                }
                return;
            }
            
            // If no option selected, do nothing
            if (this.selectedOption === null) return;
            
            // Show the feedback first
            this.showAnswerFeedback();
            this.saveAnswer();
        });

        // Previous button
        $('#previous-btn').click((e) => {
            e.preventDefault();
            this.saveAnswer();
            
            if (this.currentQuestion > 0) {
                this.currentQuestion--;
                this.selectedOption = null;
                this.displayQuestion();
            }
        });
    },

    showAnswerFeedback() {
      const question = quizData[this.currentQuestion];
      const isCorrect = this.selectedOption === question.answer;
      const correctAnswer = question.options[question.answer];
      
      // Get the explanation and conseil for the selected option
      const selectedExplanation = question.explanations[this.selectedOption];
      const selectedConseil = question.conseils[this.selectedOption];
      
      // Highlight correct/wrong options
      $('.option-block').each(function(index) {
        if (index === question.answer) {
          $(this).addClass('correct-answer');
        } else if (index === Quiz.selectedOption && !isCorrect) {
          $(this).addClass('wrong-answer');
        }
      });
      
      // Create feedback HTML
      const feedbackHTML = `
        <div class="answer-feedback ${isCorrect ? 'feedback-correct' : 'feedback-wrong'}">
          <div class="feedback-explanation"><strong>Explication :</strong> ${selectedExplanation}</div>
          <div class="feedback-conseil"><strong>✨ Conseil :</strong> ${selectedConseil}</div>
        </div>
      `;
      
      // Insert feedback after options
      $('#question-options').after(feedbackHTML);
    },

    saveAnswer() {
      if (this.selectedOption !== null && this.selectedOption !== undefined) {
        this.userAnswers[this.currentQuestion] = Number(this.selectedOption);
      }
    },

    calculateScore() {
        let score = 0;
        quizData.forEach((question, index) => {
            if (this.userAnswers[index] === question.answer) {
                score++;
            }
        });
        return score;
    },

    showResults() {
        ProgressBar.update(100);
        $('#quiz-container').hide();
        
        const score = this.calculateScore();
        const total = quizData.length;
        
        let resultHTML = `
            <div class="result">
                <h1 class="res-header">Total Score: ${score}/${total}</h1>
                <button id="restartQuiz" class="btn btn-primary" style="margin: 20px 0;">
                    Restart Quiz
                </button>
        `;
        
        quizData.forEach((question, index) => {
          const userAnswer = this.userAnswers[index];
          const isCorrect = userAnswer === question.answer;
          const scoreIcon = isCorrect 
            ? '<span class="correct">1</span><i class="fa fa-check c-correct"></i>'
            : '<span class="wrong">0</span><i class="fa fa-remove c-wrong"></i>';
          const correctText = question.options[question.answer];
          const userText = (userAnswer !== undefined && userAnswer !== null)
            ? question.options[userAnswer]
            : 'No answer';

          resultHTML += `
            <div class="result-question">
              <span>Q ${question.id}</span> ${question.question}
            </div>
            <div><b>Correct answer:</b> ${correctText}</div>
            <div><b>Your answer:</b> ${userText}</div>
            <div class="last-row"><b>Score:</b> ${scoreIcon}</div>
          `;
        });
        
        resultHTML += '</div>';
        $('#result').html(resultHTML);
        
        // Restart functionality
        $('#restartQuiz').click(() => location.reload());
    }
};


// INITIALIZE quiz

$(document).ready(() => {
  Quiz.init();
});


