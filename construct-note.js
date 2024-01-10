// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.
// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.
// Constraints:
// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:
// Examples:
// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

//in other words, for every character in `message` there are equal or more characters in `letters` the message can be constructed (true)

function constructNote(message, letters) {
  //create the objects to stroe the frequency
  let messageFreq = {};
  let lettersFreq = {};

  //populate freq counters by iterating over each character
  for (let char of message) {
    messageFreq[char] = (messageFreq[char] || 0) + 1;
  }

  for (let char of letters) {
    lettersFreq[char] = (lettersFreq[char] || 0) + 1;
  }

  //compare the frequency counters
  for (let char in messageFreq) {
    if (!lettersFreq[char] || lettersFreq[char] < messageFreq[char]) {
      return false;
    }
  }
  return true;
}
