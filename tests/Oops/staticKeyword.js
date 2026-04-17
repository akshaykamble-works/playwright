/*
 Static keyword is used to define a static method or property in a class.
 Static members belong to the class itself rather than to any specific instance of the class.
 They can be accessed without creating an instance of the class.
 static methods are often used for utility functions that do not require access to instance-specific data, while static properties can be used to store class-level data that is shared among all instances of the class.
 statuc methods cannot access instance properties or methods directly, but they can access other static members of the class.
 static members are accessed using the class name, followed by the dot operator and the member name (e.g., ClassName.staticMethod()).
 static members are commonly used for operations that are related to the class as a whole, rather than to individual instances, such as mathematical calculations, utility functions, or shared data that is relevant to all instances of the class.
 staric methods can be called without creating an instance of the class, making them useful for performing operations that do not require access to instance-specific data.
 static properties can be used to store class-level data that is shared among all instances of the class, such as a counter for the number of instances created or a constant value that is relevant to the class as a whole.   
 static members can be accessed using the class name, followed by the dot operator and the member name (e.g., ClassName.staticMethod()), without needing to create an instance of the class.
 static members are often used for utility functions, mathematical calculations, or shared data that is relevant to all instances of the class, making them a powerful tool for organizing and structuring code in an object-oriented programming paradigm. 
 
 */

class MathUtils {
    static add(a, b) {
      return a + b;
    }
    
    static multiply(a, b) {
      return a * b;
    }
  }
  
  // Accessing static methods without creating an instance
  console.log(MathUtils.add(5, 3)); // Output: 8
  console.log(MathUtils.multiply(4, 6)); // Output: 24
  console.log("--------------------");

  // Example of static property
  class Circle {
    static pi = 3.14159;
    
    constructor(radius) {
      this.radius = radius;
    }
    
    area() {
      return Circle.pi * this.radius * this.radius;
    }
  }
  
  console.log("Value of pi:", Circle.pi); // Output: 3.14159
  let circle = new Circle(5);
  console.log("Area of the circle:", circle.area()); // Output: Area of the circle: 78.53975
  console.log("--------------------");
  
  // Example of static method accessing static property
  class TemperatureConverter {
    static celsiusToFahrenheit(celsius) {
      return (celsius * 9/5) + 32;
    }
    
    static fahrenheitToCelsius(fahrenheit) {
      return (fahrenheit - 32) * 5/9;
    }
  }
  
  console.log("25°C in Fahrenheit:", TemperatureConverter.celsiusToFahrenheit(25)); // Output: 77°F
  console.log("77°F in Celsius:", TemperatureConverter.fahrenheitToCelsius(77)); // Output: 25°C
  console.log("--------------------");
  
  // Example of static method accessing another static method
  class Calculator {
    static square(x) {
      return x * x;
    }
    
    static cube(x) {
      return x * Calculator.square(x);
    }
  }
  
  console.log("Square of 4:", Calculator.square(4)); // Output: 16
  console.log("Cube of 3:", Calculator.cube(3)); // Output: 27  
