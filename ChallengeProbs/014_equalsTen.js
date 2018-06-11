/*
Write a function called “equalsTen”.
Given a number, “equalsTen” returns whether or not the given number is 10.

var output = equalsTen(9);
console.log(output); // --> false

*/

function equalsTen (num) {
  return (num === 10) ? true : false; 	
}

// Input Testing

var output = equalsTen(9);
console.log(output); // --> false

var output1 = equalsTen(10);
console.log(output1); // --> true
