/*

Write a function called “addObjectProperty”.

Given two objects and a key, “addObjectProperty” sets a new property on the 1st object at the given key. The value of that new property is the entire 2nd object.

var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

*/
// Main function 
var addObjectProperty = function (obj1, key, obj2) {
  obj1[key] = obj2  
  return obj1[key]; 
}

// Input objects
var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};

var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};

// Assert Equal Function 
var assertObjectsEqual = function (actual, expected, testName) {
// Use stringify to convert JS values to JSON values (objects to strings) 
  actualStr = JSON.stringify(actual); 
  expectedStr = JSON.stringify(expected); 
// Test if actual = expected
   if (actualStr === expectedStr) { 
     // if true return passed
     return 'passed'; 
   } else { 
     return 'FAILED [' + testName + '] Expected ' + expectedStr + ', but got ' + actualStr; 
   }
} 
 

// Input assertion testing 
console.log(assertObjectsEqual(addObjectProperty(person1, 'manager', person2), { name: 'Mr. Burns', role: 'supervisor' }, 'Object property added'));



