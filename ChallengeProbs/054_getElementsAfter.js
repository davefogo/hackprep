/* 
Write a function called “getElementsAfter”.

Given an array and an index, “getElementsAfter” returns a new 
array with all the elements after (but not including) the given 
index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
*/

// Main function 
var getElementsAfter = function (array, index) { 
  return array.slice(index+1); 
 }

// Input testing
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
