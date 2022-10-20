const choiceArray = ["rock", "paper", "scissors"];


function game(input){
    let player = input;
    let computer = getComputerChoice();
    playRound(player, computer);
    if (playerScore >= targetScore || computerScore >= targetScore){
        determineWinner();
    }
}


function getComputerChoice(){
    /* return a random choice from the computer */
    let choiceNum = Math.floor(Math.random() * 3);
    let choice = choiceArray[choiceNum];
    return choice;
}


function playRound(playerSelection, computerSelection){
    /*compare player and computer choices and determine the winner */

    if (playerSelection == computerSelection){
        display.textContent = (`The round was a draw! You both chose ${playerSelection}.`);
        return;
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            youLoseRound(playerSelection, computerSelection);
            return;
        } else {
            youWinRound(playerSelection, computerSelection);
            return;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors"){
            youLoseRound(playerSelection, computerSelection);
            return;
        } else {
            youWinRound(playerSelection, computerSelection);
            return;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            youLoseRound(playerSelection, computerSelection);
            return;
        } else {
            youWinRound(playerSelection, computerSelection);
            return;
        }
    }
    else {
        alert("Something went horribly wrong!");
    }
}

function youLoseRound(playerSelection, computerSelection) {
    computerScore++;
    computerScoreboard.textContent = `Computer Score: ${computerScore}`
    display.textContent = (`You lost the round! ${computerSelection} beats ${playerSelection}.`);
    return;
}

function youWinRound (playerSelection, computerSelection) {
    playerScore++;
    playerScoreboard.textContent = `Player Score: ${playerScore}`
    display.textContent = (`You won the round! ${playerSelection} beats ${computerSelection}.`);
    return;
}


function determineWinner(){
    //display win message for whoever has more points - Overall winner

    if (playerScore > computerScore){
        display.textContent = (`Congratulations, you won!`);
        return;
    }
    else if (playerScore < computerScore){
        display.textContent = (`Unlucky, the computer won!`);
        return;
    }
    else {
        display.textContent = (`It was a draw!`);
        return;
    }
}


const choices = document.querySelectorAll("button.choice"); //nodelist of buttons
const display = document.querySelector("#choice-display"); //show choices etc
const playerScoreboard = document.querySelector("#player-score-display");
const computerScoreboard = document.querySelector("#computer-score-display");
const targetScore = 5;

let playerScore = 0;
let computerScore = 0; 
    

choices.forEach( (choice) => {
    choice.addEventListener('click', function(e){
        let chosen = e.target.id;
        display.textContent = `You chose ${chosen}`;
        game(chosen);
    })
})




