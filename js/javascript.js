let games = 0;
let playerScore = 0;
let computerScore = 0;
let ties = 0;

function getComputerChoice() {
	let num = Math.floor(Math.random() * 3);
	if (num == 0) {
		return "Rock";
	} else if (num == 1) {
		return "Paper";
	} else {
		return "Scissors";
	}
}

function getPlayerChoice() {
	let valid = false;
	let choice = '';
	while (!valid) {
		choice = prompt("Enter Rock, Paper, or Scissors...").toLowerCase();
		if (choice == "rock") {
			return "Rock";
		} else if (choice == "paper") {
			return "Paper";
		} else if (choice == "scissors") {
			return "Scissors";
		} else {
			alert("Invalid Selection. Please re-enter your choice.");
		}
	}
}

function playRound(playerSelection, computerSelection) {

	games += 1;
	let result = `Player: ${playerSelection}\n` + 
					     `Computer: ${computerSelection}\n`;

	if (playerSelection == computerSelection) {
		ties += 1;
		return `${result}Tie!`;
	}
	
	if (playerSelection == "Rock") {
		if (computerSelection == "Paper") {
			computerScore += 1;
			return `${result}Computer wins! Paper beats Rock!`;
		} else {
			playerScore += 1;
			return `${result}Player wins! Rock beats Scissors!`;
		}
	}
	
	if (playerSelection == "Paper") {
		if (computerSelection == "Scissors") {
			computerScore += 1;
			return `${result}Computer wins! Scissors beats Paper!`;
		} else {
			playerScore += 1;
			return `${result}Player wins! Paper beats Rock!`;
		}
	}
	
	if (playerSelection == "Scissors") {
		if (computerSelection == "Rock") {
			computerScore += 1;
			return `${result}Computer wins! Rock beats Scissors!`;
		} else {
			playerScore += 1;
			return `${result}Player wins! Scissors beats Paper!`;
		}
	}
}

function gameLoop() {

	while (games < 5) {
		alert(playRound(getPlayerChoice(), getComputerChoice()) +
					`\n\nGames Played: ${games}\nPlayer: ${playerScore}` +
					 `\nComputer: ${computerScore}\nTie: ${ties}` +
					 `\n\nPress OK to continue...`);
	}
	
	if (playerScore > computerScore) {
		alert("Player wins!\n\nPress OK to quit...")
	} else if (playerScore < computerScore) {
		alert("Computer wins!\n\nPress OK to quit...")
	} else {
		alert("You tied!\n\nPress OK to quit...")
	}
}

gameLoop();


