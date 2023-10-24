"use strict";

// Generates random choice for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Determines the winner of a round between user and computer
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    console.log("Computer chooses:", computerSelection);
    if (playerSelection == computerSelection)
        return "It's a tie!";

    switch (playerSelection) {
        case "rock":
            if (computerSelection == "paper")
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            else
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;

        case "paper":
            if (computerSelection == "scissors")
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            else
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;

        case "scissors":
            if (computerSelection == "rock")
                return `You Win! ${playerSelection} beats ${computerSelection}!`;
            else
                return `You Lose! ${computerSelection} beats ${playerSelection}!`;

        default:
            return "Please write only the options presented!";

    }
}

let playerSelection = prompt("Write your choice(rock, paper, scissors)");
let computerSelection = getComputerChoice();
alert(playRound(playerSelection, computerSelection));