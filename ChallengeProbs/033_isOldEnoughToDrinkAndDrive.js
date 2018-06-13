/* 
Write a function called “isPersonOldEnoughToDrinkAndDrive”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrinkAndDrive” returns whether the given person is old enough to legally drink and drive in the United States.

Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false


*/

// Main function 
var isPersonOldEnoughToDrinkAndDrive = function (obj) { 

  return false;   
}

// AssertEqual Function 
var assertEqual = function (actual, expected, testName) { 
  if (actual === expected) { 
    return 'PASSED'; 
  }
    return 'FAILED [' + testName + '] Expected: ' + expected + ', but got ' + actual; 
}

// Input assertion test

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(assertEqual(output, false, 'test if person is old enough')); // --> false


