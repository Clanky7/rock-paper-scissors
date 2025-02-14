function getComputerChoice(){
     let computerChoice = Math.floor(Math.random()*3+1);
     
     if (computerChoice == 1){
        return "rock";
     }
     else if(computerChoice == 2){
        return  "paper";
     }
     else{
        return "scissors";
     }
} 

function getHumanChoice(){
    let choice = prompt("Rock, Paper or Scissors");
    choice = choice.toLowerCase();
    return choice;
}

let HumanScore = 0, ComputerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice == "paper"){
        if (computerChoice == "rock"){
            console.log("You win,Paper beats Rock");
            HumanScore++;
        }
        else if (computerChoice == "scissors"){
            ComputerScore++;
            console.log("You lose,scissors beats Paper");
        }
    }
    else if (humanChoice == "rock"){
        if (computerChoice == "paper"){
            ComputerScore++
            console.log("You lose,Paper beats Rock");

        }
        else if (computerChoice == "scissors"){
            HumanScore++;
            console.log("You win,Rock beats scissors");
        }
    }
    else{
        if (computerChoice == "rock"){
            ComputerScore++;
            console.log("You lose!,Rock beats scissors");
        }
        else if (computerChoice == "paper"){
            HumanScore++;
            console.log("You win,Paper beats Rock");
        }
    }
       
}

function playGame(){
    for (let i = 0; i < 5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
}

function declareWinner(HumanScore,ComputerScore){
    if (HumanScore > ComputerScore){
        console.log("You won");
    }
    else{
        console.log("The computer won");
    }
}

playGame();
declareWinner(HumanScore,ComputerScore);
