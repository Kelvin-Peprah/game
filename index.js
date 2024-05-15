//display total results  && retrieve item from local storage
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

//reset score
function resetScore() {
  score = {
    wins: 0,
    losses: 0,
    ties: 0,
  };
  localStorage.removeItem('score');
  updateScoreElement();
}

//select player move
function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie';
    } else if (computerMove === 'paper') {
      result = 'You lose';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'Tie';
    } else if (computerMove === 'scissors') {
      result = 'You win';
    }
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose';
    } else if (computerMove === 'paper') {
      result = 'You win';
    } else if (computerMove === 'scissors') {
      result = 'Tie';
    }
  }

  //determine the individual results
  if (result === 'You win') {
    score.wins++;
  } else if (result === 'Tie') {
    score.ties++;
  } else if (result === 'You lose') {
    score.losses++;
  }

  //save result
  localStorage.setItem('score', JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = ` You
      <img src="images/${playerMove}-emoji.png" alt="rock emoji">
      <img src="images/${computerMove}-emoji.png" alt="paper emoji">
      Computer`;

  // display the results in a pop  up
  //alert (`You picked ${playerMove}. Computer picked ${computerMove}. ${result}. \n Wins: ${score.wins}. Losses: ${score.losses}. Ties: ${score.ties}`);
}

//display updated score
function updateScoreElement() {
  document.querySelector(
    '.js-score'
  ).innerHTML = `Wins: ${score.wins}. losses: ${score.losses}. Ties: ${score.ties}`;
}

function pickComputerMove() {
  //generate a move for the computer
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}
