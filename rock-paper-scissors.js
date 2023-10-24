"use strict";

// Generates random choice for the computer
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

//Determines the winner of a round between user and computer
function playRound() {

    let playerSelection = prompt("Write your choice(rock, paper, scissors)").toLowerCase();
    let computerSelection = getComputerChoice();

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

// Creates a 5 round game using the playRound()function
function game() {
    let playerCount = 0;
    let computerCount = 0;
    let result;
    while (playerCount < 3 && computerCount < 3) {
        result = playRound();
        console.log(result);

        if (result.includes("Win"))
            playerCount++;
        else if (result.includes("Lose"))
            computerCount++;
        console.log("Player", playerCount, "- Computer", computerCount);
    }

    if (playerCount == 3)
        alert("YOU WIN!");
    else
        alert("COMPUTER WINS!")
}

game();