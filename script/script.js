function getComputerChoice() {
    let a = Math.floor (Math.random()*3);
    if (a < 1) {
        return ("rock");
    }
    else if (a < 2) {
        return ("paper");
    }
    else if (a < 3) {
        return ("scissor");
    }
    else {
        return ("error");
    }
}

function getUserChoice() {
    let choice = prompt("Enter your choice", "Rock, Paper or Scissor").toLowerCase();
    if (choice == "rock" || choice == "paper" || choice == "scissor"){
        return choice;
    }
    else {
        alert ("Wrong input!");
        return undefined;
    }
    
}

function showFinalScores() {
    alert (`FINAL SCORE: Computer - ${computerScore}, Player - ${playerScore}`);
    if (playerScore == computerScore){
        alert ("It's a draw after five rounds!");
    }

    else if (playerScore < computerScore){
        alert ("Sorry, you lose after five rounds!");
    }

    else {
        alert ("Congratulations, you win after five rounds!");
    }
}


function roundEvaluation(computerSelection, playerSelection) {
    
    if (computerSelection == playerSelection){
        alert ("Bingo! That's a draw.");
    }

    else if (computerSelection == "rock") {
        if (playerSelection == "paper"){
            alert ("You win! Paper beats Rock");
            playerScore++;
        }
        else if (playerSelection == "scissor") {
            alert ("You lose! Rock beats scissor");
            computerScore++;
        }
    }

    else if (computerSelection == "paper") {
        if (playerSelection == "rock"){
            alert ("You lose! Paper beats Rock");
            computerScore++;
        }
        else if (playerSelection == "scissor"){
            alert ("You win! Scissor beats Paper");
            playerScore++;
        }
    }

    else if (computerSelection == "rock"){
        if (playerSelection == "paper"){
            alert ("You win! Paper beats Rock");
            playerScore++;
        }
        else if (playerSelection == "scissor"){
            alert ("You lose! Rock beats scissor");
            computerScore++;
        }
    }

}

function gamePlay(){
    for (i=0;i<5;i++){
        roundEvaluation (getComputerChoice(),getUserChoice());
    }
    showFinalScores();
}

let playerScore = 0;
let computerScore = 0;
gamePlay();