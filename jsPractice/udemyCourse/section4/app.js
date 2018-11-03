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

var scores, roundScore, activePlayer; 

scores = [0,0];
roundScore = 0;
activePlayer = 0;

// similar to css selector - find id in html, #id
// document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-' + activePlayer).textContent = dice; // places plain text
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '<em>'; // places HTML

// accessing and assigning an html element by id
// var x = document.querySelector('#score-0').textContent;
// console.log(x);

// accessing and assigning a css element - eg class="dice", style="display: none;"
document.querySelector('.dice').style.display = 'none';

// a faster way to access html elements
document.getElementById('score-0').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-1').textContent = '0';

//Anonymous function:
document.querySelector('.btn-roll').addEventListener('click', function() {
    // generate a random number
    var dice = Math.floor(Math.random()*6)+1;

    // display result
    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-'+dice+'.png';

    // update the round score if rolled number was not a 1
    if (dice !== 1) {
        // add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
        nextPlayer();
    };
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // add current score to global score
    scores[activePlayer] += roundScore;
    // update UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // check if player won the game
    if (scores[activePlayer] >= 10) {
        document.querySelector('#name-'+activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    } else {
        // change active player
        nextPlayer();
    }
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
    document.querySelector('.dice').style.display = 'none';
};