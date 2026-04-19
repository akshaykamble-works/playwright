/*
Interface in JavaScript is a concept that defines a contract for classes to implement. It specifies a set of methods and properties that a class must have, without providing the actual implementation. Interfaces are not natively supported in JavaScript, but they can be simulated using classes and objects.

In JavaScript, we can create an interface by defining a class with method signatures (without implementation) and then have other classes implement that interface by providing the actual implementation of those methods. This helps in ensuring that certain classes adhere to a specific structure and behavior, promoting code consistency and maintainability.

Here's an example of how to simulate interfaces in JavaScript:

In this example, we define an `Animal` interface with a method `speak()`. The `Dog` and `Cat` classes implement this interface by providing their own implementation of the `speak()` method. This way, we can ensure that any class that implements the `Animal` interface will have a `speak()`
 method, allowing us to use polymorphism when working with different types of animals.

Interfaces are a powerful tool for designing and organizing code, especially in larger applications where multiple classes need to adhere to a common structure or behavior. They help in creating a clear contract for developers to follow when implementing classes, making the

*/

// 🔹 1. Interface utility (enforces method implementation)
class Interface {
    constructor(name, methods) {
        this.name = name;
        this.methods = methods;
    }

    // 🔹 Check if class implements interface
    static ensureImplements(object, ...interfaces) {
        for (let iface of interfaces) {
            for (let method of iface.methods) {
                if (!object[method] || typeof object[method] !== "function") {
                    throw new Error(
                        `Class does not implement method '${method}' from interface '${iface.name}'`
                    );
                }
            }
        }
    }
}

// 🔹 2. Define Interfaces

// Base interface
const UserInterface = new Interface("UserInterface", [
    "login",
    "logout"
]);

// Another interface
const PaymentInterface = new Interface("PaymentInterface", [
    "makePayment"
]);

// 🔹 Interface inheritance (combine interfaces)
const AdvancedUserInterface = new Interface("AdvancedUserInterface", [
    ...UserInterface.methods,
    "upgradeAccount"
]);

// 🔹 3. Class implementing multiple interfaces
class Customer {
    constructor(name) {
        this.name = name;

        // enforce interfaces
        Interface.ensureImplements(
            this,
            UserInterface,
            PaymentInterface,
            AdvancedUserInterface
        );
    }

    // Implement UserInterface
    login() {
        console.log(`${this.name} logged in`);
    }

    logout() {
        console.log(`${this.name} logged out`);
    }

    // Implement PaymentInterface
    makePayment(amount) {
        console.log(`${this.name} paid ₹${amount}`);
    }

    // Implement AdvancedUserInterface
    upgradeAccount() {
        console.log(`${this.name} upgraded account`);
    }
}

// 🔹 4. Usage
const user = new Customer("Akshay");

user.login();
user.makePayment(500);
user.upgradeAccount();
user.logout();