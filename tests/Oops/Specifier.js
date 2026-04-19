class Employee {
    // 🔒 Private field
    #salary;

    constructor(name, salary) {
        // 🌐 Public property
        this.name = name;

        // 🟡 Protected (by convention)
        this._department = "QA";

        // 🔒 Private property
        this.#salary = salary;
    }

    // 🌐 Public method
    getDetails() {
        console.log(`Name: ${this.name}, Department: ${this._department}`);
        this.#showSalary(); // calling private method
    }

    // 🔒 Private method
    #showSalary() {
        console.log(`Salary: ${this.#salary}`);
    }
}

// 👶 Child class (Inheritance)
class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }

    test() {
        console.log(`${this.name} is testing in ${this._department} department`);
        
        // ❌ Cannot access private
        // console.log(this.#salary); // ERROR
    }
}

// 🚀 Usage
const emp = new Tester("Akshay", 50000);

// 🌐 Public access
console.log(emp.name);          // ✅
emp.getDetails();               // ✅

// 🟡 Protected (accessible but not recommended outside)
console.log(emp._department);   // ⚠️ (works, but should avoid)

// ❌ Private (not accessible)
// console.log(emp.#salary);     // ERROR

/*
In this example, we have an `Employee` class with a private field `#salary`, a public property `name`, and a protected property `_department`. The `getDetails` method is public and can access the private method `#showSalary`. The `Tester` class extends `Employee` and can access the public and protected members but cannot access the private field directly. This demonstrates how access specifiers work in JavaScript using conventions and private fields. 
⚡ Key Differences (Important for Interviews)
Feature	Java 🟢	JavaScript 🟡
Public	✅ Yes	✅ Default
Private	✅ Yes	✅ # syntax
Protected	✅ Yes	❌ Not real (use _)
Default	✅ Yes	❌ Not available
Enforcement	✅ Strict (compile-time)	⚠️ Partial (runtime)
OOP Strength	💪 Strong	⚠️ Flexible

*/