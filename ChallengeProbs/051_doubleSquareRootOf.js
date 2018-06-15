/* 
Write a function called “doubleSquareRootOf”.
Given a number, “doubleSquareRootOf” returns double its square root.

var output = doubleSquareRootOf(121);
console.log(output); // --> 22
*/ 

// Main function 
var doubleSquareRootOf = function (num) { 
  return 2*Math.sqrt(num)
}

// Assert Equal function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}

// Input test
console.log(assertEqual(doubleSquareRootOf(121), 22, 'Double sqrt of 121 is 22')); 
