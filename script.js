const buttons = document.querySelectorAll("#buttons");
const playerMoveElement = document.querySelector("#player-move");
const computerMoveElement = document.querySelector("#computer-move");
const outcomeElement = document.querySelector("#outcome");

buttons.forEach((button) => {
	button.addEventListener('click', () => {
		play(button);
	});
});

function play(button) {
	const playerChoice = parseInt(button.getAttribute('data-button-value'));
	const computerChoice = computerPlay();
	let outputData = gameResult(playerChoice, computerChoice);
	output(outputData);
}

/* 
* 0 - Rock
* 1 - Paper
* 2 - Scissors
*/
function computerPlay() {
	return Math.floor(Math.random() * 3.0);
}

function gameResult(playerChoice, computerChoice) {
	const RESULTS = [
		"It's a tie!",
		"You win!",
		"You lose!"
	];
	let playerMove = "You: "; 
	let	computerMove = "Computer: "; 
	let outcome;
	if (playerChoice === 0) {
		playerMove += "Rock"; 
		switch(computerChoice) {
			case 0: computerMove += "Rock"; outcome = RESULTS[0]; break;
			case 1: computerMove += "Paper"; outcome = RESULTS[2]; break;
			case 2: computerMove += "Scissors"; outcome = RESULTS[1]; break;
		}
	}
	else if(playerChoice === 1) {
		playerMove += "Paper";
		switch(computerChoice) {
			case 0: computerMove += "Rock"; outcome = RESULTS[1]; break;
			case 1: computerMove += "Paper"; outcome = RESULTS[0]; break;
			case 2: computerMove += "Scissors"; outcome = RESULTS[2]; break;
		}
	}
	else {
		playerMove += "Scissors";
		switch(computerChoice) {
			case 0: computerMove += "Rock"; outcome = RESULTS[2]; break;
			case 1: computerMove += "Paper"; outcome = RESULTS[1]; break;
			case 2: computerMove += "Scissors"; outcome = RESULTS[0]; break;
		}
	}
	return [playerMove, computerMove, outcome];
}

function output(outputData) {
	playerMoveElement.innerText = outputData[0];
	computerMoveElement.innerText = outputData[1];
	outcomeElement.innerText = outputData[2];
}