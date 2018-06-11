/*
Write a function called “isGreaterThan”.
Given 2 numbers, “isGreaterThan” returns whether num2 is greater than num1.

var output = isGreaterThan(11, 10);
console.log(output); // --> false
*/

function isGreaterThan (num1, num2) { 
  return (num2>num1) ? true : false; 
}


// Input testing
var output1 = isGreaterThan (11,10); 
var output2 = isGreaterThan (2, 20); 
var output3 = isGreaterThan (4,4); 

console.log(output1); // false
console.log(output2); // true 
console.log(output3); // false