/* 
Write a function called “isLessThan”.
Given 2 numbers, “isLessThan” returns whether num2 is less than num1.

var output = isLessThan(9, 4);
console.log(output); // --> true
*/ 



function isLessThan (num1, num2) { 
  return (num2<num1) ? true : false; 
} 

// Input testing 

var output = isLessThan(9, 4);
console.log(output); // --> true

var output1 = isLessThan(4, 4);
console.log(output1); // --> false

var output2 = isLessThan(4, 9);
console.log(output2); // --> false