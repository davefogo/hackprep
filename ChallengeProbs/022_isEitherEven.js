/*

Write a function called “isEitherEven”.

Given two numbers, “isEitherEven” returns whether or not either one of the given numbers is even.

var output = isEitherEven(1, 4);
console.log(output); // --> true

*/ 

function isEitherEven (num1, num2) { 
  return ( (num1%2 === 0) || (num2%2 === 0) ) ? true : false;
}

// Assert Equal function
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected: ' + expected + ', but got ' + actual; 
}

// Input assertion testing 

console.log(assertEqual( isEitherEven(4, 3), true, 'Either number is even')); 
console.log(assertEqual( isEitherEven(3, 3), false, 'Either number is not even')); 
console.log(assertEqual( isEitherEven(4, 4), true, 'Both numbers are even')); 
