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

//cuenta regresiva
//variables
const $days = document.getElementById('days'),
$hours = document.getElementById('hours'),
$minutes = document.getElementById('minutes'),
$seconds = document.getElementById('seconds'),
$finalMessage = document.querySelector('.final-sms');

//fecha de interes a futuro (9 21, 2024 16:45:00) (8 19, 2024 17:58:00)
const countdownDate = new Date('9 21, 2024 16:45:00').getTime();

let interval = setInterval(function() {
    //fecha actual en milisegundos
    const now = new Date().getTime();

    let distance = countdownDate - now;

    //Obtencion de los dias
    let days = Math.floor(distance / (1000 * 60 * 60 *24));
    //Obtencion de las horas
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //Obtencion de los minutos
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //Obtencion de los segundos
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));
    
    //Mostrar los resultados
    $days.innerHTML = days;
    $hours.innerHTML = hours;
    $minutes.innerHTML = minutes;
    $seconds.innerHTML = ('0' + seconds).slice(-2);

    if(distance < 0){
        clearInterval(interval);
        $finalMessage.style.transform = 'translateY(0)';
    }
}, 1000);

//funcion para abrir en una nueva pagina
function newTab(url) {
    window.open(url, '_blank');
}
