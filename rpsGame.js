
function getComputerChoice() {
    let randomInteger = Math.floor(Math.random() * 3)
    if (randomInteger == 0) {
        return "ROCK"
    } else if (randomInteger == 1) {
        return "PAPER"
    } else {
        return "SCISSORS"
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("It's a tie, you both chose " + playerSelection)
        return 0
    } else if (playerSelection == "PAPER") {
        if (computerSelection == "ROCK") {
            console.log("You win, PAPER beats ROCK")
            return 1
        } else {
            console.log("You lose, PAPER loses to SCISSORS")
            return -1
        }
    } else if (playerSelection == "SCISSORS") {
        if (computerSelection == "PAPER") {
            console.log("You win, SCISSORS beats PAPER")
            return 1
        } else {
            console.log("You lose, SCISSORS loses to ROCK")
            return -1
        }
    } else {
        if (computerSelection == "SCISSORS") {
            console.log("You win, ROCK beats Scissors")
            return 1
        } else {
            console.log("You lose, ROCK loses to PAPER")
            return -1
        }
    }
}

function game() {
    let score = 0
    for(i = 0; i < 5; i++) {
        let playerSelection = prompt("Choose between ROCK, PAPER, SCISSORS", "")
        playerSelection = playerSelection.toUpperCase()
        let computerSelection = getComputerChoice()
        score += playRound(playerSelection, computerSelection)
    }
    if (score > 0) {
        console.log("You win. Score: " + score + " /5")
    } else if (score < 0) {
        console.log("You lose. Score: " + score + " /5")
    } else {
        console.log("It was a tie. Score: " + score + " /5")
    }
}

game();