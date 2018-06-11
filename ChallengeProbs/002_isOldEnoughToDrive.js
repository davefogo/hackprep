/* Write a function called “isOldEnoughToDrive”.
Given a number, in this case an age, “isOldEnoughToDrive” returns whether a person of this given age is old enough to legally drive in the United States.
Notes:
* The legal driving age in the United States is 16. */ 

function isOldEnoughToDrive (age) { 
  if (age >=16) { 
  	return true; 	
  } else {    
    return false; 
  }
 } 


// Input testing 
var age = 0; 
var age1 = 15; 
var age2 = 16; 
var age3 = 50; 

console.log(isOldEnoughToDrive(age)); //false
console.log(isOldEnoughToDrive(age1)); // false
console.log(isOldEnoughToDrive(age2)); // true
console.log(isOldEnoughToDrive(age3)); // true 



