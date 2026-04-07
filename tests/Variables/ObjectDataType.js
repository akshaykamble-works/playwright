// Object data type can store multiple values as properties and methods.
// Object
const person = {firstName:"John", lastName:"Doe"};

// Array Object
const cars = ["Saab", "Volvo", "BMW"];
console.log(cars); // Output: ["Saab", "Volvo", "BMW"]
console.log("Car name is "+cars[1]); // Output: Volvo

// Date Object
const date = new Date("2022-03-25");
console.log(date); // Output: Fri Mar 25 2022 00:00:00 GMT+0000 (Coordinated Universal Time)
const details = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
console.log(details); // Output: {firstName: "John", lastName: "Doe", age: 50, eyeColor: "blue"}
const array = [1,2,3,4,5];
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element); // Output: 5 (last element of the array)
    
}