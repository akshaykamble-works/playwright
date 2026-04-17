/*
 Overloading is a feature in some programming languages that allows 
 the same function name to be used for
multiple methods with the same name but different parameters.
 In JavaScript, overloading is not supported directly,
 but we can achieve similar functionality using default parameters,
 rest parameters, or by checking the number and type of arguments passed to a function.


*/

class Calculator {

    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    add(...args) {
        return args.reduce((sum, val) => sum + val, 0);
    }

}
let cal = new Calculator();
console.log(cal.add(1, 2));       // 3
console.log(cal.add(1, 2, 3));    // 6


// Method overloading can be achieved by checking the number and type of arguments
class Greeter {
    greet(...args) {
        if (args.length === 1 && typeof args[0] === "string") {
            return "Hello, " + args[0] + "!";
        } else if (args.length === 2 && typeof args[0] === "string" && typeof args[1] === "number") {
            return "Hello, " + args[0] + "! You are " + args[1] + " years old.";
        } else {
            return "Hello!";
        }
    }
}
function greetUser(value, age, isStudent) {
    if (typeof value === "string") {
        console.log("Hello, " + value + "!");
    }

    if (typeof age === "number") {
        console.log("Your age is: " + age); 
    }

    let studentStatus = isStudent ? "a student" : "not a student";
    console.log("You are " + studentStatus);  

    return "Function executed successfully";
}
console.log(greetUser("Bob", 25, true));
console.log("--------------------");
console.log(greetUser("Charlie", 30, false));

let greeter = new Greeter();
console.log(greeter.greet("Alice")); // Hello, Alice!
console.log(greeter.greet("Bob", 30)); // Hello, Bob! You are 30 years old.
console.log(greeter.greet()); // Hello! 