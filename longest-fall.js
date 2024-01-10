// add whatever parameters you deem necessary

//Write a function called longestFall, which accepts an array of integers, and returns the length of the longest consecutive decrease of integers.
function longestFall(arr) {
  if (arr.length === 0) return 0;

  let currentFall = 1;
  let maxFall = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) {
      currentFall++;
      maxFall = Math.max(maxFall, currentFall);
    } else {
      currentFall = 1;
    }
  }

  return maxFall;
}
