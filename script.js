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

//Playing a 5 round game (not best of 5 yet)
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i <5; i++) {
        let playerSelection = prompt('Rock, Paper, or Scissors?', "");

        let computerSelection = computerPlay();
        let outcome = playRound(playerSelection, computerSelection);

        console.log(outcome);
        
        if (outcome === `You Win! ${playerSelection} beats ${computerSelection}!`) {
            ++playerScore;
        } else if (outcome === `You Lose! ${computerSelection} beats ${playerSelection}!`) {
            ++computerScore;
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


//Adding a UI

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const result = document.querySelector('.result');

let playerScore = 0;
let computerScore = 0;

rock.addEventListener('click', function() {
    
    //keeping score
    let playerSelection = 'Rock';
    let computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    if (outcome === `You Win! ${playerSelection} beats ${computerSelection}!`) {
        ++playerScore;
    } else if (outcome === `You Lose! ${computerSelection} beats ${playerSelection}!`) {
        ++computerScore;
    }; 
    result.textContent = `${outcome} Player Score: ${playerScore} Computer Score: ${computerScore}`;

    //announcing winner
    if (playerScore === 5) { 
        result.textContent = `Player wins the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    } else if (computerScore === 5) {
        result.textContent = `Computer wins the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    };
});


 paper.addEventListener('click', function () {
    //keeping score
    let playerSelection = 'Paper';
    let computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    if (outcome === `You Win! ${playerSelection} beats ${computerSelection}!`) {
        ++playerScore;
    } else if (outcome === `You Lose! ${computerSelection} beats ${playerSelection}!`) {
        ++computerScore;
    }; 
    result.textContent = `${outcome} Player Score: ${playerScore} Computer Score: ${computerScore}`;

    //announcing winner
    if (playerScore === 5) { 
        result.textContent = `Player wins the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    } else if (computerScore === 5) {
        result.textContent = `Computer wins the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    };
});



scissors.addEventListener('click', function () {
    //keeping score
    let playerSelection = 'Scissors';
    let computerSelection = computerPlay();
    const outcome = playRound(playerSelection, computerSelection);

    if (outcome === `You Win! ${playerSelection} beats ${computerSelection}!`) {
        ++playerScore;
    } else if (outcome === `You Lose! ${computerSelection} beats ${playerSelection}!`) {
        ++computerScore;
    }; 
    result.textContent = `${outcome} Player Score: ${playerScore} Computer Score: ${computerScore}`;

    //announcing winner
    if (playerScore === 5) { 
        result.textContent = `Player wins the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    } else if (computerScore === 5) {
        result.textContent = `Computer wins the game! Player Score: ${playerScore} Computer Score: ${computerScore}`;
    };
});






