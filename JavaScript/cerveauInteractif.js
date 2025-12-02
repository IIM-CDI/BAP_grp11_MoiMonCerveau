// declaration des diferents lobe clockable du cerveau
let LobeFrontal = document.getElementById('LobeFrontal');
let LobeParietal = document.getElementById('LobeParietal');

// declaration des differentes modales d'information sur les lobes
let LobeFrontalModal = document.getElementById('LobeFrontalModal');
let LobeParietalModal = document.getElementById('LobeParietalModal');

// declaration des boutons de fermeture de modale
let closeButtons = Array.from(document.getElementsByClassName('closeButton'));

// map liant le lobe cliquable a sa modale correspondante
let LobeAndsModals = new Map();
LobeAndsModals.set(LobeFrontal, LobeFrontalModal);
LobeAndsModals.set(LobeParietal, LobeParietalModal);

// fonction faisant disparaitre toure les modales
function ModalsInactive () {
    LobeAndsModals.forEach((Modal) => {
        Modal.classList.remove('active');
        Modal.classList.add('inactive');
    })
}

// fonction faisant apparaitre la modal de l'element
function ModalActive (Modal) {
    Modal.classList.remove('inactive');
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

// fonction de fermeture des modales
closeButtons.forEach( closeButton => {
    closeButton.addEventListener('click', function() {
        ModalsInactive();
    })
})