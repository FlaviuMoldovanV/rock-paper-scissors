"use strict";

const score = document.querySelector("#score");
const result = document.querySelector("#result");
const displayCPUChoice = document.querySelector("#displayCPUChoice");
const roundsToWin = 5;

// Generates random choice for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Determines the winner of a round between user and computer
function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    displayCPUChoice.textContent = `Computer chooses: ${computerSelection}`;

    if (playerSelection == computerSelection) {
        result.textContent = "It's a tie!";
        return;
    }
    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper") {
                result.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
                return;
            }
            else {
                result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
                return;
            }

        case "paper":
            if (computerSelection == "scissors") {
                result.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
                return;
            }
            else {
                result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
                return;
            }

        case "scissors":
            if (computerSelection == "rock") {
                result.textContent = `You Win! ${playerSelection} beats ${computerSelection}!`;
                return;
            }
            else {
                result.textContent = `You Lose! ${computerSelection} beats ${playerSelection}!`;
                return;
            }
    }
}

//setTimeout in order for the message to be properly displayed
function endGame(message) {
    score.textContent = message;
    setTimeout(resetGame, 100);
}



function resetGame() {
    if (confirm("Play again?")) {
        location.reload(); // it's the same as refreshing the page
    }
    else {
        score.textContent = "Game Ended!";
        // if the game is ended then the user won't need to use the buttons.
        const buttons = document.querySelectorAll('button');
        buttons.forEach(button => {
            button.disabled = true;
        });
    }

}



// Creates a 5 round game using the playRound()function
(function game() {

    let playerCount = 0;
    let computerCount = 0;
    console.log(playerCount, computerCount);

    document.addEventListener("click", (e) => {
        if (e.target.matches("button")) {
            playRound(e.target.id);

            if (result.textContent.includes("Win")) {
                playerCount++;
            }
            else if (result.textContent.includes("Lose")) {
                computerCount++;
            }

            score.textContent = `\tPlayer:${playerCount}\t-\tComputer:${computerCount}`;

            // Check if a player has won 5 rounds
            if (playerCount === roundsToWin) {
                endGame("Player WINS!");
            }

            if (computerCount === roundsToWin) {
                endGame("Computer WINS!");
            }

        }
    });
})();



