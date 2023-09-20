document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateUp');
        setTimeout(() => {
            dino.classList.remove('animateUp')
        }, 3000);
    }
    if (e.keyCode == 39) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = dinoX + 112 + "px";
        dino.classList.add('animateMove');
        setTimeout(() => {
            dino.classList.remove('animateMove')
        }, 600);

    }
    if (e.keyCode == 37) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.style.left = (dinoX - 112) + "px";
        dino.classList.add('animateMove');
        setTimeout(() => {
            dino.classList.remove('animateMove')
        }, 600);
    }

    if (e.keyCode == 40) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.classList.add('animateDown');
        setTimeout(() => {
            dino.classList.remove('animateDown')
        }, 600);
    }

    if (e.keyCode == 32) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.classList.add('animateAttack');
        setTimeout(() => {
            dino.classList.remove('animateAttack')
        }, 2000);
    }

    if (e.keyCode == 97) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.classList.add('animateTop');
        setTimeout(() => {
            dino.classList.remove('animateTop')
        }, 2000);
    }

    if (e.keyCode == 98) {
        dino = document.querySelector('.dino');
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
        dino.classList.add('animateFlip');
        setTimeout(() => {
            dino.classList.remove('animateFlip')
        }, 3000);
    }
}
