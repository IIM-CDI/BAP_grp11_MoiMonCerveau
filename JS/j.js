
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
                <div class="progress-text">
                    <span id="progressPercentage">0%</span>
                    <span id="progressLabel">Quiz Progress</span>
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


// QUIZ DATA

const quizData = [
    {
        id: 1,
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["&lt;script&gt;", "&lt;javascript&gt;", "&lt;scripting&gt;", "&lt;js&gt;"],
        answer: "&lt;script&gt;"
    },
    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        options: ["The &lt;head&gt; section", "The &lt;body&gt; section", "Both the &lt;head&gt; section and the &lt;body&gt; section are correct"],
        answer: "Both the &lt;head&gt; section and the &lt;body&gt; section are correct"
    },
    {
        id: 3,
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",
        options: ["&ltscript href=&quot;xxx.js&quot;>", "&lt;script name=&quot;xxx.js&quot;&gt;", "&lt;script src=&quot;xxx.js&quot;&gt;"],
        answer: "&lt;script src=&quot;xxx.js&quot;&gt;"
    },
    {
        id: 4,
        question: "The external JavaScript file must contain the &lt;script&gt; tag.",
        options: ["True", "False"],
        answer: "False"
    },
    {
        id: 5,
        question: "How do you write &quot;Hello World&quot; in an alert box?",
        options: ["alertBox(&quot;Hello World&quot;);", "msg(&quot;Hello World&quot;);", "alert(&quot;Hello World&quot;);", "msgBox(&quot;Hello World&quot;);"],
        answer: "alert(&quot;Hello World&quot;);"
    },
    {
        id: 6,
        question: "How do you create a function in JavaScript?",
        options: ["function myFunction()", "function:myFunction()", "function = myFunction()"],
        answer: "function myFunction()"
    },
    {
        id: 7,
        question: "How do you call a function named &quot;myFunction&quot;?",
        options: ["call function myFunction()", "call myFunction()", "myFunction()"],
        answer: "myFunction()"
    },
    {
        id: 8,
        question: "How to write an IF statement in JavaScript?",
        options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", " if i = 5"],
        answer: "if (i == 5)"
    },
    {
        id: 9,
        question: "Which of the following is a disadvantage of using JavaScript?",
        options: [
            "Client-side JavaScript does not allow the reading or writing of files.",
            "JavaScript can not be used for Networking applications because there is no such support available.",
            "JavaScript doesn't have any multithreading or multiprocess capabilities.",
            "All of the above."
        ],
        answer: "All of the above."
    },
    {
        id: 10,
        question: "How to write an IF statement for executing some code if &quot;i&quot; is NOT equal to 5?",
        options: ["if (i <> 5)", "if i <> 5", "if (i != 5)", "if i =! 5 then"],
        answer: "if (i != 5)"
    },
    {
        id: 11,
        question: "How does a WHILE loop start?",
        options: ["while i = 1 to 10", "while (i &lt;= 10; i++)", "while (i &lt;= 10)"],
        answer: "while (i &lt;= 10)"
    },
    {
        id: 12,
        question: "How does a FOR loop start?",
        options: ["for (i = 0; i &lt;= 5)", "for (i = 0; i &lt;= 5; i++)", "for i = 1 to 5", "for (i &lt;= 5; i++)"],
        answer: "for (i = 0; i &lt;= 5; i++)"
    },
    {
        id: 13,
        question: "How can you add a comment in a JavaScript?",
        options: ["//This is a comment", "&sbquo;This is a comment", "&lt;!--This is a comment--&gt;"],
        answer: "//This is a comment"
    },
    {
        id: 14,
        question: "How to insert a comment that has more than one line?",
        options: ["/*This comment has more than one line*/", "//This comment has more than one line//", "&lt;!--This comment has more than one line--&gt;"],
        answer: "/*This comment has more than one line*/"
    },
    {
        id: 15,
        question: "What is the correct way to write a JavaScript array?",
        options: [
            "var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)",
            "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
            "var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)",
            "var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;"
        ],
        answer: "var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]"
    },
    {
        id: 16,
        question: "How do you round the number 7.25, to the nearest integer?",
        options: ["rnd(7.25)", "Math.round(7.25)", "Math.rnd(7.25)", "round(7.25)"],
        answer: "Math.round(7.25)"
    },
    {
        id: 17,
        question: "How do you find the number with the highest value of x and y?",
        options: ["Math.max(x, y)", "Math.ceil(x, y)", "top(x, y)", "ceil(x, y)"],
        answer: "Math.max(x, y)"
    },
    {
        id: 18,
        question: "What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?",
        options: ["w2 = window.new(&quot;http://www.w3schools.com&quot;);", "w2 = window.open(&quot;http://www.w3schools.com&quot;);"],
        answer: "w2 = window.open(&quot;http://www.w3schools.com&quot;);"
    },
    {
        id: 19,
        question: "JavaScript is the same as Java.",
        options: ["true", "false"],
        answer: "false"
    },
    {
        id: 20,
        question: "How can you detect the client&rsquo;s browser name?",
        options: ["navigator.appName", "browser.name", "client.navName"],
        answer: "navigator.appName"
    },
    {
        id: 21,
        question: "Which event occurs when the user clicks on an HTML element?",
        options: ["onchange", "onclick", "onmouseclick", "onmouseover"],
        answer: "onclick"
    },
    {
        id: 22,
        question: "How do you declare a JavaScript variable?",
        options: ["var carName;", "variable carName;", "v carName;"],
        answer: "var carName;"
    },
    {
        id: 23,
        question: "Which operator is used to assign a value to a variable?",
        options: ["*", "-", "=", "x"],
        answer: "="
    },
    {
        id: 24,
        question: "What will the following code return: Boolean(10 &gt; 9)",
        options: ["NaN", "false", "true"],
        answer: "true"
    },
    {
        id: 25,
        question: "Is JavaScript case-sensitive?",
        options: ["No", "Yes"],
        answer: "Yes"
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
        
        // Update question text
        $('#question-number').html(question.id + '.');
        $('#question-text').html(question.question);
        
        // Clear and populate options
        $('#question-options').empty();
        question.options.forEach((option, index) => {
            const optionHTML = `
                <div class='option-block'>
                    <label class='clickable-option'>
                        <input type='radio' name='option' value='${option}'>
                        <span style='margin-left: 8px;'>${option}</span>
                    </label>
                </div>
            `;
            $('#question-options').append(optionHTML);
        });
        
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
            const radioInput = $(this).find('input[type=radio]');
            radioInput.prop('checked', true);
            Quiz.selectedOption = radioInput.val();
            
            // Visual feedback
            $('.clickable-option').css('background-color', 'transparent');
            $(this).css('background-color', '#e3f2fd');
        });

        // Handle keyboard selection
        $('#question-options').on('change', 'input[type=radio]', function() {
            Quiz.selectedOption = $(this).val();
            $('.clickable-option').css('background-color', 'transparent');
            $(this).closest('.clickable-option').css('background-color', '#e3f2fd');
        });

        // Next button
        $('#next-btn').click((e) => {
            e.preventDefault();
            this.saveAnswer();
            
            if (this.currentQuestion < quizData.length - 1) {
                this.currentQuestion++;
                this.selectedOption = null;
                this.displayQuestion();
            } else {
                this.showResults();
            }
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

    saveAnswer() {
        if (this.selectedOption) {
            // Sanitize user input
            const sanitized = this.selectedOption
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;");
            
            this.userAnswers[this.currentQuestion] = sanitized;
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
            
            resultHTML += `
                <div class="result-question">
                    <span>Q ${question.id}</span> ${question.question}
                </div>
                <div><b>Correct answer:</b> ${question.answer}</div>
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



