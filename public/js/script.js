// jeu de dé
import { Game } from './moduleGame.js';

const formModal = new bootstrap.Modal(document.getElementById('formModal'));
const winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'));
const form = document.getElementById('newGameForm');  
const rollDiceButton = document.getElementById('rollDice');
const holdbutton = document.getElementById('hold');

let newGame = new Game();

// Create the Game and add Players name
form.addEventListener('submit', (event)=>{
  event.preventDefault();  
  newGame.setPlayerOne(form.playerOneInput.value);
  newGame.setPlayerTwo(form.playerTwoInput.value);  
  newGame.status = 'inGame';
  newGame.newGame();

  formModal.toggle();
  document.getElementById('playerOneName').innerText = newGame.playerOne.name;
  document.getElementById('playerTwoName').innerText = newGame.playerTwo.name;
  randomFirstPlayer(newGame);
  activateButtons([rollDiceButton, holdbutton]);
})  

// Update scores
document.addEventListener('scoreEvent', (event)=> {
  const alias = event.detail.alias;
  const updateScore = event.detail.name;
  const divToUpdate = alias + updateScore;
  
  const scoreToDisplay = eval('newGame.' + alias + '.' + updateScore.toLowerCase());  
  
  document.getElementById(divToUpdate).innerText = scoreToDisplay;      
})

// Display winner
document.addEventListener('winnerEvent', () => {  
  disableButtons([rollDiceButton, holdbutton]);
  
  document.getElementById('congratulation').innerText = `Félicitations ${newGame.player().name}, vous avez gagné !`;
  winnerModal.show();
  newGame.status = 'outOfGame';
})

// Display active player
document.addEventListener('turnEvent', (event) => {  
  displayActivePlayer(event);
})

// Add dice score after the end of dice animation
let statusAnimation;
document.addEventListener('diceAnimation', (event) => {    
    if(event.detail.status === "startAnimation"){
      disableButtons([rollDiceButton, holdbutton]);
      statusAnimation = 'disabled';
    }
    else if (event.detail.status === "endAnimation"){
      activateButtons([rollDiceButton, holdbutton]);
      newGame.play(event.detail.target);
      statusAnimation = 'enabled';
    }
  })

// Add a green things to show the active player and remove for inactive player
let displayActivePlayer = (event) => {
  const id = event.detail.alias + 'RoundBackground';
  const idPlayer = event.detail.alias + 'Name';
  if(event.detail.name === 'isTurn'){
    document.getElementById(id).classList.add('active');
    document.getElementById(idPlayer).classList.add('activePlayer');

  }
  else{
    document.getElementById(id).classList.remove('active');
    document.getElementById(idPlayer).classList.remove('activePlayer');
  }
}

// choose the first player with a randomizer
let randomFirstPlayer = (newGame) => {
  let random = Math.floor(Math.random()*2);
  if(random == 0){
    newGame.playerOne.Start();
  }
  else{
    newGame.playerTwo.Start();
  }
}

// roll the dice only if the Game.status is inGame

  rollDiceButton.addEventListener('click', () => {    
    if(newGame.status === 'inGame' && statusAnimation !== "disabled"){      
      newGame.dice.play(); 
    }    
  })

// hold the score, the button is active only if hold > 0 and Game.status is inGame

  holdbutton.addEventListener('click', () => {  
    if(newGame.status === 'inGame' && newGame.player().round > 0 && statusAnimation !== 'disabled'){      
      newGame.hold();
    }
  })  


// Disactivate buttons by CSS attributes
let disableButtons = (arrayElements) => {
  arrayElements.forEach(element => {
    element.setAttribute('disabled', true);
  });    
}

let activateButtons = (arrayElements) => {
  arrayElements.forEach(element => {
    element.removeAttribute('disabled')
  });  
}