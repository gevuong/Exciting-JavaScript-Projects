//Write an Array#merge_sort method; it should not modify the original array.
function mergeSort(array) {
  if (array.length < 2) {
    return array;
  } else {
    let mid = Math.floor(array.length / 2);

    let sortedLeft = mergeSort(array.slice(0, mid));
    let sortedRight = mergeSort(array.slice(mid));

    return merge(sortedLeft, sortedRight);
  }
}

function merge(left, right) {

  let sorted = [];
  while (left.length > 0 && right.length > 0) {

    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else if (right[0] < left[0]) {
      sorted.push(right.shift());
    }
  }
  return sorted.concat(left, right);
}

console.log(mergeSort([1,9,2,3,0,5,6,6,43,24]));
