/*
Write a function called “isEqualTo”.
Given 2 numbers, “isEqualTo” returns whether num2 is equal to num1.

var output = isEqualTo(11, 10);
console.log(output); // --> false

*/

function isEqualTo (num1, num2) { 
  return (num1 === num2) ? true : false;  
}

// Assert function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) {
    return 'PASSED'; 
  } else { 
    return 'FAILED [' +  testName +  '] Expected ' + expected + ', but got ' + actual; 
  }
}

// Input testing 

console.log(assertEqual (isEqualTo(11,10), false, 'num2 is not equal to num1')); 
console.log(assertEqual (isEqualTo(20,20), true, 'num2 is equal to num1'));
console.log(assertEqual (isEqualTo(30,100), false, 'num2 is not equal to num1'));


