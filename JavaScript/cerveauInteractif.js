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

// declaration des boutons de fermeture de modale
let closeButtons = Array.from(document.getElementsByClassName('closeButton'));

// map liant le lobe cliquable a sa modale correspondante
let LobeAndsModals = new Map();
LobeAndsModals.set(LobeFrontal, LobeFrontalModal);
LobeAndsModals.set(LobeParietal, LobeParietalModal);
LobeAndsModals.set(LobeOcipital, LobeOcipitalModal);
LobeAndsModals.set(LobeTemporal, LobeTemporalModal);
LobeAndsModals.set(Cervelet, CerveletModal);

// fonction faisant disparaitre toure les modales
function ModalsInactive () {
    LobeAndsModals.forEach((Modal) => {
        Modal.classList.remove('active');
    })
    // retirer le focus quand on ferme les modales
    document.activeElement.blur();
}

// fonction faisant apparaitre la modal de l'element
function ModalActive (Modal) {
    Modal.classList.add('active');
}

// fonction qui permet laffichage d'une modal si son lobe est cliqué
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

// fonction de fermeture des modales au clic du bouton
closeButtons.forEach( closeButton => {
    closeButton.addEventListener('click', function() {
        ModalsInactive();
    })
})

// fonction de fermeture des modales quand on appuie sur echap
document.addEventListener("keydown", function(e) {
    if (e.key === "Escape") {
        ModalsInactive();
    }
});