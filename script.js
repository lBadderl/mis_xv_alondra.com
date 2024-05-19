//ventana emergente
document.addEventListener('DOMContentLoaded', function () {
    const popup = document.getElementById('popup');
    const noMusicButton = document.getElementById('noMusic');
    const playMusicButton = document.getElementById('playMusic');
    const backgroundMusic = document.getElementById('backgroundMusic');
    const toggleMusicButton = document.getElementById('toggleMusicButton');
    const toggleMusicIcon = document.getElementById('toggleMusicIcon');

    // Bajar el volumen de la canción
    backgroundMusic.volume = 0.1; // Valores entre 0.0 (silencio) y 1.0 (volumen máximo)

    noMusicButton.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    playMusicButton.addEventListener('click', function () {
        popup.style.display = 'none';
        backgroundMusic.play();
        toggleMusicIcon.src = 'imagenes/sonido desactivado.png';
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