/* 

Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

var output = isOdd(9);
console.log(output); // --> true

*/ 

function isOdd (num) { 
  return (num%2 !== 0) ? true : false;  
}

// Assert Equal function 

function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }

    return 'FAILED [' + testName + '] Expected: ' + expected + ', but got ' + actual; 
}


// Input testing 

console.log(assertEqual(isOdd(3), true, 'num is odd'));
console.log(assertEqual(isOdd(4), false, 'num is not odd')); 
