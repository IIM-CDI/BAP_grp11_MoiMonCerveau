let LobeFrontal = document.getElementById('LobeFrontal');
let LobeParietal = document.getElementById('LobeParietal');

let LobeFrontalModal = document.getElementById('LobeFrontalModal');
let LobeParietalModal = document.getElementById('LobeParietalModal');
           
LobeFrontal.addEventListener('click', () => {
    if (LobeFrontalModal.classList.contains('active')) {

        LobeFrontalModal.classList.remove('active');
        LobeFrontalModal.classList.add('inactive');

    } else {

        LobeParietalModal.classList.remove('active');
        LobeParietalModal.classList.add('inactive');

        LobeFrontalModal.classList.remove('inactive');
        LobeFrontalModal.classList.add('active');
    }
})

LobeParietal.addEventListener('click', () => {

    if (LobeParietalModal.classList.contains('active')) {

        LobeParietalModal.classList.remove('active');
        LobeParietalModal.classList.add('inactive');


    } else {

        LobeFrontalModal.classList.remove('active');
        LobeFrontalModal.classList.add('inactive');

        LobeParietalModal.classList.remove('inactive');
        LobeParietalModal.classList.add('active');
    }
})