/*
Write a function called “getLengthOfThreeWords”.

Given 3 words, “getLengthOfThreeWords” returns the sum of their lengths.

var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output); // --> 14 
*/

// Main function
var getLengthOfThreeWords = function (word1, word2, word3) { 
  var length1 = word1.split('').length; 
  var length2 = word2.split('').length;
  var length3 = word3.split('').length; 

    return sum(length1, length2, length3); 
}

// Helper function: Sum 
var sum = function (num1, num2, num3) { 
  return num1 + num2 + num3;  
}

// Assert Equal function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}

// Input testing 
console.log(assertEqual(getLengthOfThreeWords('some', 'other', 'words'), 14, 'Sume is 14'));
