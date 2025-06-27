document.addEventListener('DOMContentLoaded', function () {
    const sonidos = [
        'ford-gt.mp3',
        'policia.mp3',
        'puerta.mp3',
        'vidrio.mp3'
    ];

    const botones = document.querySelectorAll('.boton-sonido');
    let audioActual = null;

    botones.forEach((boton, i) => {
        boton.addEventListener('click', () => {
            if (audioActual) {
                audioActual.pause();
                audioActual.currentTime = 0;
            }
            audioActual = new Audio(sonidos[i]);
            audioActual.play();
        });

        boton.addEventListener('mousedown', () => boton.style.opacity = '0.8');
        boton.addEventListener('mouseup', () => boton.style.opacity = '1');
        boton.addEventListener('mouseleave', () => boton.style.opacity = '1');
    });
});

