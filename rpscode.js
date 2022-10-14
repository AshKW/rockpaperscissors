const choiceArray = ["rock", "paper", "scissors"];

function getComputerChoice(){
    /* return a random choice from the computer */
    let choiceNum = Math.floor(Math.random() * 3);
    let choice = choiceArray[choiceNum];
    return choice;
}

function getPlayerChoice(){
    /* get the user's input, check that it is valid
    and format it to all lowercase */
    let inputChoice = prompt("Make your choice:").toLowerCase();

    if (inputChoice !== "rock" && inputChoice !== "paper" && inputChoice !== "scissors"){
        console.log("invalid choice entered");
        return ("InvalidChoice");
    } 
    else {
        return inputChoice;
        }

}

function playRound(playerSelection, computerSelection){
    /*compare player and computer choices and determine the winner */

    if (playerSelection == computerSelection){
        console.log(`It's a draw! You both chose ${playerSelection}.`);
        return;
    }

    if (playerSelection == "rock"){
        if (computerSelection == "paper"){
            youLose(playerSelection, computerSelection);
            return;
        } else {
            youWin(playerSelection, computerSelection);
            return;
        }
    }
    else if (playerSelection == "paper") {
        if (computerSelection == "scissors"){
            youLose(playerSelection, computerSelection);
            return;
        } else {
            youWin(playerSelection, computerSelection);
            return;
        }
    }
    else if (playerSelection == "scissors") {
        if (computerSelection == "rock"){
            youLose(playerSelection, computerSelection);
            return;
        } else {
            youWin(playerSelection, computerSelection);
            return;
        }
    }
    else {
        alert("Something went horribly wrong!");
    }

}

function youLose(playerSelection, computerSelection) {
    computerScore++;
    console.log(`You lose! ${computerSelection} beats ${playerSelection}.`);
    return;
}

function youWin (playerSelection, computerSelection) {
    playerScore++;
    console.log(`You win! ${playerSelection} beats ${computerSelection}.`);
    return;
}


function game(){
    /*play 5 games*/
    for (let i = 0; i < 5; i++){
        let player = getPlayerChoice();
        /* keep prompting the user for a valid choice */
            while (player == "InvalidChoice"){
                player = getPlayerChoice();
            }
        let computer = getComputerChoice();
        console.log(`You chose ${player}, computer chose ${computer}.`)
        playRound(player, computer);
        console.log(`Scores: You: ${playerScore} Computer: ${computerScore}`);

    }
    /* determine the winner */
    if (playerScore > computerScore){
        console.log("Finished... Congratulations, you won!");
        return;
    }
    else if (playerScore < computerScore){
        console.log("Finished... Unlucky, the computer won!");
        return;
    }
    else {
        console.log("Finished... It was a draw!");
        return;
    }
}



let playerScore = 0;
let computerScore = 0;
    


game();




