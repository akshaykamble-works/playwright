var x; // declaring a variable without initializing it
console.log(x); // Output: undefined

x = 30; // assigning a value to the variable
console.log(x); // Output: 30

let y; // declaring a variable without initializing it
console.log(y); // Output: undefined
y = 500; // assigning a value to the variable
console.log(y); // Output: 500
const z = 90; // const z; declaring a constant without initializing it
// This will throw an error because constants must be initialized at the time of declaration
console.log(z); // Output: 90


// Reassinign a value to variable declared with var
var x = 50; // reassigning a new value to variable x
console.log(x); // Output: 50

// Reassigning a value to variable declared with let
//let y = 100; // reassigning a new value to variable y but will not allow to redeclare the variable y
//console.log(y); // Output: 100

// Reassigning a value to variable declared with const
// This will throw an error because constants cannot be reassigned
// z = 120; // Uncommenting this line will cause an error   

//example 3 const not allow to reassign the value
const planet = "Earth";
//planet="Mars"; // This will throw an error because constants cannot be reassigned
//console.log(planet); // Output: Earth
//planet = "Mars"; // This will throw an error because constants cannot be reassigned   

//Reassigning a value to variable declared let
let city = "Pune";
console.log(city); // Output: Pune
city = "Mumbai"; // reassigning a new value to variable city
console.log(city); // Output: Mumbai

// const variable cannot be reassigned
const country = "India";
console.log(country); // Output: India
//country = "USA"; // This will throw an error because constants cannot be reassigned   

//var variable can be redeclared and reassigned
var name = "John";
console.log(name); // Output: John
var name = "Doe"; // redeclaring and reassigning variable name
console.log(name); // Output: Doe