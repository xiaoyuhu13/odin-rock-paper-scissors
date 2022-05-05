//Computer random move
function computerPlay() {
 const options = ['Rock', 'Paper', 'Scissors'];
 let randomChoice = options[Math.floor(Math.random()*options.length)];
    return randomChoice;
};

//Playing 1 round
function playRound (playerSelection, computerSelection) {
    
    if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || 
        (playerSelection === 'Paper' && computerSelection === 'Rock') ||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
            return `You Win! ${playerSelection} beats ${computerSelection}!`;
    } else if 
        ((computerSelection === 'Rock' && playerSelection === 'Scissors') || 
        (computerSelection === 'Paper' && playerSelection === 'Rock') ||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')) {
            return `You Lose! ${computerSelection} beats ${playerSelection}!`;
    } else {
            return `${computerSelection} and ${playerSelection}! It's a Draw!`;
    }
};

//Playing best of 5
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i <5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?', "");
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);

        console.log(outcome);
        
        if (outcome === `You Win! ${playerSelection} beats ${computerSelection}!`) {
            playerScore++;
        } else if (outcome === `You Lose! ${computerSelection} beats ${playerSelection}!`) {
            computerScore++;
        }   
        };

     if (playerScore > computerScore){
         return `Player Score: ${playerScore}, Computer Score: ${computerScore}. Congratulations! You win!`;
     } else if (computerScore > playerScore) {
         return `Player Score: ${playerScore}, Computer Score: ${computerScore}. You lose :( Try again?`;
     } else{
         return `Player Score: ${playerScore}, Computer Score: ${computerScore}. It\'s a draw!`;
     };
};




