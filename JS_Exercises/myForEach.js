Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

// callback function is essentially function (el) { console.log(el) }
// Test Case
const NUMS = [1, 2, 3, 4, 5];
NUMS.myForEach(function (el) {
  console.log(el);
});
