/* 
Write a function called “computePower”.

Given a number and an exponent, “computePower” returns the given number, raised to the given exponent.

var output = computePower(2, 3);
console.log(output); // --> 8
*/ 

var computePower = function (num, exponent) { 
  var value = 1; 
  for (var i=0; i<exponent; i++) { 
    value *= num; 
  }
    return value; 
}

// Assert Equal function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';  
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual;
 }

// Input test
console.log(assertEqual(computePower(2,3), 8, '2 to the 3rd power is 8'));
 