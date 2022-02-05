export class Player{
    constructor(alias, name){
      this.name = name.toUpperCase();     
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
      this.resetRound();
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
      this.resetRound();    
      document.dispatchEvent(this.globalScoreEvent);
    }
    
    resetRound(){    
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