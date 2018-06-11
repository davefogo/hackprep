/* Write a function called “isOldEnoughToDrink”.
Given a number, in this case an age, “isOldEnoughToDrink” returns whether a person of this given age is old enough to legally drink in the United States.
Notes:
* The legal drinking age in the United States is 21. */

function isOldEnoughToDrink (age) { 
  if (age>=21) { 
    return true; 
  } else {
  	return false; 
  }
}

// Input test 
var age = 20; 
var age1 = 21; 
var age2 = 22; 
var age3 = -1; 

console.log(isOldEnoughToDrink(age)); // false
console.log(isOldEnoughToDrink(age1)); // true 
console.log(isOldEnoughToDrink(age2)); // true
console.log(isOldEnoughToDrink(age3)); // false 