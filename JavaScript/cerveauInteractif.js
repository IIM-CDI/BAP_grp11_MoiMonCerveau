let LobeFrontal = document.getElementById('LobeFrontal');
let LobeParietal = document.getElementById('LobeParietal');

let LobeFrontalModal = document.getElementById('LobeFrontalModal');
let LobeParietalModal = document.getElementById('LobeParietalModal');

let LobeAndsModals = new Map();
LobeAndsModals.set(LobeFrontal, LobeFrontalModal);
LobeAndsModals.set(LobeParietal, LobeParietalModal);
      
function ModalsInactive () {
    LobeAndsModals.forEach((Modal) => {
        Modal.classList.remove('active');
        Modal.classList.add('inactive');
    })
}

function ModalActive (Modal) {
    Modal.classList.remove('inactive');
    Modal.classList.add('active');
}

LobeAndsModals.forEach((Modal, Lobe) => {
    Lobe.addEventListener('click', function() {
        if (Modal.classList.contains('active')) {
            ModalsInactive();
        } else {
            ModalsInactive();
            ModalActive(Modal);
        }
        console.log(Modal);
    })
})