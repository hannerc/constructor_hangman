function Letter (letter, has_been_guessed){

	this.letter = letter;

	this.has_been_guessed = has_been_guessed;

	this.guessed = guessed_letter(letter, has_been_guessed);
};

function guessed_letter (letter, has_been_guessed){

		if (has_been_guessed === "false"){
			
			this.guessed_letter = "_";

			//console.log(this.guessed_letter)

		}else{

			this.guessed_letter = letter;

			//console.log(this.guessed_letter);
		}

	return this.guessed_letter;
};

module.exports = Letter;