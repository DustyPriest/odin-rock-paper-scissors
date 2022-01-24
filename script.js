// Script for rock-paper-scissors game
// Created as part of learning on The Odin Project
// Author: DustyPriest 24/01/2022

// GLOBAL VARIABLES
const ROUNDS = 5;
let playerScore = 0,
  computerScore = 0;

// Game manager - Plays ROUNDS rounds
function game() {
  console.log('ROCK, PAPER, SCISSORS!');

  for (let i = 1, playerSelection; i <= ROUNDS; i++) {
    playerSelection = prompt('Rock, Paper, Scissors! Which will you choose? ');

    console.log(playRound(playerSelection, computerPlay()));
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
}

// Generate computer move
function computerPlay() {
  let move = Math.floor(Math.random() * 3);

  switch (move) {
    case 0:
      console.log('Computer picked Rock');
      return 'Rock';
    case 1:
      console.log('Computer picked Paper');
      return 'Paper';
    case 2:
      console.log('Computer picked Scissors');
      return 'Scissors';
  }
}

// Evaluate computer move vs player move
function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase().trim();
  computerSelection = computerSelection.toLowerCase().trim();

  if (playerSelection === 'rock') {
    switch (computerSelection) {
      case 'rock':
        return 'You Tie! Rock vs Rock';
      case 'paper':
        computerScore++;
        return 'You Lose! Paper beats Rock';
      case 'scissors':
        playerScore++;
        return 'You Win! Rock beats Scissors';
    }
  } else if (playerSelection === 'paper') {
    switch (computerSelection) {
      case 'rock':
        playerScore++;
        return 'You Win! Paper beats Rock';
      case 'paper':
        return 'You Tie! Paper vs Paper';
      case 'scissors':
        computerScore++;
        return 'You Lose! Scissors beat Paper';
    }
  } else {
    switch (computerSelection) {
      case 'rock':
        computerScore++;
        return 'You Lose! Rock beats Scissors';
      case 'paper':
        playerScore++;
        return 'You Win! Scissors beat Paper';
      case 'scissors':
        return 'You Tie! Scissors vs Scissors';
    }
  }
}

game();
