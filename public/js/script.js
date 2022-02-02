// jeu de dé
import * as GAME from './moduleGame.js';

const formModal = new bootstrap.Modal(document.getElementById('formModal'));
const winnerModal = new bootstrap.Modal(document.getElementById('winnerModal'));
const form = document.getElementById('newGameForm');  
const rollDiceButton = document.getElementById('rollDice');
const holdbutton = document.getElementById('hold');

let newGame = new GAME.Game();

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

document.addEventListener('scoreEvent', (event)=> {
  const alias = event.detail.alias;
  const updateScore = event.detail.name;
  const divToUpdate = alias + updateScore;

  // new score to display
  const scoreToDisplay = eval('newGame.' + alias + '.' + updateScore.toLowerCase());  
  
  // display score
  document.getElementById(divToUpdate).innerText = scoreToDisplay;      
})

document.addEventListener('winnerEvent', () => {
  console.log(`le gagnant est ${newGame.player().name}`);
  disableButtons([rollDiceButton, holdbutton]);
  
  document.getElementById('congratulation').innerText = `Félicitations ${newGame.player().name}, vous avez gagné !`;
  winnerModal.show();
  newGame.status = 'outOfGame';
})

document.addEventListener('turnEvent', (event) => {  
  displayActivePlayer(event);
})

document.addEventListener('endAnimation', (event) => {
  console.log('event : ' + event.detail.target)
  newGame.play(event.detail.target);
})

function displayActivePlayer(event){
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

function randomFirstPlayer(newGame){
  let random = Math.floor(Math.random()*2);
  if(random == 0){
    newGame.playerOne.Start();
  }
  else{
    newGame.playerTwo.Start();
  }
}



rollDiceButton.addEventListener('click', () => {
  if(newGame.status !== 'inGame'){
    console.log('pas de partie en cours...')
  }
  else{
    newGame.dice.play();
  }
})


holdbutton.addEventListener('click', () => {  
  console.log(typeof newGame);
  if(newGame.status !== 'inGame' || newGame.player().round <= 0){
    console.log('rien a hold')
  }
  else{
    newGame.hold();
  }
})

// Bloquer les boutons
// désactiver des boutons via Css
function disableButtons(arrayElements){
  arrayElements.forEach(element => {
    element.setAttribute('disabled', true);
  });
}
function activateButtons(arrayElements){
  arrayElements.forEach(element => {
    element.removeAttribute('disabled')
  });
}
// disableButtons([rollDiceButton, holdbutton]);

// essai de promises ----------------------------------------

