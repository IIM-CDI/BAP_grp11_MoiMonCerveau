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
    console.log("Données remplie dans le formulaire")

    NomValue = NomChamp.value;
    console.log("Nom : " + NomValue);

    PrenomValue = PrenomChamp.value;
    console.log("Prenom : " + PrenomValue);

    EmailValue = EmailChamp.value;
    if (EmailValue) {
        console.log("Email : " + EmailValue);
        EmailError.innerHTML = "";
    } else {
        console.log("Email : " + "Pas d'email renseigné");
        EmailError.innerHTML = "Pas d'email renseigné";
    }

    AutorisationValue = AutorisationChamp.checked;
    if (AutorisationValue == true) {
        console.log("Autorisation : " + AutorisationValue)
        AutorisationError.innerHTML = "";
    } else {
        console.log("Autorisation : " + "Vous n'avez pas accepter de recevoir la NewsLetter par mail");
        AutorisationError.innerHTML = "Vous n'avez pas accepter de recevoir la NewsLetter par mail";
    }

})