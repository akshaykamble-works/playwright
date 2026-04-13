// Nested if condition
// Definition: A control structure that allows multiple levels of if statements, where one if statement is nested inside another.
/*Syntax:
if (condition1) {
  // code to be executed if condition1 is true
  if (condition2) {
    // code to be executed if condition2 is true
  } else {
    // code to be executed if condition2 is false
  }
} else {
  // code to be executed if condition1 is false
}
*/
// Example:
let num = 10;
if (num > 0) {
  console.log(num + " is a positive number.");
  if (num % 2 === 0) {
    console.log(num + " is an even number.");
  } else {
    console.log(num + " is an odd number.");
  }
} else {
  console.log(num + " is not a positive number.");
}

// Example 2:
let marks=85;
if(marks>=90 && marks <=100){
console.log("Grade: A");
}else if(marks>=80 && marks <90){
console.log("Grade: B");
}else if(marks>=70 && marks <80){
console.log("Grade: C");
}else if(marks>=60 && marks <70){
console.log("Grade: D");
}else{
console.log("Grade: F");
}   

// Example 3:
let browser = "Firefox";
if (browser ==="Chrome") {
  console.log("You are using Chrome.");
} else if (browser === "Firefox") {
  console.log("Firefox is a popular web browser.");
} else if (browser === "Safari") {
  console.log("Safari is the default browser on Apple devices.");
} else {
  console.log("You are using an unsupported browser.");
}


