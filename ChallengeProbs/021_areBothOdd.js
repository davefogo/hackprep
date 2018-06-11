/* 

Write a function called “areBothOdd”.

Given 2 numbers, “areBothOdd” returns whether or not both of the given numbers are odd.

var output = areBothOdd(1, 3);
console.log(output); // --> true

*/ 

function areBothOdd ( num1, num2 ) { 
  return (num1%2 !== 0 && num2%2 !== 0) ? true : false; 
}

// Assert equal function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  } 
    return 'FAILED [' + testName + '] Expected: ' + expected + ', but got ' + actual; 
}

// Input assertion testing 

console.log(assertEqual( areBothOdd(1,3), true, 'Both numbers are odd test')); 
console.log(assertEqual( areBothOdd(3,4), false, 'Both numbers must be odd test')); 
console.log(assertEqual( areBothOdd(4,4), false, 'Both numbers are even test')); 



