var buttons = Array.from(document.querySelectorAll('button'))
var output = document.querySelector('#score')
var winOut = document.querySelector('#winner')
console.log(buttons)
var you = 0
var computer = 0
buttons.forEach(function(button) {
    button.addEventListener('click', userRound);
});

function userRound(e) {
        var playerSelection = this.value
        var computerSelection = getComputerChoice()
        result = playRound(playerSelection, computerSelection)
        if (result == 1) {
            you += 1
        } else if (result == -1) {
            computer += 1
        }
        var displayText = "Your Score: " + you + " Computer Score: " + computer;
        output.textContent = displayText;
        var tempContent = ""
        if (you == 5) {
            tempContent = "You were first to 5"
            winOut.textContent = tempContent
            you = 0
            computer = 0
        } else if (computer == 5) {
            tempContent = "Computer was first to 5"
            winOut.textContent = tempContent
            you = 0
            computer = 0
        }
        setTimeout(function() {
            winOut.textContent = "";
          }, 10000);
        
}

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


/*
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
*/