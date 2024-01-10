// add whatever parameters you deem necessary

//Write a function called pivotIndex which accepts an array of integers,
// and returns the pivot index where the sum of the items to the left equal to the sum of the items to the right.
// If there are more than one valid pivot index, return the smallest value.
function pivotIndex(arr) {
  let totalSum = arr.reduce((acc, num) => acc + num, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (leftSum === totalSum - leftSum - arr[i]) {
      return i;
    }
    leftSum += arr[i];
  }

  return -1;
}
