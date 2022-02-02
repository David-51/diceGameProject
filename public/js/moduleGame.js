import { Dice } from './moduleDice.js';
// import * as PLAYER from './modulePlayer.js';
import { Player } from './modulePlayer.js';

export class Game{
    constructor(){        
        this.status = 'outOfGame';
        this.winnerAlert = new CustomEvent('winnerEvent');
        this.startGameEvent = new CustomEvent('gameAlert', {
            detail:{
                name: 'start'
            }
        });      
        this.dice = new Dice('dice');
        this.dice.createDice();
        this.dice.display();
    }
    setPlayerOne(name){
        this.playerOne = new Player('playerOne', name);        
    }
    setPlayerTwo(name){
        this.playerTwo = new Player('playerTwo', name);        
    }

    // Start new Game
    newGame(){
      this.playerOne.initPlayer();
      this.playerTwo.initPlayer();
      document.dispatchEvent(this.startGameEvent);   
    }
    rollDice(bool = false){     // cheatMode = true
      if(bool === true){
        return this.dice = 6;
      }
      this.dice = Math.floor(Math.random()*6)+1;    
      return this.dice;
    }
  
    play(diceRoll){        
      if(diceRoll === 1){      
        this.switchPlayer();
      }
      else{
        console.log(diceRoll);
        this.player().addToRound(diceRoll);
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
      if(this.player().global >= 15){
        document.dispatchEvent(this.winnerAlert);
        return 
      }
      this.switchPlayer();
    }
  }