const p1 = {
    score: 0,
    button: document.querySelector('#player_one_button'),
    display: document.querySelector('#player_one_score')
}
const p2 = {
    score: 0,
    button: document.querySelector('#player_two_button'),
    display: document.querySelector('#player_two_score')
}
const resetButton = document.querySelector('#reset');
const winningScoreSelector = document.querySelector('#playto');
let winningScore = 3;
let p1Score = 0;
let p2Score = 0;
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;

    }


}

p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
});
p2.button.addEventListener('click', function () {
    updateScores(p2, p1)
});
winningScoreSelector.addEventListener('change', function () {
    reset();
    winningScore = parseInt(this.value);
});
resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = p.score;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

