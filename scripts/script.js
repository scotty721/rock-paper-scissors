function randomValueFromArray(array){
    const random = Math.floor(Math.random()*array.length);
    return array[random];
  }

const playerSubmit = document.querySelector('.playerSubmit');
const guessField = document.querySelector('.guessField');
guessField.focus();

function computerPlay(){
    const computerOptions = ['scissors', 'paper', 'rock'];
    let computerSelection = randomValueFromArray(computerOptions);
    let playerSelection = (guessField.value);
    playerSelection = String(playerSelection);
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === 'scissors' || playerSelection === 'paper' || playerSelection === 'rock') {
        alert ( 'Let us see who is superior!' );
    } else {
        alert ( 'I do not recognise this material, make another selection.' );
    }
    
    if (playerSelection === computerSelection) {
        alert ( 'We guessed the same. Did you copy me?' );
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        alert ( 'You Win! Scissors beats Paper!' );
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        alert ( 'I win! Rock beats Scissors!' );
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        alert ( 'You Win! Paper beats Rock!' );
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        alert ( 'I Win! Scissors beats Paper!' );
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        alert ( 'You Win! Rock beats Scissors!');
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        alert ( 'I Win! Paper beats Rock!')
    }
}
playerSubmit.addEventListener('click', computerPlay);