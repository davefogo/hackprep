/* 
Write a function called “computeSquareRoot”.
Given a number, “computeSquareRoot” returns its square root.

var output = computeSquareRoot(9);
console.log(output); // --> 3
*/
// Main function
var computeSquareRoot = function (num) { 
  return Math.sqrt(num); 
}

// Assert Equal function
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}

// Input testing
console.log (assertEqual(computeSquareRoot(9), 3, 'Sqaure root of 9 is 3')); 




