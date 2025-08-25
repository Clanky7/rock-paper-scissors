function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    return choices[Math.floor(Math.random()*choices.length)];    
}

// function getHumanChoice(){
//     let choice;
//     while (true){
//         choice = prompt("Rock, Paper or Scissors").toLowerCase();
//         if (["rock","paper","scissors"].includes(choice)) break;
//         alert("Invalid choice! Please enter Rock, Paper or Scissors");
//     }
//     return choice;
// }

let humanScore = 0, computerScore = 0;
    
const playerButtons = document.querySelectorAll(".player-container .btn");

function removeTransiton(e){
    if (e.propertyName != "transform"){
        return;
    }
    this.classList.remove("clicked");
}

function removeTransitonPc(e){
    if (e.propertyName != "transform"){
        return;
    }
    this.classList.remove("clicked");
    this.classList.remove("hovered");
}

playerButtons.forEach(btn => {
    btn.addEventListener("mouseenter", () => btn.classList.add("hovered"));
    btn.addEventListener("mouseleave", () => btn.classList.remove("hovered"));
    btn.addEventListener('click',function(){
            btn.classList.add("clicked")
            const computerChoice = getComputerChoice();
            const pcBtn = document.querySelector(`.computer-container .${computerChoice}`);
            pcBtn.classList.add("hovered");
            pcBtn.classList.add("clicked");
            playRound(btn.innerText.toLowerCase(),computerChoice);
        });
    btn.addEventListener("transitionend",removeTransiton);
});

document.querySelectorAll(".computer-container .btn").forEach(pcBtn => {
    pcBtn.addEventListener('transitionend', removeTransitonPc);
})



function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){    
        document.querySelector(".round-result").innerText =`It's a tie! You both chose ${humanChoice}`
        return;
    }

    const winningMoves = {
        rock: "scissors",
        paper: "rock",
        scissors:"paper"
    };

    if (winningMoves[humanChoice] === computerChoice){
        humanScore++;
        if (humanScore === 5){
            document.querySelector(".round-result").innerText = `You win!`
            document.querySelector(".user-score").innerText = `${humanScore}`;
            playAgain();
        }
        else{
            document.querySelector(".user-score").innerText = `${humanScore}`;
            document.querySelector(".round-result").innerText = `You win! ${humanChoice} beats ${computerChoice}`;
        }
    }
    else{
        computerScore++
        document.querySelector(".pc-score").innerText = `${computerScore}`
        document.querySelector(".round-result").innerText =`You lose! ${computerChoice} beats ${humanChoice}`;
    }
}

function playAgain(){
    const playAgainBtn = document.createElement("button");
    playAgainBtn.innerText = "Play Again";
    document.querySelector(".round-result").parentElement.append(playAgainBtn);
}

// function playGame(){
//     for (let i = 0; i < 5; i++){
//         let humanChoice = getHumanChoice();
//         let computerChoice = getComputerChoice();
//         console.log(computerChoice)
//         playRound(humanChoice,computerChoice);
//     }

//     declareWinner();
// }

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


