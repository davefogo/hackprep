/*
Write a function called “isSameLength”.

Given two words, “isSameLength” returns whether the given words have the same length.

var output = isSameLength('words', 'super');
console.log(output); // --> true
*/ 

function isSameLength (word1, word2) { 
  var length1 = word1.split('').length
  var length2 = word2.split('').length 
    return (length1 === length2) ? true : false; 
}


// Assert Equal function 
function assertEqual (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  } 
    return 'FAILED! [' + testName + '] Expected: ' + expected + ', but got ' + actual; 
}

// Input testing with assert equal 

console.log(assertEqual( isSameLength ('sniper', 'super'), false, 'words are not the same length')); 
console.log(assertEqual( isSameLength ('look', 'book'), true, 'words are the same length')); 
