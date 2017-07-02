Array.prototype.mySelect = function (callback) {
  const result = [];
  this.forEach(function (el) {
    if (callback(el)) {
      result.push(el);
    }
  });
  return result;
};

// test callback function
function lessThan10(num) {
  return num < 10;
}

console.log([1,8,13,45,3,24,56,4].mySelect(lessThan10));
