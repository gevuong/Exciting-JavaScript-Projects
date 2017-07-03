function myBsearch(array, target) {
  // base case: if arr.length = 0, target cannot be found
  if (array.length === 0) {
    return -1;
  }
  // Use Math.floor because JS does math with floats.
  let mid = Math.floor(array.length / 2);
  if (array[mid] === target) {
    return mid;

  // search array ranging from 0 to arr[mid] if arr[mid] > target
  } else if (array[mid] > target) {
    let left = array.slice(0, mid);
    return myBsearch(left, target);

  } else {
    let right = array.slice(mid + 1);
    let searchRes = myBsearch(right, target);
    // return -1 if myBsearch cannot find target, else
    // return index of full array (i.e. mid_idx + 1 + searchRes_idx)
    return searchRes === -1 ? -1 : mid + 1 + searchRes;
    }
}

console.log(myBsearch([1,2,3,4,5], 2) ); // 1
console.log(myBsearch([1,2,3,4,5], 5)); // 4
console.log(myBsearch([1,2,3,4,5], 6)); // -1


// JUMBLE SORT
// Jumble sort takes a string and an alphabet. It returns a copy of the string
// with the letters re-ordered according to their positions in the alphabet. If
// no alphabet is passed in, it defaults to normal alphabetical order (a-z).
//
// Example:
// jumbleSort("hello") => "ehllo"
// jumbleSort("hello", ['o', 'l', 'h', 'e'])  // 'ollhe'

let jumbleSort = (str, alpha = 'abcdefghijklmnopqrstuvwxyz') => {
  return str.split("").sort((a,b) => alpha.indexOf(a) - alpha.indexOf(b)).join("");
};

console.log(jumbleSort("hello")); // ehllo
console.log(jumbleSort("hello", ['o', 'l', 'h', 'e']));




// BUBBLE SORT
Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (sorted === false) {
    sorted = true;

    for (var i = 0; i < this.length; i++) {
      let el1 = this[i];
      let el2 = this[i + 1];
      if (el1 > el2) {
        [this[i], this[i + 1]] = [el2, el1];
        sorted = false;
      }
    }
  }
  return this;
};

console.log([1,6,3,8,6,5,10].bubbleSort()); // [1,3,5,6,6,8.10]



// Hint: quicksort checks by pivoting!
// Hint 2: The solution is a bit different than the solution in Ruby!

// function quickSort(array) {
//   if (array.length < 2) {
//     return array;
//   }
//
//   let pivot = array[0];
//   let left = [];
//   let right = [];
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] < pivot) {
//       left.push(array[i]);
//     } else {
//       right.push(array[i]);
//     }
//   }
//   return left.quickSort().concat(pivot, right.quickSort());
//   // return left.quickSort() + [pivot] + right.quickSort());
// }


Array.prototype.quickSort = function () {
  if (this.length < 2) {
    return this;
  }
  let pivot = this[0];
  let left = [];
  let right = [];
  for (var i = 1; i < this.length; i++) {
    if (this[i] < pivot) {
      left.push(this[i]);
    } else {
      right.push(this[i]);
    }
  }

  return left.quickSort().concat(pivot, right.quickSort());
};

// this call back is essentially the prc we would pass in ruby.


const test = [7,3,5,2,8,7,1,9,3,4].quickSort();
console.log(test);
// the call back is essentially the prc we would pass in ruby.

// const compA = (a,b) => {
//   if (a > b) {
//     return 1;
//   } else if (a < b){
//     return -1;
//   } else {
//     return 0;
//   }
// };

// const test = [7,3,5,2,8,7,1,9,3,4].quickSort();
// console.log(test);

// const test1 = [7,3,5,2,8,1,9,3,4].quickSort(compA);
// console.log(test1);

// console.log(quickSort([1,9,2,3,0,5,6,6,43,24]));
//



//Write an Array#merge_sort method; it should not modify the original array.
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  }
  let mid = Math.floor(array.length / 2);
  let sortedLeft = mergeSort(array.slice(0, mid));
  let sortedRight = mergeSort(array.slice(mid));

  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {

  let sorted = [];
  while (left.length > 0 && right.length > 0) {

    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else if (left[0] > right[0]) {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}

console.log(mergeSort([1,9,2,3,0,5,6,6,43,24]));


// Write an Array#merge_sort method; it should not modify the original array.
// If a comparator is passed, it should sort according to that callback.


// Array.prototype.mergeSort = function() {
//   if (this.length < 2) {
//     return this;
//   }
//   let mid = Math.floor(this.length / 2);
//   let left = this.slice(0, mid).mergeSort();
//   let right = this.slice(mid).mergeSort();
//
//   merge(left, right);
// };

// function merge(left, right) {
//   let merged = [];
//
//   while (left.length > 0 && right.length > 0) { // && or ||?
//     if (left[0] <= right[0]) {
//       merged.push(left.shift());
//     } else if (left[0] > right[0]) {
//       merged.push(right.shift());
//     }
//   }
//   merged.concat(left, right);
//   // return merged;
// }
//
//
// const compA = (a,b) => {
//
//   if (a > b) {
//     return -1;
//   } else if (a < b){
//     return 1;
//   } else {
//     return 0;
//   }
//
// };
//
// // console.log([1,9,2,3,0,5,6,43,24].mergeSort(compA)); // ONE WITH COMPARATOR
// console.log([1,9,2,3,0,5,6,43,24].mergeSort()); // ONE WITHOUT
