/*

Write a function called “computePerimeterOfARectangle”.

Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14

*/
// Main function
var computePerimeterOfARectangle = function (length, width) { 
  return 2*length + 2* width; 
}

// Assert Equal function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}

// Input testing 
console.log (assertEqual(computePerimeterOfARectangle(5,2), 14, 'Perimeter is 14')); 


