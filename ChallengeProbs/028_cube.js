/*

Write a function called “cube”.

Given a number, “cube” returns the cube of that number.

var output = cube(3);
console.log(output); // --> 27

*/ 
// Main function 
function cube (num) {
	
  return num*num*num; 	

}


// Assert Equal function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) {
    return 'PASSED'
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual;
}

// Assertion input test 

console.log(assertEqual(cube(3), 27, 'Cube of 3 is 27 test')); 

