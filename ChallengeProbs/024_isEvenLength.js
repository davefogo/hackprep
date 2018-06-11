/*

Write a function called “isEvenLength”.

Given a word, “isEvenLength” returns whether the length of the word is even.

var output = isEvenLength('wow');
console.log(output); // --> false

*/


function isEvenLength (word) { 
  var length = word.split('').length; 
  return isEven(length); 
}

// Helper function isOdd? 
function isEven (num) {
  return (num%2 === 0) ? true : false; 
}


// Assert Equal function 
function assertEqual (actual, expected, testName) {
  if (actual === expected) {
  	return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}

// Input assertion testing
console.log(assertEqual( isEvenLength('this'), true, 'Word length is even test')); 
console.log(assertEqual( isEvenLength('I'), false, 'Word length is not even test')); 
console.log(assertEqual( isEvenLength('wow'), false, 'Long word is not even test')); 
console.log(assertEqual( isEvenLength('special'), false, 'Long word is not even test')); 


