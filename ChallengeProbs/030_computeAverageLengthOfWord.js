/*

Write a function called “computeAverageLengthOfWords”.

Given two words, “computeAverageLengthOfWords” returns the average of their lengths.

var output = computeAverageLengthOfWords('code', 'programs');
console.log(output); // --> 6

*/

// Main function 

var computeAverageLengthOfWords = function (word1, word2) { 
  var length1 = word1.split('').length;
  var length2 = word2.split('').length;
    return average(length1, length2);



}

// Helper function:Average

var average = function (num1, num2) { 
  return (num1 + num2)/2
}

// Assert Equal Function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + ']! Expected ' + expected + ', but got ' + actual; 
}


// Assertion Input testing 
console.log(assertEqual(computeAverageLengthOfWords('code', 'programs'), 6, 'The average length of the words is 6'));
