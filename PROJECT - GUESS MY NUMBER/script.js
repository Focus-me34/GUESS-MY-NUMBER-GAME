'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

// 2 FUNCTIONS TO REFACTOR REPETITIONS
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};

const displayNumber = number => {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // WHEN THERE IS NO INPUT
  if (!guess) {
    displayMessage(' ❌ No number ');

    // WHEN THE PLAYER WINS
  } else if (guess === secretNumber) {
    displayMessage('🏆 Correct number !');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(secretNumber);

    // CHANGE HIGHSCORE IF ACTUAL SCORE > PREVIOUS HIGHSCORE
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // WHEN GUESS IS WRONG
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high' : 'Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('💣 GAME OVER');
    }
  }

  // RESTART GAME WHEN CLICK ON "AGAIN"
  document
    .querySelector('.again')
    .addEventListener('click', function restart() {
      score = 20;
      document.querySelector('.score').textContent = score;
      displayMessage(`Start guessing...`);
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').style.width = '15rem';
      document.querySelector('.guess').value = ``;
      changeSecretNumber();
      displayNumber(secretNumber);
      displayNumber('?');
    });

  // CHANGE THE SECRET NUMBER (USED IN RESTART EVENT)
  function changeSecretNumber() {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
  }
});
