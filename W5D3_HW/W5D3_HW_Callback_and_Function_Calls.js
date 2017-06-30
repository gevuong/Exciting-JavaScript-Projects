
// Simple Timeout
var timeout;
// Pass in a callback function that calls alert('HAMMERTIME')
function delayedAlert() {
  timeout = window.setTimeout(setAlert, 5000);
}

// function to be executed after time expires
function setAlert() {
  alert('HAMMERTIME');
}

// Solutions
window.setTimeout(function () {
  alert('Hammer Time!');
}, 5000);
// Discussion:
// Is setTimeout synchronous or asynchronous?


// Timeout Plus Closure
// Callback function is closed over the time variable in the outer scope of hammerTime.
// Pass a callback to the timeout that creates
function hammerTime(time) {
  window.setTimeout(function() {
    alert(`${time} is hammertime!`);
  }, 2000);
}


// var firstAns = prompt("Would you like tea?");
// console.log(firstAns);
//
// var secondAns = prompt("Would you like biscuits?");
//
// console.log(`So you ${firstAns} want tea and you ${secondAns} want coffee.`);

const readline = require('readline');

const reader = readline.createInterface({
  // it's okay if this part is magic; it just says that we want to
  // 1. output the prompt to the standard output (console)
  // 2. read input from the standard input (again, console)
  input: process.stdin,
  output: process.stdout
});

// prompt the reader if they'd like some tea.
function teaAndBiscuits () {
  let first, second;

  reader.question("Would you like tea? ", (res) => {
    first = res;
    console.log(`You replied ${res}`);
  });

  const firstRes = (first === 'yes') ? 'do' : 'don\t';

  if (firstRes === 'do') {
    reader.question("And biscuits?", (res) => {
      second = res;
      console.log(`You replied ${res}`);
    });
  }

  const secondRes = (first === 'yes') ? 'do' : 'don\t';

}
