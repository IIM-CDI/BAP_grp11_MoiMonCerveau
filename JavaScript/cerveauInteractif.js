// declaration des diferents lobe clockable du cerveau
let LobeFrontal = document.getElementById('LobeFrontal');
let LobeParietal = document.getElementById('LobeParietal');
let LobeOcipital = document.getElementById('LobeOcipital');
let LobeTemporal = document.getElementById('LobeTemporal');
let Cervelet = document.getElementById('Cervelet');

// declaration des differentes modales d'information sur les lobes
let LobeFrontalModal = document.getElementById('LobeFrontalModal');
let LobeParietalModal = document.getElementById('LobeParietalModal');
let LobeOcipitalModal = document.getElementById('LobeOcipitalModal');
let LobeTemporalModal = document.getElementById('LobeTemporalModal');
let CerveletModal = document.getElementById('CerveletModal');

// map liant le lobe cliquable a sa modale correspondante
let LobeAndsModals = new Map();
LobeAndsModals.set(LobeFrontal, LobeFrontalModal);
LobeAndsModals.set(LobeParietal, LobeParietalModal);
LobeAndsModals.set(LobeOcipital, LobeOcipitalModal);
LobeAndsModals.set(LobeTemporal, LobeTemporalModal);
LobeAndsModals.set(Cervelet, CerveletModal);

// zone cliquable precedent le cerveau (pour retourner la en nav clavier quand on presse echap)
let AvantCerveau = document.getElementById('AvantCerveau');

// declaration des boutons de fermeture de modale
let closeButtons = Array.from(document.getElementsByClassName('closeButton'));

// fontion chargant le contenu des modales et leur depuis le Json
async function getModal() {
    let reponse = await fetch("Json/modales.json");
    let JsonModalesContenu = await reponse.json();
    let modalesContenu = JsonModalesContenu.modalesContenu

    LobeAndsModals.forEach((Modal) => {
        modalesContenu.forEach((modaleContenu) => {
            if (modaleContenu.id == Modal.id) {
                Modal.innerHTML += 
                `<span class="closeButton">X</span>
                <h3>${modaleContenu.titre}</h3>
                <p>${modaleContenu.description}</p>`;        
            }
        })
    })

    // actualisation des boutons de fermetures et evenement de fermure a leur clique
    closeButtons = Array.from(document.getElementsByClassName('closeButton'));
    closeButtons.forEach( closeButton => {
    closeButton.addEventListener('click', function() {
        ModalsInactive();
    })
})
}
getModal();


// fonction d'apparition et disparition des modales
function ModalsInactive () {
    LobeAndsModals.forEach((Modal) => {
        Modal.classList.remove('active');
    })
}
function ModalActive (Modal) {
    Modal.classList.add('active');
}

// fonction qui permet l'affichage d'une modal si son lobe est cliqué
LobeAndsModals.forEach((Modal, Lobe) => {
    Lobe.addEventListener('click', function() {
        if (Modal.classList.contains('active')) {
            ModalsInactive();
        } else {
            ModalsInactive();
            ModalActive(Modal);
        }
    })
})

// fonction de fermeture des modales (echap)
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        ModalsInactive();
        // remettre le focus avant le cerveau quand on ferme les modales par echap
        AvantCerveau.focus();
    }
});