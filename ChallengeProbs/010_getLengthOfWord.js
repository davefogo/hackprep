/* Write a function called “getLengthOfWord”.
Given a word, “getLengthOfWord” returns the length of the given word.

var output = getLengthOfWord('some');
console.log(output); // --> 4 */ 

function getLengthOfWord (word) { 

var splitWord = word.split(''); 

  return splitWord.length; 

}

// Input testing

var output = getLengthOfWord('some');
console.log(output); // --> 4 

var output1 = getLengthOfWord('heroine'); 
console.log(output1); // --> 7

