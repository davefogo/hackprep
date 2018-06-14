/* 


Write a function called “computeAreaOfARectangle”.

Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

*/ 

// Main function
var computeAreaOfARectangle = function (length, width) { 
  return length*width; 
}

// Assert Equal function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + ' but got ' + actual; 
}

// Input testing 
console.log(assertEqual(computeAreaOfARectangle(4,8), 32, 'Area of rectangle is 32 for length of 4 and width of 8')); 


