var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

var wins = 0;
var losses = 0;
var numberOfGuesses = 9;
var guessOptions = [];
var userGuess = event.key;
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];


document.onkeyup = function(event) {

if (options.indexOf(userGuess) > -1) {

if (userGuess === computerGuess) {
		wins++;
		numberOfGuesses = 9;
		guessOptions = [];
}

if (userGuess != computerGuess) {
	numberOGuesses --;
	guessOptions.push(userGuess);
}

if (numGuesses === 0) {

	numberOGuesses = 9;
	losses ++;
	guessOptions = [];

				
}
}
