// Class in javascript is a blueprint for creating objects. It defines a set of properties and methods that the objects created from the class will have. Classes in JavaScript were introduced in ECMAScript 2015 (ES6) and provide a more structured and object-oriented way to create and manage objects.

// Example 1: Creating a class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method to display person's information
    displayInfo() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}
// Creating an instance of the Person class
let person1 = new Person("Alice", 25);
console.log(person1.displayInfo());
console.log("--------------------");
console.log(person1.name); // Accessing property directly
console.log(person1.age);  // Accessing property directly
console.log("--------------------");

// Example 2: Creating another class with more properties and methods   
class Student {
    name;
    age;
    grade;
    division;
    rollNo;

    constructor(name, age, grade, division, rollNo) {
        this.name = name;
        this.age = age;
        this.grade = grade;
        this.division = division;
        this.rollNo = rollNo;
    }

    displayStudentInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Grade: ${this.grade}`);
        console.log(`Division: ${this.division}`);
        console.log(`Roll No: ${this.rollNo}`);

    }
}
let student1 = new Student("Bob", 20, "A", "B", 101);// Object creation using class
console.log(student1.displayStudentInfo());
console.log("--------------------");
student1.displayStudentInfo(); // Calling method to display student information
