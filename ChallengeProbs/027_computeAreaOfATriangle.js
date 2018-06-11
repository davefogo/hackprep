/*

Write a function called “computeAreaOfATriangle”.

Given the base and height of a triangle, “computeAreaOfATriangle” returns its area.

var output = computeAreaOfATriangle(4, 6);
console.log(output); // --> 12

*/
// Main function
function computeAreaOfATriangle (base, height) { 
  return 0.5*base*height; 
}

// Assert Equal Function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  }
    return 'FAILED [' + testName + '[ Expected: ' + expected + ', but got ' + actual; 
}

// Assert Input Testing 

console.log(assertEqual(computeAreaOfATriangle(4,6), 12, 'Area of triangle is 12 for a base of 4 and height of 6')); 

