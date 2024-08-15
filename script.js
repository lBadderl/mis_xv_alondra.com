//ventana emergente
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const noMusicButton = document.getElementById('noMusic');
    const playMusicButton = document.getElementById('playMusic');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const toggleMusicButton = document.getElementById('toggleMusicButton');
    const toggleMusicIcon = document.getElementById('toggleMusicIcon');

    // Bajar el volumen de la canción
    backgroundMusic.volume = 0.5;

    function fadeOutPopup() {
        popup.classList.add('fadeOut');
        setTimeout(function() {
            popup.style.display = 'none';
        }, 200); // 500ms corresponde al tiempo de transición
    }

    function fadeInToggleButton() {
        toggleMusicButton.style.display = 'block';
        setTimeout(function() {
            toggleMusicButton.style.opacity = 1;
        }, 10); // Pequeño retraso para activar la transición de opacidad
    }

    noMusicButton.addEventListener('click', function () {
        fadeOutPopup();
        setTimeout(function() {
            toggleMusicIcon.src = 'imagenes/sonido activado.png';
            fadeInToggleButton();
        }, 500);
    });

    playMusicButton.addEventListener('click', function () {
        fadeOutPopup();
        setTimeout(function() {
            backgroundMusic.play();
            toggleMusicIcon.src = 'imagenes/sonido desactivado.png';
            fadeInToggleButton();
        }, 500);
    });

    toggleMusicButton.addEventListener('click', function () {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            toggleMusicIcon.src = 'imagenes/sonido desactivado.png';
        } else {
            backgroundMusic.pause();
            toggleMusicIcon.src = 'imagenes/sonido activado.png';
        }
    });
});

//funcion para abrir en una nueva pagina
function newTab(url) {
    window.open(url, '_blank');
}
