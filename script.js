// Afficher un message lorsque le bouton est cliqué
document.getElementById('message-button').addEventListener('click', function() {
    alert('Merci de m\'avoir cliqué !');
    document.getElementById('message').textContent = "merci d'avoir cliqué j'espere etre retenu pour le formation merci d'avance !";
});

// Afficher la date actuelle
function displayDate() {
    const today = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('current-date').textContent = today.toLocaleDateString('fr-FR', options);
}

// Appeler la fonction au chargement de la page
window.onload = displayDate;

// Ajouter un popup personnalisé
document.getElementById('message-button').addEventListener('click', function() {
    const popup = confirm('Voulez-vous savoir plus sur moi ?');
    if (popup) {
        alert('Je suis ravi(e) que vous soyez curieux(se) !');
    }
})
// Initialisation du jeu
let secretNumber = Math.floor(Math.random() * 100) + 1; // Génère un nombre aléatoire entre 1 et 100
let attempts = 0;

// Fonction pour afficher un message
function showMessage(message, color) {
    const resultMessage = document.getElementById('result-message');
    resultMessage.textContent = message;
    resultMessage.style.color = color;
}

// Écouteur d'événement pour valider une réponse
document.getElementById('submit-guess').addEventListener('click', function () {
    const guessInput = document.getElementById('guess-input');
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        showMessage('Veuillez entrer un nombre valide entre 1 et 100.', 'red');
        return;
    }

    attempts++;
    if (userGuess === secretNumber) {
        showMessage(`Félicitations ! Vous avez deviné le nombre en ${attempts} essais.`, 'green');
        document.getElementById('restart-game').style.display = 'inline-block';
        document.getElementById('submit-guess').disabled = true;
        guessInput.disabled = true;
    } else if (userGuess < secretNumber) {
        showMessage('Plus grand ! Essayez encore.', 'blue');
    } else {
        showMessage('Plus petit ! Essayez encore.', 'blue');
    }
});

// Réinitialiser le jeu
document.getElementById('restart-game').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    showMessage('Nouveau jeu commencé. Devinez un nombre entre 1 et 100.', 'black');
    document.getElementById('guess-input').value = '';
    document.getElementById('restart-game').style.display = 'none';
    document.getElementById('submit-guess').disabled = false;
    document.getElementById('guess-input').disabled = false;
    document.getElementById('guess-input').focus();
});