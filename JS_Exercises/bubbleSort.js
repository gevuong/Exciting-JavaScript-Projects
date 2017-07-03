Array.prototype.bubbleSort = function() {
  let sorted = false;

  while (sorted === false) {
    sorted = true;

    for (let i = 0; i < this.length; i++) {
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

console.log([1,6,3,8,6,5,10].bubbleSort()); // [1,3,5,6,6,8,10]
