/*

Write a function called “getFirstElement”.

Given an array, “getFirstElement” returns the first element of the given array.

Notes:
* If the given array has a length of 0, it should return undefined.

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

*/ 
// Main function
var getFirstElement = function (array) { 
  if (array.length === 0) { 
  	 return undefined;
  }  
    return array[0];
 }

// Input testing 
var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1

var output1 = getFirstElement([]); 
console.log(output1); 