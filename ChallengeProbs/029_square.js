/*

Write a function called “square”.

Given a number, “square” should return the square of the given number.

var output = square(5);
console.log(output); // --> 25

*/ 

// Main function 
function square (num) { 
  return num*num; 
}

// Assert Equal function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'
  }
    return 'FAILED [' + testName + ']! Expected ' + expected + ', but got ' + actual; 
}

// Assertion input testing 
console.log(assertEqual(square(5), 25, 'Square of 5 is 25 test'));


