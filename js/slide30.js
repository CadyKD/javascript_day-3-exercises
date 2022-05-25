function guessingGame() {
	var input = prompt("Enter a range of numbers (like 30 70):");
	var range = input.split(" ");
	var guess = (Math.floor(Math.random() * (Number(range[1]) - Number(range[0])) + Number(range[0])));
	var stopper = 0;
	var userGuess = prompt(`Guess a number between ${range[0]} and ${range[1]}`);
	userGuess = parseInt(userGuess);
	while(stopper <= 10) {
		if(guess == userGuess) {
			alert("You got it: " + userGuess);
			break;
		} else if(guess > userGuess) {
			range[0] = userGuess + 1;
		} else {
			range[1] = userGuess - 1;
		}
		userGuess = prompt(`Keep guessing a number between ${range[0]} and ${range[1]}`);
		userGuess = parseInt(userGuess);
		stopper++;
	}
	if(guess != userGuess) {
		alert("Sorry, the answer was " + guess);
	}
}