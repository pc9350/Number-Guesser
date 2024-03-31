let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
    return Math.floor(Math.random() * 10);
}


function compareGuesses(user,computer,secret) {
    // if(user === secret && computer === secret) {
    //     return true;
    // }
    // if(Math.abs(secret - user) > Math.abs(secret - computer)) {
    //     return true;
    // } else {
    //     return false;
    // }
    const humanDifference = Math.abs(secret - user)
  const computerDifference = Math.abs(secret - computer)
  return humanDifference <= computerDifference;
}

function updateScore(winner) {
    if(winner === 'human') {
        humanScore++;
    }
    else if(winner === 'computer'){
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber++;
}
