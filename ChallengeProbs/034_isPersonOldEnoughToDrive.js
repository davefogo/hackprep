/*

Write a function called “isPersonOldEnoughToDrive”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrive” returns whether the 
given person is old enough to drive.

Notes:
* The legal driving age in the United States is 16.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrive(obj);
console.log(output); // --> true

*/

// Main function 

var isPersonOldEnoughToDrive = function (obj) { 
   
  if (obj.age >= 16) { 
    return true;  
  }
    return false; 
}

// Assert Equal function 
var assertObjectsEqual = function (actual, expected, testName) { 
  var actualStr = JSON.stringify(actual); 
  var expectedStr = JSON.stringify(expected); 

    if (actualStr === expectedStr) { 
      return 'PASSED'; 
    }
      return 'FAILED [' + testName + '] Expected ' + expectedStr + ', but got ' + actualStr; 
}


// Input test
var person = {
  age: 16
};


console.log(assertObjectsEqual(isPersonOldEnoughToDrive(person), true, 'test if person is older than 16')); 







