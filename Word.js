var Letter = require ("./Letter.js");

function Word (wordString, letter_array, objectArray){

	this.wordString = wordString;

	this.letter_array = toArray(this.wordString);

	this.ObjectArray = create_Letter_object_array(this.letter_array);

	this.toString = toString(this.ObjectArray);

};

function toArray(wordString){

	var letter_array = Array.from(wordString);

	return letter_array;

};

function create_Letter_object_array (letter_array) {

	var objectArray = [];

	for(i=0; i<letter_array.length; i++){

		objectArray.push(new Letter(letter_array[i], "false"));
	
	};

	return objectArray;
};

function toString(ObjectArray){

	var guessArray = [];

	for(i=0; i<ObjectArray.length; i++){

		guessArray.push(ObjectArray[i].guessed);

	};

	var guessString = guessArray.join(' ');

	return guessString;
};

module.exports = Word;
