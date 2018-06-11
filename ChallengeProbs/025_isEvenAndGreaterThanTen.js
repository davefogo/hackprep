/* 

Write a function called “isEvenAndGreaterThanTen”.

Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false

*/ 

function isEvenAndGreaterThanTen (num) { 
  return (num%2 === 0 && num > 10) ? true : false; 
}

// Assert Equal fun(ction
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  }
    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}


// Assertion Input testing 

console.log (assertEqual (isEvenAndGreaterThanTen(14), true, 'Number is even and greater than 10. Expect true')); 

console.log (assertEqual (isEvenAndGreaterThanTen(11), false, 'Number is not even but greater than 10. Expect false')); 

console.log (assertEqual (isEvenAndGreaterThanTen(2), false, 'Number is even but NOT greater than 10. Expect false')); 