// Increment and Decrement Operators
let a = 5;
console.log("Initial value of a: " + a);

// Increment Operator
a++;
console.log("After incrementing a: " + a);

// Decrement Operator
a--;
console.log("After decrementing a: " + a);

// Using increment and decrement in expressions
let b = 10;
console.log("Initial value of b: " + b);

let c = b++ + 5; // Post-increment: uses b then increments
console.log("Value of c (b++ + 5): " + c);
console.log("Value of b after post-increment: " + b);

let d = ++b + 5; // Pre-increment: increments b then uses it
console.log("Value of d (++b + 5): " + d);
console.log("Value of b after pre-increment: " + b);

/*
Key Points:
- Increment (++) increases value by 1
- Decrement (--) decreases value by 1
- Can be used in expressions (postfix and prefix)
- Postfix (x++): uses value then increments
- Prefix (++x): increments then uses value
*/   
   
