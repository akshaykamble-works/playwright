
function details(name,age){
    return "My name is " + name + " and I am " + age + " years old.";
}
console.log(details("Akshay", 25));
console.log("--------------------");

function calculateArea(radius) {
    return Math.PI * radius * radius;
}
console.log("Area of circle with radius 5 is: " + calculateArea(5));
console.log("--------------------");


function Mydetails(name, age, city){
    return "My name is " + name + ", I am " + age + " years old and I live in " + city + ".";
}
console.log(Mydetails("Akshay", 25, "Pune")); 
console.log("--------------------");

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log("Factorial of 5 is: " + factorial(5));
console.log("--------------------");

function isEven(num) {
    return num % 2 === 0;
}
console.log("Is 4 even? " + isEven(4));
console.log("Is 7 even? " + isEven(7));
console.log("--------------------");
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of 'Playwright' is: " + reverseString("Playwright"));
console.log("--------------------");
function priceWithTax(price, taxRate) {
    return price + (price * taxRate);
}
console.log("Price with tax: " + priceWithTax(100, 0.15));
console.log("--------------------");