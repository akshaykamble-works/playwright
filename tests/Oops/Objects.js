// Object in javascript is a collection of properties, where each property is a key-value pair. Objects are used to store and organize data in a structured way. They can represent real-world entities, such as a person, a car, or a book, and can contain various types of data, including strings, numbers, arrays, and even other objects.

// Example 1: Creating an object
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};
console.log("Person Object:", person);
console.log("--------------------");

// Example 2: Accessing object properties
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person.city);
console.log("--------------------");

// Example 3: Adding new properties to an object
person.country = "USA";
console.log("Updated Person Object:", person);
console.log("--------------------");

// Example 4: Modifying existing properties
person.age = 26;
console.log("Modified Person Object:", person);
console.log("--------------------");

// Example 5: Deleting a property from an object
delete person.city;
console.log("Person Object after deletion:", person);
console.log("--------------------");

// Example 6: Using a method in an object
let car = {
  make: "Toyota",
  model: "Camry",
  year: 2020,
  getCarInfo: function() {
    return `${this.year} ${this.make} ${this.model}`;
  }
};
console.log("Car Information:", car.getCarInfo());
console.log("--------------------");

// Example 7: Nested objects
let company = {
  name: "Tech Solutions",
  employees: {
    employee1: {
      name: "John",
      position: "Developer"
    },
    employee2: {
      name: "Jane",
      position: "Designer"
    }
  }
};
console.log("Company Object:", company);
console.log("Employee 1 Name:", company.employees.employee1.name);
console.log("Employee 2 Position:", company.employees.employee2.position);
console.log("--------------------");

// Example 8: Iterating through object properties
console.log("Iterating through person object properties:");
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}   