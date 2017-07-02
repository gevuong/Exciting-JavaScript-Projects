Array.prototype.myTranspose = function () {
  let transposeArr = [];
  let subArr = [];
  for (let i = 0; i < this.length; i++) {
    // let elOne = this[i];
    for (let j = 0; j < this.length; j++) {
      // let elTwo = this[j];
      subArr.push(this[j][i]);
    }
    transposeArr.push(subArr);
    subArr = [];
  }
  return transposeArr;
};

console.log([[0, 1, 2], [3, 4, 5], [6, 7, 8]].myTranspose());
