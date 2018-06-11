/* Write a function called “isOldEnoughToVote”.
Given a number, in this case an age, ‘isOldEnoughToVote’ returns whether a person of this given age is old enough to legally vote in the United States.
Notes:
* The legal voting age in the United States is 18. */

function isOldEnoughToVote (age) { 
  return (age>=18) ? true : false; 
}

// Input Testing
var age = 17; 
var age1 = 18; 
var age2 = 19; 
var age3 = 25; 

console.log(isOldEnoughToVote(age)); 
console.log(isOldEnoughToVote(age1)); 
console.log(isOldEnoughToVote(age2)); 
console.log(isOldEnoughToVote(age3)); 
