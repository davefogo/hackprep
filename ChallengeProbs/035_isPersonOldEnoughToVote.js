/*

Write a function called “isPersonOldEnoughToVote”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToVote” returns whether the given person is old enough to vote.

Notes:
* The legal voting age in the United States is 18.

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true

*/

// Main function 
var isPersonOldEnoughToVote = function (person) { 
  if (person.age >= 18) { 
    return true;  
  }
    return false; 
}

// Assert equal function 
var assertObjectsEqual = function (actual, expected, testName) { 
  var actualStr = JSON.stringify(actual); 
  var expectedStr = JSON.stringify(expected);

    if (actualStr === expectedStr) { 
      return 'PASSED'; 
    }
      return 'FAILED [' + testName + '] Expected' + expectedStr + ', but got ' + actualStr; 
}

// Input Testing 

var obj = {
  age: 19
};

console.log(assertObjectsEqual(isPersonOldEnoughToVote(obj), true, 'Age 19 is old enough to vote')); 



