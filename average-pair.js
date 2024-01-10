// add whatever parameters you deem necessary

// Write a function called ***averagePair***. Given a sorted array of integers and a target average,
//determine if there is a pair of values in the array where the average of the pair equals the target average.
//There may be more than one pair that matches the average target.

// **Constraints**:

// Time Complexity: O(N)

function averagePair(arr, targetAverage) {
  //check edge case, return false if array is empty
  if (arr.length === 0) return false;

  //initialize two pointers
  let start = 0;
  let end = arr.length - 1;

  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    if (avg === targetAverage) {
      return true;
    } else if (avg < targetAverage) {
      start++;
    } else {
      end--;
    }
  }

  return false;
}
