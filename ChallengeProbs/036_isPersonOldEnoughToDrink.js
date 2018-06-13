/* 

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrink” returns whether the 
given person is old enough to drink.

Notes:
* The legal drinking age in the United States is 21.

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false
*/

// Main function 
var isPersonOldEnoughToDrink = function (person) { 
  if (person.age >= 21) { 
    return true;
  }
    return false;
}

// Assert Objects Equal function 
var assertObjectsEqual = function (actual, expected, testName) { 
  var actualStr = JSON.stringify (actual); 
  var expectedStr = JSON.stringify (expected); 

    if (actualStr === expectedStr) { 
      return 'PASSED';
    }  
      return 'FAILED [' + testName + '] Expected ' + expectedStr + ', but got ' + actual; 
}

// Input testing 
var obj = {
  age: 16
};

var obj1 = {
  age: 21
};

console.log(assertObjectsEqual(isPersonOldEnoughToDrink(obj), false, '16 is too young to drink')); 
console.log(assertObjectsEqual(isPersonOldEnoughToDrink(obj1), true, '21 is old enough to drink')); 