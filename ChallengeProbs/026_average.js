/*

Write a function called “average”.

Given two numbers, “average” returns their average.

var output = average(4, 6);
console.log(output); // --> 5

*/ 
// Main Function
function average (num1, num2) {

  return (num1+num2)/2; 

}

// Assertion Function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual;  
}


// Assertion Input testing 
console.log(assertEqual (average (4,3), 3.5, 'Average is 3.5 between 3 and 4')); 
console.log(assertEqual (average (4,4), 4, 'Average is 4 between 4 and 4')); 
console.log(assertEqual (average (4,6), 5, 'Average between 4 and 6 is 5')); 




