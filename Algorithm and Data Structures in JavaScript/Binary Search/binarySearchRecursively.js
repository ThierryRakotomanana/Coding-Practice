let nums = [2, 6, 0, 12, 16, 61, 32, 52, 11, 13, 7, 16];

function binarySearch(array, target) {
  return binarySearchHelper(array, target, 0, array.length - 1);
}

function binarySearchHelper(array, target, left, right) {
  if (left > right) {
    return false;
  }
  let mid = Math.floor((left + right) / 2);
  if (target === array[mid]) {
    return mid;
  } else if (target < array[mid]) {
      return binarySearchHelper(array, target, left, mid - 1);
  } else {
    return binarySearchHelper(array, target, mid - 1, right);
  }
  return false;
}

console.log(binarySearch(nums, 7));
console.log(binarySearch(nums, 15));