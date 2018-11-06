/*
GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as they whishes. 
    Each result gets added to their ROUND score
- BUT, if the player rolls a 1, their ROUND score gets lost. 
    After that, it's the next player's turn
- The player can choose to 'Hold', which means that their ROUND score gets added 
    to their GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
- extension: entire score is lost if two 6's are rolled consecutively
*/

var scores, roundScore, activePlayer, gamePlaying, winningScore, prevRoll; 

winningScore = 20;
init();


//Anonymous function:
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // generate a random number
        //var dice = Math.floor(Math.random()*6)+1; 
        //var dice = 6;
        var dice;
        var fakeDice = Math.floor(Math.random()*6)+1;
        fakeDice <= 3 ? dice = 6 : dice = 5;

        // display result
        var diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block';
        diceDom.src = 'dice-'+dice+'.png';

        // update the round score if rolled number was not a 1
        if (dice === 6 && prevRoll === 6) {
            scores[activePlayer] = 0;
            document.getElementById('score-'+activePlayer).textContent = scores[activePlayer];
            nextPlayer();
        } else if (dice !== 1) { 
            // add score
            roundScore += dice;
            prevRoll = dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        };
    };
    console.log(prevRoll, scores);
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // add current score to global score
        scores[activePlayer] += roundScore;
        // update UI 
        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        // check if player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            // change active player
            nextPlayer();
        }
    };
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    prevRoll = 0;
    // zero-out scores
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    // change css class to indicate a change in active player
    // one-way change: 
    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    // bi-directional change:
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // hide the dice again
    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // accessing and assigning a css element - eg class="dice", style="display: none;"
    document.querySelector('.dice').style.display = 'none';

    // a faster way to access html elements
    document.getElementById('score-0').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
};

document.getElementById("getNum").addEventListener('click', function() {
    var custScore = document.getElementById('custScore');
    winningScore = parseInt(custScore.elements[0].value); 
});