
let playerScore = 0;
let computerScore = 0;

let playerSelection = "";
let computerSelection = "";
    
playRound();

function getComputerChoice() {
    let a = Math.floor (Math.random()*3);
    if (a < 1) {
        return ("Rock");
    }
    else if (a < 2) {
        return ("Paper");
    }
    else if (a < 3) {
        return ("Scissor");
    }
    else {
        return ("error");
    }
}

function playRound(){
    const buttonsList = document.querySelectorAll("button");
    for (let b of buttonsList){
        b.addEventListener("click",roundEvaluation);
    }
}
/**
 * 
 * @param {Event} event 
 */
function roundEvaluation(event) {
    computerSelection = getComputerChoice();
    playerSelection = event.currentTarget.textContent;
    const finalResult = document.querySelector("#result");
    if (computerSelection == playerSelection){
        finalResult.textContent = "Bingo! That's a draw.";
    }

    else if (computerSelection == "Rock") {
        if (playerSelection == "Paper"){
            finalResult.textContent = "You win! Paper beats Rock";
            playerScore++;
        }
        else if (playerSelection == "Scissor") {
            finalResult.textContent = "You lose! Rock beats scissor";
            computerScore++;
        }
    }

    else if (computerSelection == "Paper") {
        if (playerSelection == "Rock"){
            finalResult.textContent = "You lose! Paper beats Rock";
            computerScore++;
        }
        else if (playerSelection == "Scissor"){
            finalResult.textContent = "You win! Scissor beats Paper";
            playerScore++;
        }
    }

    else if (computerSelection == "Scissor"){
        if (playerSelection == "Paper"){
            finalResult.textContent =  "You win! Paper beats Scissor";
            playerScore++;
        }
        else if (playerSelection == "Rock"){
            finalResult.textContent =  "You lose! Rock beats Scissor";
            computerScore++;
        }
    }

    if (playerScore == 5){
        document.querySelector("#result").textContent = `GAME ENDS.You win with ${playerScore} points!`;
    }
    else if (computerScore == 5){
        document.querySelector("#result").textContent = `GAME ENDS.Computer wins with ${computerScore} points!`;
    }
}
