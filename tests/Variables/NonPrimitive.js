/*
B. NON-PRIMITIVE (REFERENCE) DATA TYPES (Mutable)
Stored by REFERENCE
-
Can be changed after creation
3.8 Object
• Definition: Collection of key-value pairs
• Syntax:
{ key: value }
• Example:
{ name: "John", age: 30 }
• Use Case: Complex data structures, entities
Key Points:
- Mutable (properties can be added/changed)
- Accessed via dot or bracket notation
- typeof object → "object"
- Passed by reference
3.9 Array
• Definition: Ordered list of values
• Syntax:
[value1, value2, ...]
• Example:
[1, 2, 3, "text", true]
• Use Case: Lists, collections, sequences
Key Points:
- Special type of object
- Zero-indexed (starts at 0)
- typeof array → "object"
- Check with Array.isArray()
- Has methods: push(), pop(), map(), filter()
3.10 Function
• Definition: Reusable block of code
• Syntax:
function name() { }
• Example:
function greet() { return "Hi"; }
• Use Case: Reusable logic, operations
Key Points:
- First-class objects (can be assigned to variables)
- typeof function → "function"
- Can be passed as arguments
- Can return values
*/
({name: "John", age: 30});
console.log({ name: "John", age: "30" }); // Output: { name: "John", age: 30 }      
 [1, 2, 3, "text", true];
console.log([1, 2, 3, "text", true]); // Output: [1, 2, 3, "text", true]
function greet() { return "Hi"; }
console.log(greet()); // Output: Hi     