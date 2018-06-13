/*

Write a function called “addFullNameProperty”.

Given an object that has a “firstName” property and a “lastName” property, “addFullNameProperty” 
adds a “fullName” property whose value is a string with the first name and last name separated by a space.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};
addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'

*/

// Main function 
var addFullNameProperty = function (obj) { 
  obj.fullName = (obj.firstName + ' ' + obj.lastName); 
return obj.fullName;
}


var person = { 
      firstName: 'Jade', 
      lastName: 'Smith'
}; 

// Assert Equal function 
var assertEqual = function (expected, actual, testName) { 
  if (actual === expected) { 
    return 'PASSED';
  }

    return 'FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual; 
}


// Assertion test input 
console.log (assertEqual(addFullNameProperty(person), 'Jade Smith', 'Full name property added'));