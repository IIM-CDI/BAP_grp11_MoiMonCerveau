let LobeFrontal = document.getElementById('LobeFrontal');
let LobeParietal = document.getElementById('LobeParietal');

let LobeFrontalModal = document.getElementById('LobeFrontalModal');
let LobeParietalModal = document.getElementById('LobeParietalModal');
      
function OtherModalsInactive () {
    LobeFrontalModal.classList.remove('active');
    LobeFrontalModal.classList.add('inactive');

    LobeParietalModal.classList.remove('active');
    LobeParietalModal.classList.add('inactive');
}
function ModalActive (Modal) {
    Modal.classList.remove('inactive');
    Modal.classList.add('active');
}

LobeFrontal.addEventListener('click', () => {
    
    if (LobeFrontalModal.classList.contains('active')) {
        OtherModalsInactive();
    } else {
        OtherModalsInactive();
        ModalActive(LobeFrontalModal);
    }
})

LobeParietal.addEventListener('click', () => {

    if (LobeParietalModal.classList.contains('active')) {
        OtherModalsInactive();
    } else {
        OtherModalsInactive();
        ModalActive(LobeParietalModal);
    }
})



