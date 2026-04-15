// Assignment operators are used to assign values to variables.
// Simple Assignment
let x = 20;
console.log("Initial value of x:", x); // 20
// Add and Assign (+=)
x += 5; // x = x + 5
console.log("x += 5 :", x); // 25
// Subtract and Assign (-=)
x -= 3; // x = x - 3
console.log("x -= 3 :", x); // 22
// Multiply and Assign (*=)
x *= 2; // x = x * 2
console.log("x *= 2 :", x); // 44
// Divide and Assign (/=)
x /= 4; // x = x / 4
console.log("x /= 4 :", x);

// Modulus and Assign (%=)
x %= 4; // x = x % 4
console.log("x %= 4 :", x); // 3
// ======================================================
// COMPARISON OPERATORS
// ======================================================
// Comparison operators compare values and return
// either true or false.
let a = 5; // number
let b = 50;
let c = "5"; // string
// == (Loose Equality → compares only value)
console.log(a == b); // false
console.log(a == c); // true (string "5" converted to number)

// === (Strict Equality → compares value AND datatype)
console.log(a === b); // false
console.log(a === c); // false
// != (Loose Inequality)
console.log(a != b); // true
// !== (Strict Inequality)
console.log(a !== c); // true