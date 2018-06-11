/* 

Write a function called “getLengthOfTwoWords”.
Given 2 words, “getLengthOfTwoWords” returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9

*/ 

function getLengthOfTwoWords (word1, word2) { 
  var length1 = word1.split('').length
  var length2 = word2.split('').length; 
  
  return length1 + length2; 

}

// Input testing 

var result = getLengthOfTwoWords ( 'some', 'words'); 
console.log(result); 

var output = getLengthOfTwoWords ( 'good', 'god'); 
console.log(output); 