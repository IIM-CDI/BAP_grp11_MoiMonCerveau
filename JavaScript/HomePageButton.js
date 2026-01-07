let quizBouton = document.getElementById('quizBouton');
let miniJeuBouton = document.getElementById('miniJeuBouton');

quizBouton.addEventListener('click', function(){
    window.open('/pages/quiz/quiz.html','_self');
})

miniJeuBouton.addEventListener('click', function(){
    window.open('/pages/miniJeu/miniJeu.html','_self');
})