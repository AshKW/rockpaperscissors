const choiceArray = ["Rock", "Paper", "Scissors"];


function game(input){
    if (playerScore >= targetScore || computerScore >= targetScore){
        return //don't play if the target score has been reached
    }
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

    if (playerSelection == "Rock"){
        if (computerSelection == "Paper"){
            youLoseRound(playerSelection, computerSelection);
            return;
        } else {
            youWinRound(playerSelection, computerSelection);
            return;
        }
    }
    else if (playerSelection == "Paper") {
        if (computerSelection == "Scissors"){
            youLoseRound(playerSelection, computerSelection);
            return;
        } else {
            youWinRound(playerSelection, computerSelection);
            return;
        }
    }
    else if (playerSelection == "Scissors") {
        if (computerSelection == "Rock"){
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

function resetScores(){
    playerScore = 0;
    computerScore =0;
    playerScoreboard.textContent = `Player Score: ${playerScore}`
    computerScoreboard.textContent = `Computer Score: ${computerScore}`

}    


const choices = document.querySelectorAll("img.choice"); //nodelist of image buttons
const display = document.querySelector("#choice-display"); //show choices etc
const playerScoreboard = document.querySelector("#player-score-display");
const computerScoreboard = document.querySelector("#computer-score-display");
const targetScore = 5;
const resetButton = document.querySelector("#reset");

let playerScore = 0;
let computerScore = 0; 
    

choices.forEach( (choice) => {
    choice.addEventListener('click', function(e){
        let chosen = e.target.id;
        if (playerScore >= targetScore || computerScore >= targetScore){
            display.textContent = `Would you like to play again?`;
        }
        else {
        display.textContent = `You chose ${chosen}`;
        }
        game(chosen);
    })
})

resetButton.addEventListener('click', function(){
    resetScores();
});




