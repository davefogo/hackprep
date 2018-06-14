/*

Write a function called “computePerimeterOfATriangle”.

Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20

*/
// Main function 
var computePerimeterOfATriangle = function (side1, side2, side3) { 
  return side1 + side2 + side3; 
}

// Assert Equal function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  }
    return 'FAILED [' + testName + '] Expected ' + ', but got ' + actual; 
}

// Input testing 
console.log(assertEqual(computePerimeterOfATriangle(6,4,10), 20, 'Perimeter of triangle is 20')); 


