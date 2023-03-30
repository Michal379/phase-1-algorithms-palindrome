const { expect } = require("chai");

function isPalindrome(word) {
  // Write your algorithm here
// const wordArray=["abba","a","racecar","robot",""]
//   if (word===isPalindrome){
//     return true
//   }else{
// return false
//   }
// }

const reversedWord=reverse(word)
if (word===reversedWord){
  return true
}else{
  return false
}
function reverse(word){
  const wordArray=word.split("");
  const reversedWordArray=wordArray.reverse();
  const reversedWord=reversedWordArray.join("");
  return reversedWord;
}
}
/* 
  Add your pseudocode here
sis=sis===isPalindrome//true
brother=rethorb===isPalindrome//false
*/ 
/*
  Add written explanation of your solution here
  there is only one iteration through the code
  the answer is true if the string is palindrome and 
  false if it isn't palindrome
  i will use else if
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // run learn test to check for errors
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting:true");
  console.log("=>",isPalindrome("abba"));

  console.log("Expecting:true");
  console.log("=>",isPalindrome("a"));

}

module.exports = isPalindrome;
