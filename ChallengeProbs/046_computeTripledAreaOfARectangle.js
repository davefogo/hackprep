/* 


Write a function called “computeTripledAreaOfARectangle”.

Given a length and width of a rectangle, “computeTripledAreaOfARectangle” returns the rectangle’s area, multiplied by 3.

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24

*/ 

var computeTripledAreaOfARectangle = function (length, width) { 
  return 3*(length*width); 
}

// Assert Equal function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}

// Input test 
console.log (assertEqual(computeTripledAreaOfARectangle(2,4), 24, 'Tripled area of 8 is 24')); 
