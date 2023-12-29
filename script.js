'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎊 Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 23;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);*/

const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //   if (!guess) {
  //     document.querySelector('.message').textContent = '⛔ No number!';
  //   }
  if (guess === 0) {
    document.querySelector('.message').textContent =
      'Please enter number between 1 and 20.';
  }
});
