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
