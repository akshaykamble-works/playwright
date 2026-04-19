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