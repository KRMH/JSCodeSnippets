'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//define a secret number
const secretNumber = Math.trunc(Math.random() * 20 + 1);

//the score
let score = 20;

//clicking a button in a page
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if guess is empty and to number then equal to zero.
  if (!guess) {
    displayMessage('No Number!');
  } else if (guess == secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    displayMessage('Correct Number!');

    document.querySelector('.number').textContent = secretNumber;
    //guess is too high
  } else if (guess !== secretNumber) {
    displayMessage(
      score < 1
        ? 'You lost the game!'
        : guess > secretNumber
        ? 'Too high!'
        : 'Too low!'
    );

    score = score > 1 ? score-- : 0;
  }
});

//clicking the again button in a page
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.guess').value = null;
});
