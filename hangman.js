var inquirer = require("inquirer");
console.log('Hangman')
	var tomWord = new Word('coding')
	// console.log('coding', tomWord)
function start(){
	inquirer
	.prompt({
	  name: "guessedLetter",
	  type: "input",
	  message: "Guess a letter",
	  
	})
	.then(function(answer) {
	  tomWord.checkLetter(answer.guessedLetter)
	  // console.log('hangman1',answer)
	  start()
	});


}

start()
function Word(TOM){
	this.GameWord= TOM;
	this.lettersArray = []
	for (var i = 0; i < this.GameWord.length; i++) {
		var singleLetter = new Letter(this.GameWord[i])
		this.lettersArray.push(singleLetter)

		// console.log(singleLetter)
	}
	this.checkLetter = function(userGuess){
		console.log(userGuess,'guess')
		

	}

}


function Letter(Character){
	this.showLetter =false;
	this.displayLetter = Character;
}