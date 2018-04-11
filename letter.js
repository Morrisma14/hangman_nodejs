let Letter = function(letter){
    this.letter = letter;
    this.isValid = function(){

    }
}
let inquirer = require('inquirer');
let Game = function(word){
    this.guesses = 10;
    this.word = word;
    this.incorrectGuesses = [];
    this.correctGuesses = [];
    this.completed = false;
    this.promt = 
    this.handleWin = function(){

    }
    this.handleLoss = function(){

    }
    this.start = function(){

    }
    this.letterGuessed = function(){

    }
    this.checkLetter = function(){

    }
    this.handleCorrect = function(){
    
    }
    this.handleIncorrect = function(){
    
    }
    this.handleGuessed = function(){
    
    }
    this.addLetter = function(letter){
        //let letter = new Letter(letter);
        if (this.checkLetter(letter) && this.letterGuessed()){
            this.correctGuesses.push(letter)
        } else if (){
            this.incorrectGuesses.push(letter)
        } else {
            this.handleGuessed;
        }

    }
}

let myGame = new Game("Pizza");

myGame.start();