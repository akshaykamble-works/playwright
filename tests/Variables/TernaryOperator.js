// Ternary Operator
const age = 20;
const isAdult = age >= 18 ? true : false;
console.log("Is the person an adult? " + isAdult);  
// example 2
let score = 85;
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';
console.log("Grade: " + grade);

// example 3
let a=number=100;
let b=number=200;
let max = a > b ? a : b;
console.log("Maximum value: " + max);