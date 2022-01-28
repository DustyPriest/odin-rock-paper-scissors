// Script for rock-paper-scissors game
// Created as part of learning on The Odin Project
// Author: DustyPriest 24/01/2022

// GLOBAL VARIABLES
let playerScore = 0,
  compScore = 0,
  currRound = 1;

const currRoundEl = document.querySelector('.round');
const playerScoreEl = document.querySelector('#player-score');
const compScoreEl = document.querySelector('#comp-score');
const options = document.querySelectorAll('.btn');
const commentary = document.querySelector('.commentary');

options.forEach((option) => option.addEventListener('click', pickOption));

function pickOption(e) {
  playRound(e.target.id);
  updateScores();
  checkWinner();
}

// Updates DOM
function updateScores() {
  playerScoreEl.textContent = playerScore;
  compScoreEl.textContent = compScore;
  currRoundEl.textContent = `Round: ${currRound}`;
}

// Check for win state
function checkWinner() {
  if (playerScore === 5 || compScore === 5) {
    alert(`${playerScore === 5 ? 'Player' : 'Computer'} wins!`);
    resetGame();
  }
}

function resetGame() {
  playerScore = 0;
  compScore = 0;
  currRound = 0;
  updateScores();
  commentary.textContent = '';
}

// Generate computer move
function computerPlay() {
  let move = Math.floor(Math.random() * 3);

  switch (move) {
    case 0:
      // console.log('Computer picked Rock');
      return 'rock';
    case 1:
      // console.log('Computer picked Paper');
      return 'paper';
    case 2:
      // console.log('Computer picked Scissors');
      return 'scissors';
  }
}

// Evaluate computer move vs player move
function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerPlay();

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        commentary.textContent = 'Tie! Rock vs Rock';
        break;
      case 'paper':
        compScore++;
        commentary.textContent = 'You Lose! Paper beats Rock';
        break;
      case 'scissors':
        playerScore++;
        commentary.textContent = 'You Win! Rock beats Scissors';
        break;
      default:
        alert('Oh no! Something went wrong.');
        resetGame();
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        playerScore++;
        commentary.textContent = 'You Win! Paper beats Rock';
        break;
      case 'paper':
        commentary.textContent = 'You Tie! Paper vs Paper';
        break;
      case 'scissors':
        compScore++;
        commentary.textContent = 'You Lose! Scissors beat Paper';
        break;
      default:
        alert('Oh no! Something went wrong.');
        resetGame();
    }
  } else {
    switch (computerSelection) {
      case 'rock':
        compScore++;
        commentary.textContent = 'You Lose! Rock beats Scissors';
        break;
      case 'paper':
        playerScore++;
        commentary.textContent = 'You Win! Scissors beat Paper';
        break;
      case 'scissors':
        commentary.textContent = 'You Tie! Scissors vs Scissors';
        break;
      default:
        alert('Oh no! Something went wrong.');
        resetGame();
    }
  }
  currRound++;
}

// Game manager - Plays ROUNDS rounds
/* function game() {
  console.log('ROCK, PAPER, SCISSORS!');

  for (let i = 1, playerSelection; i <= ROUNDS; i++) {
    playerSelection = prompt('Rock, Paper, Scissors! Which will you choose? ');

    console.log(playRound(playerSelection));
    console.log(
      `Round ${i} Results:\nPlayer: ${playerScore} Computer: ${computerScore}`
    );
  }

  if (playerScore > computerScore) {
    alert('Congratulations! You have won the game!');
  } else if (playerScore < computerScore) {
    alert('Oh no! You lost to the computer!');
  } else {
    alert('A TIE?!?! Incredible!');
  }
 }*/

// game();
