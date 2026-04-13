// Functions are reusable blocks of code that perform a specific task. They can take inputs (parameters) and return outputs (results). Functions help in organizing code, improving readability, and reducing redundancy.

// Syntax:
// function functionName(parameters) {
//   // code to be executed
// }

// Example 1: Basic function
function greet(name) {
  return "Hello, " + name + "!";
}
console.log(greet("Alice"));
console.log("--------------------");

// Example 2: Function with multiple parameters
function add(a, b) {
  return a + b;
}
console.log("Sum of 5 and 3 is: " + add(5, 3));
console.log("--------------------");

// Example 3: Function without parameters
function sayHello() {
  return "Hello, World!";
}
console.log(sayHello());
console.log("--------------------");

// Example 4: Function with default parameters
function multiply(a, b = 1) {
  return a * b;
}
console.log(multiply(5)); // Uses default value for b
console.log(multiply(5, 2)); // Overrides default value for b
console.log("--------------------");

// Example 5: Function that returns a value
function square(x) {
  return x * x;
}
console.log("Square of 4 is: " + square(4));
console.log("--------------------");