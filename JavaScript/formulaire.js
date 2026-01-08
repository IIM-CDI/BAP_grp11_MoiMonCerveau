// formulaire
let formulaire = document.getElementById('NewsletterFormulaire');

// Champs du formulaire
let NomChamp = document.getElementById('Nom');
let NomValue = NomChamp.value;

let PrenomChamp = document.getElementById('Prenom');
let PrenomValue = PrenomChamp.value;

let EmailChamp = document.getElementById('Email');
let EmailValue = EmailChamp.value;

let AutorisationChamp = document.getElementById('Autorisation');
let AutorisationValue = AutorisationChamp.checked;

// zones pour message d'erreur
let EmailError = document.getElementById('EmailError');
let AutorisationError = document.getElementById('AutorisationError');

formulaire.addEventListener ('submit', function(form) {
    form.preventDefault();

    NomValue = NomChamp.value;
    console.log(NomValue);

    PrenomValue = PrenomChamp.value;
    console.log(PrenomValue);

    EmailValue = EmailChamp.value;
    if (EmailValue) {
        console.log(EmailValue);
        EmailError.innerHTML = "";
    } else {
        console.log("Pas d'email renseigné");
        EmailError.innerHTML = "Pas d'email renseigné";
    }

    AutorisationValue = AutorisationChamp.checked;
    if (AutorisationValue == true) {
        console.log(AutorisationValue)
        AutorisationError.innerHTML = "";
    } else {
        console.log("Vous n'avez pas accepter de recevoir la NewsLetter par mail");
        AutorisationError.innerHTML = "Vous n'avez pas accepter de recevoir la NewsLetter par mail";
    }

})