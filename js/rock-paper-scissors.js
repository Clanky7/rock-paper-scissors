function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];
}

function getHumanChoice(){
    let choice;
    while (true){
        choice = prompt("Rock, Paper or Scissors").toLowerCase;
        if (["rock","paper","scissors"].includes(choice)) break;
        alert("Invalid choice! Please enter Rock, Paper or Scissors");
    }
    return choice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        console.log(`It's a tie! You both chose ${humanChoice}`)
        return;
    }

    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors:"paper"
    };

    if (winningMoves[humanChoice] = computerChoice){
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
    else{
        computerChoice++
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame(){
    for (let i = 0; i < 5; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }

    declareWinner();
}

function declareWinner(){
    if (humanScore > computerScore){
        console.log(`You won the game! ${humanScore} to ${computerScore}`);
    }
    else if (humanScore < computerScore){
        console.log(`You lose the game! ${computerScore} to ${humanScore}`);
    }
    else{
        console.log(`Its a tie overall! ${computerScore} to ${humanScore}`);    
    }
}

playGame();
