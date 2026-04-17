/*
Inheritance is a fundamental concept in object-oriented programming (OOP) that allows a new class (called a child or subclass) to inherit properties and behaviors (fields and methods) from an existing class (called a parent or superclass).
 This promotes code reusability and establishes a natural hierarchical relationship between classes.

In JavaScript, inheritance can be achieved using the `class` syntax introduced in ES6, or through prototype-based inheritance. 
The `extends` keyword is used to create a subclass that inherits from a parent class.

Here's an example of inheritance in JavaScript using classes:

inheritance allows us to create a new class that is based on an existing class,
inheriting its properties and methods while also allowing us to add new features or override existing ones. This promotes code reusability and helps in organizing code in a more structured way.

inheritance is a powerful feature that enables us to create a hierarchy of classes, where subclasses can inherit and extend the functionality of their parent classes, making our code more modular and easier to maintain. 


*/

class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log(`${this.name} makes a sound.`);
    }
}   
class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call the parent class constructor
        this.breed = breed; 
    }

    speak() {
        console.log(`${this.name} barks.`);
    }
}
class Cat extends Animal {
    constructor(name, color) {
        super(name); // Call the parent class constructor
        this.color = color;
    }

    speak() {
        console.log(`${this.name} meows.`);
    }
}

let dog = new Dog("Buddy", "Golden Retriever");
let cat = new Cat("Whiskers", "Orange");

dog.speak(); // Output: Buddy barks.
console.log("Name:", dog.name); // Output: Name: Buddy
console.log("Breed:", dog.breed); // Output: Breed: Golden Retriever

cat.speak(); // Output: Whiskers meows.
console.log("Name:", cat.name); // Output: Name: Whiskers
console.log("Color:", cat.color); // Output: Color: Orange


// Example Of Inheritance

class Vehicle {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    displayInfo() {
        console.log(`Make: ${this.make}, Model: ${this.model}`);
    }
}

class Car extends Vehicle {
    constructor(make, model, doors) {
        super(make, model); // Call the parent class constructor    
        this.doors = doors;
    }

    displayCarInfo() {
        this.displayInfo(); // Call the parent class method
        console.log(`Doors: ${this.doors}`);
    }
}

let myCar1 = new Car("Toyota", "Camry", 4);
let mycar2=new Car("Honda", "Civic", 4);
let mycar3=new Car("Ford", "Mustang", 2);
let mycar4=new Car("Mahindra", "XUV700", 4);
console.log("--------------------");
myCar1.displayCarInfo();
console.log("--------------------");
mycar2.displayCarInfo();

console.log("--------------------");
mycar3.displayCarInfo();
console.log("--------------------");
mycar4.displayCarInfo();
// Output:
// Make: Toyota, Model: Camry
// Doors: 4     
