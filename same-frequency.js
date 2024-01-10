// add whatever parameters you deem necessary

//Write a function called sameFrequency.
//Given two positive integers, find out if the two numbers have the same frequency of digits.
function sameFrequency(num1, num2) {
  const strNum1 = num1.toString();
  const strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let digit of strNum1) {
    countNum1[digit] = (countNum1[digit] || 0) + 1;
  }

  for (let digit of strNum2) {
    countNum2[digit] = (countNum2[digit] || 0) + 1;
  }

  for (let digit in countNum1) {
    if (countNum1[digit] !== countNum2[digit]) {
      return false;
    }
  }

  return true;
}
