document.addEventListener("DOMContentLoaded", function() {
    loadLevel(1);
});

function loadLevel(level) {
    document.querySelectorAll('.game-container').forEach(function(el) {
        el.style.display = 'none';
    });
    document.getElementById('level-' + level).style.display = 'block';
}

function completeLevel(level) {
    showPopup(level);
}

function showPopup(level) {
    let popup = document.getElementById('popup');
    let image = document.getElementById('popup-image');
    let text = document.getElementById('popup-text');

    image.src = `surprise-${level}.jpg`; // Remplace par les chemins réels de tes images
    text.innerHTML = `Bravo mon amour, tu as terminé le niveau ${level} ! <br> Voici ta surprise !`;

    popup.style.display = 'block';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

function goToNextLevel() {
    closePopup();
    let nextLevel = parseInt(document.getElementById('popup-text').textContent.match(/\d+/)[0]) + 1;
    loadLevel(nextLevel);
}
