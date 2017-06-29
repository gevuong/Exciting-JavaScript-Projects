// JS INTRO PROBLEMS

// Phase 1 - JS Fundamentals
// Mystery Scoping with var, let, const

function mysteryScoping1() {
  var x = 'out of block';
  if (true) {
    var x = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping1(); // in block, in block
console.log("/////////");

function mysteryScoping2() {
  const x = 'out of block';
  if (true) {
    const x = 'in block';
    console.log(x);
  }
  console.log(x);
 }
mysteryScoping2();
console.log("/////////"); // in block, out of block

// syntax error when attempting ot redefine a const x to global var x.
// function mysteryScoping3() {
//   const x = 'out of block';
//   if (true) {
//     var x = 'in block';
//     console.log(x);
//   }
//   console.log(x);
// }
// mysteryScoping3(); // syntax error
// console.log("///////");

function mysteryScoping4() {
  let x = 'out of block';
  if (true) {
    let x = 'in block';
    console.log(x);
  }
  console.log(x);
}
mysteryScoping4(); // in block, out of block
console.log("/////////");

// syntax error when trying to redefine let x variable in same scope.
// function mysteryScoping5() {
//   let x = 'out of block';
//   if (true) {
//     let x = 'in block';
//     console.log(x);
//   }
//   let x = 'out of block again';
//   console.log(x);
// }


// madLib
function madLib(verb, adj, noun) {
  console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`);
  // return `We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}.`;
}

madLib('make', 'best', 'guac');


// isSubstring
function isSubstring(searchString, subString) {
  console.log(searchString.includes(subString));
  // return searchString.includes(subString);
  // if (searchString.includes(subString)) {
  //   console.log(true)
  //   // return true
  // }
  // else {
  //   console.log("false")
  //   //return false
  // }
}

isSubstring("time to program", "time");
isSubstring("Jump for joy", "joys");


// Phase 2 - JS Looping Constructs
function fizzBuzz(array) {
  let new_arr = [];
  let i = 0;
  while (i < array.length) {
    if ((i % 3 === 0) ^ (i % 5 === 0)) {
      new_arr.push(i);
    }
    i++;
  }
  console.log(new_arr);
  // return new_arr;
}

fizzBuzz([2,3,4,5,6,7,8,9,10,11]);


function isPrime(num) {
  if (num < 2) { return false; }

  for (let i = 2, i < num, i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}
isPrime(2)
isPrime(10)
isPrime(15485863)
isPrime(3548563)
