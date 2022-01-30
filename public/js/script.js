// jeu de dé

class Player{
  constructor(alias, name){
    this.name = name;     
    this.round = 0; // current round score
    this.global = 0; // global score        
    this.turn = false; // target the player who does play 
    this.alias = alias;
        
    this.roundScoreEvent = new CustomEvent('scoreEvent', {
      detail: {
        player: this.name,
        alias: this.alias,
        name: 'Round'
      }
    })
    this.globalScoreEvent = new CustomEvent('scoreEvent', {
      detail: {
        player: this.name,
        alias: this.alias,
        name: 'Global'
      }
    })
    this.isTurnEvent = new CustomEvent('turnEvent',{
      detail: {
        name: 'isTurn',
        player: this.name,
        alias: this.alias
      }
    });    
    this.isNotTurnEvent = new CustomEvent('turnEvent',{
      detail: {
        name: 'isNotTurn',
        player: this.name,
        alias: this.alias
      }
    });
  }
  setName(name){
    this.name = name;
  }

  getName(){
    return this.name;
  }
  Start(){
    this.setIsTurn();
    this.initRound();
  }
  setIsTurn(){
    this.turn = true;
    document.dispatchEvent(this.isTurnEvent);
  }
  setIsNotTurn(){
    this.turn = false;
    document.dispatchEvent(this.isNotTurnEvent);

  }

  initPlayer(){    
    this.global = 0;    
    this.setIsNotTurn();
    this.initRound();    
    document.dispatchEvent(this.globalScoreEvent);
  }
  
  initRound(){    
    this.round = 0;    
    document.dispatchEvent(this.roundScoreEvent);
  }

  // Add to the score 
  addToRound(dice){
    this.round += dice;
    document.dispatchEvent(this.roundScoreEvent);
    return this.round;
  }
  
  // "Hold" send ROUND to GLOBAL
  addRoundToGlobal(){
    this.global += this.round;        
    document.dispatchEvent(this.globalScoreEvent);
    return this.global;
  }
}

class Game{
  constructor(playerOne, playerTwo){
    this.playerOne = new Player('playerOne', playerOne);
    this.playerTwo = new Player('playerTwo', playerTwo);

    this.winnerAlert = new CustomEvent('winnerEvent')
  }
  
  // Start new Game
  newGame(){
    this.playerOne.initPlayer();
    this.playerTwo.initPlayer();    
  }
  rollDice(bool = false){     // cheatMode = true
    if(bool === true){
      return this.dice = 6;
    }
    this.dice = Math.floor(Math.random()*6)+1;    
    return this.dice;
  }

  play(){ 
    let dice = this.rollDice();
    if(dice === 1){
      console.log(dice);
      this.switchPlayer();
    }
    else{
      console.log(dice);
      this.player().addToRound(dice);
    }
  }
  // Display Winner
  winner(){
    if(this.playerOne.global >= 100){
      return this.playerOne.winner = true;
    }
    if(this.playerTwo.global >= 100){
      return this.playerTwo.winner = true;
    }
  }  
  player(){    
    if(this.playerOne.turn === true){
      return this.playerOne;
    }
    else{
      return this.playerTwo;
    }
  }
  switchPlayer(){
    if(this.playerOne.turn === true){
      console.log('this.playerOne.turn = ', this.playerOne.turn);
      this.playerOne.setIsNotTurn();
      this.playerTwo.initRound();
      this.playerTwo.setIsTurn();
    }
    else{
      this.playerOne.initRound();
      this.playerOne.setIsTurn();
      this.playerTwo.setIsNotTurn();
    }
  }
  hold(){
    this.player().addRoundToGlobal();
    if(this.player().global >= 100){
      document.dispatchEvent(this.winnerAlert);
      return 
    }
    this.switchPlayer();
  }
}

const formModal = new bootstrap.Modal(document.getElementById('formModal'));

const form = document.getElementById('newGameForm');  
  form.addEventListener('submit', (event)=>{
    event.preventDefault();            
    newGame = new Game(form.playerOneInput.value, form.playerTwoInput.value);    
    newGame.newGame();
    formModal.toggle();
    document.getElementById('playerOneName').innerText = newGame.playerOne.name;
    document.getElementById('playerTwoName').innerText = newGame.playerTwo.name;
    randomFirstPlayer(newGame);  
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
})

document.addEventListener('turnEvent', (event) => {  
  displayActivePlayer(event);
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

function randomFirstPlayer(Game){
  let random = Math.floor(Math.random()*2);
  if(random == 0){
    Game.playerOne.Start();
  }
  else{
    Game.playerTwo.Start();
  }
}

const rollDiceButton = document.getElementById('rollDice');
rollDiceButton.addEventListener('click', () => {
  newGame.play();  
})

const holdbutton = document.getElementById('hold');
holdbutton.addEventListener('click', () => {
  if(newGame.player().round > 0){    
    newGame.hold();    
  }
  else{
    // Afficher un message d'erreur
    console.log('rien a hold')
  }
})


