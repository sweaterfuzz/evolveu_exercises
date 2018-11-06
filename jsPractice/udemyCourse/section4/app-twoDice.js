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
*/

var scores, roundScore, activePlayer, gamePlaying, winningScore; 

winningScore = 10;
init();


//Anonymous function:
document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        // generate a random number
        var dice1 = Math.floor(Math.random()*6)+1;
        var dice2 = Math.floor(Math.random()*6)+1;

        // display result
        var dice1Dom = document.querySelector('.dice1')
        dice1Dom.style.display = 'block';
        dice1Dom.src = 'dice-'+dice1+'.png';

        var dice2Dom = document.querySelector('.dice2')
        dice2Dom.style.display = 'block';
        dice2Dom.src = 'dice-'+dice2+'.png';

        // update the round score if rolled number was not a 1
        if (dice1 !== 1 && dice2 !== 1) {
            // add score
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        };
    }
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
            document.querySelector('.dice1').style.display = 'none';
            document.querySelector('.dice2').style.display = 'none';
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
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;

    // accessing and assigning a css element - eg class="dice", style="display: none;"
    document.querySelector('.dice1').style.display = 'none';
    document.querySelector('.dice2').style.display = 'none';

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