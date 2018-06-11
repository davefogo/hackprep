/* Write a function called “isLessThan30”.
Given a number, “isLessThan30” returns whether the given number is less than 30.

var output = isLessThan30(9);
console.log(output); // --> true
*/

function isLessThan30 (num) { 
  return (num<30) ? true : false; 
}

// Input testing 
var output = isLessThan30(9);
console.log(output); // --> true

var output = isLessThan30(35);
console.log(output); // --> false

