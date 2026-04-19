// Access specifiers in JavaScript are not explicitly defined like in some other programming languages (e.g., public, private, protected). However, JavaScript uses a concept called "encapsulation" to control access to properties and methods of objects.
// In JavaScript, you can achieve encapsulation using closures, symbols, or the new private fields syntax (introduced in ES2022).

// Example of using closures for encapsulation
class person{
    personName;
    age;
    rollNo;

    constructor(name, age, rollNo) {
        this.personName = name;
        this.age = age;
        this.rollNo = rollNo;
    }

    displayInfo() {
        console.log(`Name: ${this.personName}`);
        console.log(`Age: ${this.age}`);
        console.log(`Roll No: ${this.rollNo}`);
    }
}
let person1 = new person("Alice", 25, 101);
person1.displayInfo(); // Accessing public method to display information
console.log("--------------------");

// Example of using private fields for encapsulation
class Employee {
    #employeeName; // Private field
    #employeeId;   // Private field

    constructor(name, id) {
        this.#employeeName = name;
        this.#employeeId = id;
    }

    displayInfo() {
        console.log(`Name: ${this.#employeeName}`);
        console.log(`ID: ${this.#employeeId}`);
    }   

}
let employee1 = new Employee("Bob", 123);
employee1.displayInfo(); // Accessing public method to display information
console.log("--------------------");

// Attempting to access private fields directly will result in an error
// console.log(employee1.#employeeName); // SyntaxError: Private field '#employeeName' must be declared in an enclosing class   
// console.log(employee1.#employeeId);   // SyntaxError: Private field '#employeeId' must be declared in an enclosing class

// In JavaScript, all properties and methods are public by default, but using closures or private fields allows you to create private members that cannot be accessed from outside the class, providing a way to control access and maintain encapsulation.

/*
 Static members in JavaScript are properties and methods that belong to the class itself rather than to instances of the class. They are defined using the `static` keyword and can be accessed directly on the class without needing to create an instance. Static members are often used for utility functions, constants, or any functionality that is related to the class as a whole rather than to individual instances.

 Here's an example of static members in JavaScript:

 In this example, we have a `MathUtils` class with two static methods: `add` and `multiply`. These methods can be called directly on the class without creating an instance. We also have a `Circle` class with a static property `pi` and an instance method `area` that uses the static property. Finally, we have a `TemperatureConverter` class with static methods for converting temperatures between Celsius and Fahrenheit.

 Static members provide a way to organize code that is related to the class as a whole, making it easier to access and maintain shared functionality without needing to create instances of the class.
*/  
class AccessSpecifier {
#creditcard;
 protectedhomeAddress;
 publicName;

    constructor(name, homeAddress, creditcard) {
        this.publicName = name; // Public property
        this.protectedhomeAddress = homeAddress; // Protected property (convention)
        this.#creditcard = creditcard; // Private property
    }

    displayInfo() {
        console.log(`Name: ${this.publicName}`);
        console.log(`Home Address: ${this.protectedhomeAddress}`);
        console.log(`Credit Card: ${this.#creditcard}`);
    }   


}
let accessSpecifier1 = new AccessSpecifier("Alice", "123 Main St", "1234-5678-9012-3456");
accessSpecifier1.displayInfo(); // Accessing public method to display information
console.log("--------------------");

// Attempting to access private and protected members directly
// console.log(accessSpecifier1.#creditcard); // SyntaxError: Private field '#creditcard' must be declared in an enclosing class
// console.log(accessSpecifier1.protectedhomeAddress); // Accessible but should be treated as protected by convention
console.log(accessSpecifier1.publicName); // Accessible as it's a public property   