
const counterInput = document.querySelector('#counter');
const contentH = document.querySelector('#counterH');
let counterH = 0;
let counter = 0;
let timerID;

// старт 

const btnStart = document.querySelector('#start');
btnStart.onclick = function () {
  console.log('btnStart');
// це суто для лічильника секунд
  // timerID = setInterval(function () {
  //   counter++;
  //   counterInput.innerText = counter;
  // }, 1000)
  timerID = setInterval(function () {
    counter++;
    if (counter >= 60) {
      counter = 0;
      counterH++;
    }
    counterInput.innerText = counter;
    contentH.innerText = counterH;
  }, 1000);
}
// пауза

const btnPause = document.querySelector('#pause');
btnPause.onclick = function () {
  console.log('btnPause');

  clearInterval(timerID);
}

// ресет 

const btnReset = document.querySelector('#reset');
btnReset.onclick = function () {
  console.log('btnReset');

  counter = 0;
  counterH = 0;
  counterInput.innerText = counter;
  contentH.innerText = counterH;
  clearInterval(timerID);
}
