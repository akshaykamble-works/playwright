/*Undefined
• Definition: Variable declared but not assigned
• Syntax: Automatic (no explicit assignment)
• Example:
let x; // undefined
• Use Case: Default state, missing values
Key Points:
- Automatically assigned by JavaScript
- typeof undefined → "undefined"
- Indicates absence of value (unintentional)

Null
• Definition: Intentional absence of value
• Syntax:
let x = null;
• Example:
let user = null; // no user
• Use Case: Reset variables, empty state
Key Points:
- Explicitly assigned by programmer
- typeof null → "object" (JavaScript bug)
- Indicates absence of value (intentional)
- null == undefined → true
- null === undefined → false
*/

let x; // undefined
console.log(x); // Output: undefined
let user = null; // no user
console.log("Value user is "+user); // Output: null