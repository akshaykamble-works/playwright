// While loop is a control flow statement that repeats a block of code while a condition remains true.
// The loop stops as soon as the condition becomes false.

/* Syntax:
while (condition) {
  // code to be executed
}
*/

// Example 1: Basic while loop
let count = 0;
while (count < 5) {
  console.log("Count: " + count);
  count++;
}
console.log("--------------------");

// Example 2: Sum of the first 5 natural numbers
let sum = 0;
const limit = 5;
let i = 1;
while (i <= limit) {
  sum += i;
  i++;
}
console.log("Sum of first " + limit + " natural numbers is: " + sum);
console.log("--------------------");

// Example 3: Print numbers from 1 to 10
let number = 1;
while (number <= 10) {
  console.log(number);
  number++;
}
console.log("--------------------");

// Example 4: Countdown from 10 to 1
let num = 10;
while (num > 0) {
  console.log(num);
  num--;
}
console.log("--------------------");

// Example 5: Print even numbers from 2 to 10
let j = 2;
while (j <= 10) {
  console.log(j);
  j += 2;
}
console.log("--------------------");

// Example 6: Check odd/even numbers from 1 to 10
let k = 1;
while (k <= 10) {
  if (k % 2 === 0) {
    console.log(k + " is even.");
  } else {
    console.log(k + " is odd.");
  }
  k++;
}
