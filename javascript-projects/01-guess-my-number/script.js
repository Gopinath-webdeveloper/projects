'use strict';

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secretnumber = Math.trunc(Math.random() * 20 + 1);
console.log(' the secret number is :', secretnumber);

var score = 20;
//document.querySelector('.score').textContent = score;

let highscore = 0;

// console.log('before hs :', highscore);

let displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let changeScore = function (s) {
  document.querySelector('.score').textContent = s;
};

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  //console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !';
  }
  // when guess is correct
  else if (guess === secretnumber) {
    //document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretnumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    console.log('high score : ', highscore);
  }
  // when the guess  number is high and low
  else if (guess !== secretnumber) {
    guess > secretnumber
      ? displayMessage('📉 Too high !!!')
      : displayMessage('📈  Too low !!!');
    score--;
    // document.querySelector('.score').textContent = score;
    changeScore(score);

    if (score == 0) {
      displayMessage(' you lost the game');
      score = 0;
      // document.querySelector('.score').textContent = score;
      changeScore(score);
    }
  }
  // } else if (guess > secretnumber) {
  //   score >= 1
  //     ? (document.querySelector('.message').textContent = '📉 Too high !!!')
  //     : (document.querySelector('.message').textContent = 'you lost the game');
  //   // document.querySelector('.message').textContent = '📉 Too high !!!';

  //   score--;
  //   document.querySelector('.score').textContent = score;

  //   console.log('the current score :', score);
  // }
  // // when guess number is low
  // else if (guess < secretnumber) {
  //   // document.querySelector('.message').textContent = '📈  Too low !!!';
  //   score >= 1
  //     ? (document.querySelector('.message').textContent = '📉 Too low !!!')
  //     : (document.querySelector('.message').textContent = 'you lost the game');
  //   score--;
  //   document.querySelector('.score').textContent = score;
  //   //  console.log(score);
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  // var newSecret = Math.trunc(Math.random() * 10);
  // console.log('New secret number : ', newSecret);
  // secretnumber = newSecret;
  // console.log('change secret number :', secretnumber);

  score = 20;
  secretnumber = Math.trunc(Math.random() * 20 + 1);

  console.log('This is new scertcode :', secretnumber);
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  // document.querySelector('.score').textContent = score;
  changeScore(score);
});
