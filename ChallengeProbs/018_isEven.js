/*
Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

var output = isEven(11);
console.log(output); // --> false
*/ 

function isEven (num) { 
  return num%2===0 ? true : false; 
}

// Assert Equal function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  }
    return 'FAILED [' + testName + '] Expected: ' + expected + ', but got ' + actual; 
}

// Input testing 
console.log(assertEqual(isEven(12), true, 'num is even'));
console.log(assertEqual(isEven(11), false, 'num is not even')); 

 
