// If condition
// Definition: A control structure that executes a block of code if a specified condition is true.
/*Syntax:
if (condition) {
  // code to be executed if condition is true
}
*/
// Example:
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Output: You are an adult.    

// Example 2:
let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else if (score >= 60) {
  console.log("Grade: D");
} else {
  console.log("Grade: F");
}

// Output: Grade: B 
// Example 3:
let a = 100;
let b = 200;
if (a > b) {
  console.log("Maximum value: " + a);
} else {
  console.log("Maximum value: " + b);
}

// Output: Maximum value: 200
// Even Odd Example:
let number = 15;
if (number % 2 === 0) {
  console.log(number + " is even.");
} else {
  console.log(number + " is odd.");
}

// Output: 15 is odd.
// even odd number in range 1 to 100
for (let i = 1; i <= 100; i++) 
    {
    if (i % 2 === 0) {
        console.log(i + " is even.");
    } else {
        console.log(i + " is odd.");
    }
}