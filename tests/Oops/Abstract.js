class Shape {
    constructor(name) {
        if (this.constructor === Shape) {
            throw new Error("Cannot create object of abstract class");
        }
        this.name = name;
    }

    // Abstract method
    area() {
        throw new Error("Method 'area()' must be implemented");
    }

    display() {
        console.log("Shape:", this.name);
    }
}

// Child Class 1
class Circle extends Shape {
    constructor(radius) {
        super("Circle");
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius * this.radius;
    }
}

// Child Class 2
class Rectangle extends Shape {
    constructor(length, width) {
        super("Rectangle");
        this.length = length;
        this.width = width;
    }

    area() {
        return this.length * this.width;
    }
}

// Usage
// const s = new Shape("Test"); ❌ Not allowed

const c = new Circle(5);
c.display();
console.log("Circle Area:", c.area());

const r = new Rectangle(10, 5);
r.display();
console.log("Rectangle Area:", r.area());