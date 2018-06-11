/*

Write a function called “isOddLength”.

Given a word, “isOddLength” returns whether the length of the given word is odd.

var output = isOddLength('special');
console.log(output); // --> true

*/ 

function isOddLength (word) { 
  var length = word.split('').length; 
  return isOdd(length); 
}

// Helper function isOdd? 
function isOdd (num) {
  return (num%2 !== 0) ? true : false; 
}


// Assert Equal function 
function assertEqual (actual, expected, testName) {
  if (actual === expected) {
  	return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}

// Input assertion testing
console.log(assertEqual( isOddLength('this'), false, 'Word length is not odd test')); 
console.log(assertEqual( isOddLength('I'), true, 'Word length is odd test')); 
console.log(assertEqual( isOddLength('special'), true, 'Long word is odd test')); 


