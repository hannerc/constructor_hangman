var Word = require ("./Word.js");

var inquirer = require("inquirer");

var wordBankArray = ["BOAT","JAVASCRIPT","NODE","AUSTRALIA"];

var guessesremaining = 10;

var guessedLetter;

var randomWord;




function promptUser(){
	inquirer
	  .prompt([ 
	  	{type: "list",
	      message: "Hangman:",
	      choices: ["Play Game!", "Add A Word To The Game!"],
	      name: "menu"
	  	}])
	  .then(function(inquirerResponse) {
	  	if (inquirerResponse.menu === "Play Game!"){
			var randomWord = new Word(wordBankArray[Math.floor(Math.random()*wordBankArray.length)]);

	  		playGame(randomWord, guessesremaining);

	  	}else{
		
	  		//AddWord();
	  	}; 
	});
};

function AddWord(word){
	inquirer
		.prompt([
		    {
		      type: "input",
		      message: "Type your word:",
		      name: "word" 
		  	}])
		.then(
		  	function(inquirerResponse){
		  		
		  		wordBankArray.push(inquirerResponse.word.toUpperCase());

		  		inquirer
		  			.prompt([ 
					  	{type: "list",
					      message: "Add another?",
					      choices: ["Yes", "No"],
					      name: "another"
					  	}])
				 	.then(function(inquirerResponse) {

				  		if (inquirerResponse.another === "Yes"){

				  			AddWord();

				  		}else{
				  			promptUser();
				  		}
				});
 			});
};

function playGame(randomWord, guessesremaining){
	
	// var randomWord = new Word(wordBankArray[Math.floor(Math.random()*wordBankArray.length)]);

	// console.log("Guess the Word: " + randomWord.toString)
	// console.log("Guesses Remainig: "+guessesremaining);

	//return(randomWord);
if(guessesremaining){
	match(randomWord);
}else{
	console.log(guessesremaining+"GO")
}



			
};

function match(randomWord){

	//console.log(randomWord.ObjectArray);
var count; 

	inquirer
		.prompt([ 
		  	{type: "input",
		      message: "Guess a letter:",
		      name: "guessedLetter"
		  	}])

	 	.then(function(inquirerResponse) {

	 		var guessedLetter = inquirerResponse.guessedLetter;
			//console.log("Guess the word: "+ randomWord.toString)
			// console.log("Guesses Remaining: "+guessesremaining);

			// console.log((guessedLetter.toUpperCase()))

			// console.log(guessedLetter);

			count = 0;

			console.log("1 " + count);

			toString(randomWord);

			playGame(randomWord, guessesremaining);

			//&& randomWord.ObjectArray[i].has_been_guessed === "false"

				for (i=0; i<randomWord.ObjectArray.length; i++){

					if(guessedLetter.toUpperCase() === randomWord.ObjectArray[i].letter && randomWord.ObjectArray[i].has_been_guessed === "false"){

						randomWord.ObjectArray[i].guessed = randomWord.ObjectArray[i].letter;
						
						randomWord.ObjectArray[i].has_been_guessed = "true";

						toString(randomWord);

						playGame(randomWord, guessesremaining);

						console.log("Guesses Remaining: " + guessesremaining);

						count = 0;

						console.log("2 " + count);

						continue;
					
					}else{
					
						count = count + 1;

						if (count === randomWord.ObjectArray.length){
						console.log("\n");
						guessesremaining = guessesremaining - 1;
						console.log("Guesses Remaining: " + guessesremaining);
						console.log("3 " + count);
						count = 0;

						console.log("4 " + count);
					}

					}

				// }else if(guessedLetter.toUpperCase() != randomWord.ObjectArray[i].letter && randomWord.ObjectArray[i].has_been_guessed === "false"){
					
				// 	count = count +1;

				// 	if (count === randomWord.ObjectArray.length){

				// 		guessesremaining = guessesremaining - 1;
				// 		playGame(randomWord, guessesremaining);
				// 		console.log("Guesses Remaining: " + guessesremaining)
						
				// 	}
				// }else if(guessedLetter.toUpperCase() != randomWord.ObjectArray[i].letter && randomWord.ObjectArray[i].has_been_guessed === "true"){
					
				// 	count = count +1;

				// 	if (count === randomWord.ObjectArray.length){
				// 		console.log("You WON!")
				// 	}
				// 	}else{


				// 	}

				};
			
			console.log("4 " + count);
			
			
		});
};


function toString(randomWord){


var arr = [];
	for(i=0; i<randomWord.ObjectArray.length; i++){

		arr.push(randomWord.ObjectArray[i].guessed);

	};

	console.log(arr.join(' '))

};

function endGame(){
	console.log("Game Over! Try")
}

promptUser();






