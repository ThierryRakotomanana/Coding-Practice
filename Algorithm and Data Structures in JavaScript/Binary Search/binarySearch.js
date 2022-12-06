let nums = [2, 6, 0, 12, 16, 7, 16, 61, 32, 52, 11, 13];

function binarySearchHelper(array, target) {
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (target === array[mid]) {
      return mid;
    } else if (target < array[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
}

console.log(binarySearch(nums, 7));
console.log(binarySearch(nums, 15));